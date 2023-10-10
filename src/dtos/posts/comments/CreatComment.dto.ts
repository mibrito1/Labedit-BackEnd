import z from "zod"
export interface CreatCommentInputDTO {
    token: string,
    content: string,
    postId: string
}

export type CreatCommentOutputDTO = undefined

export const CreatCommentSchema = z.object({
    token: z.string(),
    content: z.string().min(1),
    postId: z.string()
}).transform((data) => data as CreatCommentInputDTO)