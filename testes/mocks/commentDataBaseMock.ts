import { response } from "express"
import { BaseDatabase } from "../../src/dataBase/BaseDataBase"
import { COMMENT_LIKE, CommentDb, CommentDbWithCreatorName, LIKEDISLIKECOMMENTDB } from "../../src/models/Comments"

const mockComment: CommentDb[] = [{
    content: "conteudo",
    created_at: new Date().toISOString(),
    creator_id: "id-mock-admin",
    dislikes: 0,
    likes: 0,
    id: "comment1",
    post_id: "post-id-mock1",
    updated_at: new Date().toISOString()
},
{
    content: "conteudo",
    created_at: new Date().toISOString(),
    creator_id: "id-mock-user",
    dislikes: 0,
    likes: 0,
    id: "comment2",
    post_id: "post-id-mock2",
    updated_at: new Date().toISOString()
}]
const mockCommentWithCreatorName: CommentDbWithCreatorName[] = [{
    content: "conteudo",
    created_at: new Date().toISOString(),
    creator_id: "id-mock-admin",
    dislikes: 0,
    likes: 0,
    id: "comment1",
    post_id: "post-id-mock1",
    updated_at: new Date().toISOString(),
    creator_name: "maria"

},
{
    content: "conteudo",
    created_at: new Date().toISOString(),
    creator_id: "id-mock-user",
    dislikes: 0,
    likes: 0,
    id: "comment2",
    post_id: "post-id-mock2",
    updated_at: new Date().toISOString(),
    creator_name: "fulano"
}]

const likeDislikeMock: LIKEDISLIKECOMMENTDB[] = [{
    like: 1,
    comment_id: "comment2",
    user_id: "id-mock-admin",
},
{
    like: 0,
    comment_id: "comment1",
    user_id: "id-mock-user",
}]
export class CommentDataBaseMock extends BaseDatabase {
    public async creatComments(comment: CommentDb): Promise<void> {
        return
    }
    public async getComment(id: string): Promise<CommentDbWithCreatorName[]> {
        const response = mockCommentWithCreatorName
        return response
    }
    public async getCommentId(id: string): Promise<CommentDb> {
        const [response]: CommentDb[] = mockComment.filter(comment => comment.id === id)
        return response
    }

    public async creatLikeDislikeComment(likeDislike: LIKEDISLIKECOMMENTDB): Promise<void> {
        return
    }
    public async findLikeDislikeComment(likeDislike: LIKEDISLIKECOMMENTDB): Promise<COMMENT_LIKE | undefined> {
        const response = likeDislikeMock.find(like => like.user_id === likeDislike.user_id && like.comment_id === likeDislike.comment_id)
        if (response === undefined) {
            return undefined
        } else if (response.like === 1) {
            return COMMENT_LIKE.ALREADY_LIKED
        } else {
            return COMMENT_LIKE.ALREADY_DISLIKED
        }
    }
    public async removeLikeDislikeComment(likeDislike: LIKEDISLIKECOMMENTDB): Promise<void> {
        return
    }
    public async updateLikeDislikeComment(likeDislike: LIKEDISLIKECOMMENTDB): Promise<void> {
        return
    }
    public async editComment(comment: CommentDb, id: string): Promise<void> {
        return
    }

}