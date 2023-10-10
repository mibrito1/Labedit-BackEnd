import z from "zod";
import { CommentModelWithCreatorName } from "../../../models/Comments";


export interface GetCommentInputDTO {
    token: string,
    postId: string
}
export interface GetCommentOutputDTO {
    comments: CommentModelWithCreatorName[]
}
export const GetCommentSchema = z.object({
    token: z.string(),
    postId: z.string()
}).transform(data => data as GetCommentInputDTO)