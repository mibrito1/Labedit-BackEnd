
import { COMMENT_LIKE, CommentDb, CommentDbWithCreatorName, LIKEDISLIKECOMMENTDB } from "../models/Comments";
import { BaseDatabase } from "./BaseDataBase";

export class CommentDataBase extends BaseDatabase {
    public static COMMENT_TABLE = "comments"
    public static LIKE_TABLE = "like_dislike_comment"

    public async creatComments(comment: CommentDb): Promise<void> {
        await BaseDatabase.connection(CommentDataBase.COMMENT_TABLE).insert(comment)
    }
    public async getComment(id: string): Promise<CommentDbWithCreatorName[]> {
        const response = await BaseDatabase.connection(CommentDataBase.COMMENT_TABLE).select(
            `${'users'}.name as creator_name`,
            `${CommentDataBase.COMMENT_TABLE}.id`,
            `${CommentDataBase.COMMENT_TABLE}.creator_id`,
            `${CommentDataBase.COMMENT_TABLE}.post_id`,
            `${CommentDataBase.COMMENT_TABLE}.content`,
            `${CommentDataBase.COMMENT_TABLE}.likes`,
            `${CommentDataBase.COMMENT_TABLE}.dislikes`,
            `${CommentDataBase.COMMENT_TABLE}.created_at`,
            `${CommentDataBase.COMMENT_TABLE}.updated_at`
        )
            .join
            (
                `${'users'}`,
                `${CommentDataBase.COMMENT_TABLE}.creator_id`,
                "=",
                `${'users'}.id`,
            )
            .where({
                post_id: id
            })
        return response
    }
    public async getCommentId(id: string): Promise<CommentDb> {
        const [response]: CommentDb[] = await BaseDatabase.connection(CommentDataBase.COMMENT_TABLE).where({
            id
        })
        return response
    }

    public async creatLikeDislikeComment(likeDislike: LIKEDISLIKECOMMENTDB): Promise<void> {
        await BaseDatabase.connection(
            CommentDataBase.LIKE_TABLE
        ).insert(likeDislike)
    }
    public async findLikeDislikeComment(likeDislike: LIKEDISLIKECOMMENTDB): Promise<COMMENT_LIKE | undefined> {
        const [response] = await BaseDatabase.connection(
            CommentDataBase.LIKE_TABLE
        ).where({
            comment_id: likeDislike.comment_id,
            user_id: likeDislike.user_id
        })
        if (response === undefined) {
            return undefined
        } else if (response.like === 1) {
            return COMMENT_LIKE.ALREADY_LIKED
        } else {
            return COMMENT_LIKE.ALREADY_DISLIKED
        }
    }
    public async removeLikeDislikeComment(likeDislike: LIKEDISLIKECOMMENTDB): Promise<void> {
        await BaseDatabase.connection(
            CommentDataBase.LIKE_TABLE
        ).del().where({
            comment_id: likeDislike.comment_id,
            user_id: likeDislike.user_id
        })
    }
    public async updateLikeDislikeComment(likeDislike: LIKEDISLIKECOMMENTDB): Promise<void> {
        await BaseDatabase.connection(
            CommentDataBase.LIKE_TABLE
        ).update(likeDislike).where({
            comment_id: likeDislike.comment_id,
            user_id: likeDislike.user_id
        })
    }
    public async editComment(comment: CommentDb, id: string): Promise<void> {
        await BaseDatabase.connection(CommentDataBase.COMMENT_TABLE).update(comment).where({
            id
        })
    }

}