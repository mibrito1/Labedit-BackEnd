import { CommentDataBase } from "../dataBase/CommentDataBase";
import { PostDataBase } from "../dataBase/PostDataBase";
import { CreatCommentInputDTO, CreatCommentOutputDTO } from "../dtos/posts/comments/CreatComment.dto";
import { GetCommentInputDTO, GetCommentOutputDTO } from "../dtos/posts/comments/GetComments.dto";
import { LikeDislikeCommentsInputDTO, LikeDislikeCommentsOutputDTO } from "../dtos/posts/comments/likeDislikeComments.dto";
import { BadError } from "../errors/BadError";
import { NonAuthorizedError } from "../errors/NonAuthorizedError";
import { COMMENT_LIKE, Comment, CommentWithCreatorName, LIKEDISLIKECOMMENTDB } from "../models/Comments";
import { Post, } from "../models/Posts";
import { IdGenerator } from "../services/IdGenerator";
import { TokenManager, TokenPayload } from "../services/TokenManager";

export class CommentBusiness {
    constructor(
        private tokenManager: TokenManager,
        private idGenerator: IdGenerator,
        private postDataBase: PostDataBase,
        private commentDataBase: CommentDataBase,

    ) {

    }
    public creatComment = async (input: CreatCommentInputDTO): Promise<CreatCommentOutputDTO> => {
        const {
            token, content, postId
        } = input
        const tokenPayload: TokenPayload | null = this.tokenManager.getPayload(token)
        if (
            !tokenPayload
        ) {
            throw new NonAuthorizedError()
        }
        const id = this.idGenerator.generate()
        const newComment = new Comment(
            id,
            tokenPayload.id,
            postId,
            content,
            0,
            0,
            new Date().toISOString(),
            new Date().toISOString()
        )
        await this.commentDataBase.creatComments(newComment.toCommentDb())
        const post = await this.postDataBase.getPostId(postId)
        const newPost = new Post(
            post.id, post.creator_id, post.content, post.likes, post.dislikes, post.comments + 1, post.created_at, post.updated_at
        )
        await this.postDataBase.editPost(newPost.toPostDb(), postId)
        return
    }
    public getComment = async (input: GetCommentInputDTO): Promise<GetCommentOutputDTO> => {
        const {
            token,
            postId
        } = input
        const tokenPayload: TokenPayload | null = this.tokenManager.getPayload(token)
        if (
            !tokenPayload
        ) {
            throw new NonAuthorizedError()
        }

        const comments = await this.commentDataBase.getComment(postId)
        const commentModel = comments.map(comment => {

            return new CommentWithCreatorName(
                comment.id,
                comment.creator_id,
                comment.post_id,
                comment.content,
                comment.likes,
                comment.dislikes,
                comment.created_at,
                comment.updated_at,
                comment.creator_name
            )
                .toCommentModelWithCreatorName()
        })
        const output = { comments: commentModel }
        return output
    }
    public likeDislikeComment = async (input: LikeDislikeCommentsInputDTO): Promise<LikeDislikeCommentsOutputDTO> => {
        const {
            token, postId, commentId, like
        } = input
        const tokenPayload: TokenPayload | null = this.tokenManager.getPayload(token)
        if (
            !tokenPayload
        ) {
            throw new NonAuthorizedError()
        }
        const comment = await this.commentDataBase.getCommentId(commentId)
        if (
            !comment
        ) {
            throw new BadError("Comentario não existe!")
        }
        if (
            comment.creator_id === tokenPayload.id
        ) {
            throw new NonAuthorizedError("O criador nao deve curtir seu proprio comentário!")
        }
        const CommentEditado = new Comment(
            comment.id,
            comment.creator_id,
            comment.post_id,
            comment.content,
            comment.likes,
            comment.dislikes,
            comment.created_at,
            comment.updated_at,
        )
        const likeDislikeDb: LIKEDISLIKECOMMENTDB = {
            user_id: tokenPayload.id,
            comment_id: commentId,
            like: like ? 1 : 0          //? simboliza um ternario, antes dos : if, depois dos : else
        }
        const usuarioInteragiu = await this.commentDataBase.findLikeDislikeComment(likeDislikeDb)
        if (usuarioInteragiu === COMMENT_LIKE.ALREADY_LIKED) {
            if (like) {
                await this.commentDataBase.removeLikeDislikeComment(likeDislikeDb)
                CommentEditado.removeLike()
            } else {
                await this.commentDataBase.updateLikeDislikeComment(likeDislikeDb)
                CommentEditado.removeLike()
                CommentEditado.addDislike()
            }
        } else if (usuarioInteragiu === COMMENT_LIKE.ALREADY_DISLIKED) {
            if (!like) {
                await this.commentDataBase.removeLikeDislikeComment(likeDislikeDb)
                CommentEditado.removeDislike()
            } else {
                await this.commentDataBase.updateLikeDislikeComment(likeDislikeDb)
                CommentEditado.removeDislike()
                CommentEditado.addLike()
            }
        } else {
            await this.commentDataBase.creatLikeDislikeComment(likeDislikeDb)
            like ? CommentEditado.addLike() : CommentEditado.addDislike()
        }
        await this.commentDataBase.editComment(CommentEditado.toCommentDb(), commentId)
        const output: LikeDislikeCommentsOutputDTO = {
            message: "Interação feita com sucesso!"
        }
        return output
    }


}