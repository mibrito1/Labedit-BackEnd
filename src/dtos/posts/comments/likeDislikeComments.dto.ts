import { z } from "zod"

export interface LikeDislikeCommentsInputDTO {
    token: string,
    postId: string,
    commentId: string,
    like: boolean
}
export interface LikeDislikeCommentsOutputDTO {
    message: "Interação feita com sucesso!"
}
export const LikeDislikeCommentSchema = z.object({
    token: z.string(),
    postId: z.string(),
    commentId: z.string(),
    like: z.boolean()
}).transform(data => data as LikeDislikeCommentsInputDTO)