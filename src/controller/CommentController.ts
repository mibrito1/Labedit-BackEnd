import { Request, Response } from "express";
import { ZodError } from "zod";
import { BaseError } from "../errors/BaseError";
import { CreatCommentSchema } from "../dtos/posts/comments/CreatComment.dto";
import { GetCommentSchema } from "../dtos/posts/comments/GetComments.dto";
import { LikeDislikeCommentSchema } from "../dtos/posts/comments/likeDislikeComments.dto";
import { CommentBusiness } from "../business/CommentBusiness";

export class CommentController {
    constructor(
        private CommentBusiness: CommentBusiness
    ) { }
    public creatComment = async (req: Request, res: Response) => {
        try {
            const input = CreatCommentSchema.parse({
                token: req.headers.authorization,
                content: req.body.content,
                postId: req.params.id
            }
            )
            const output = await this.CommentBusiness.creatComment(input)
            res.status(201).send(output)
        } catch (error) {
            console.log(error)
            if (error instanceof ZodError) {
                res.status(400).send(error.issues)
            } else if (error instanceof BaseError) {
                res.status(error.statusCode).send(error.message)
            } else {
                res.status(500).send("Erro inesperado")
            }

        }
    }
    public getComments = async (req: Request, res: Response) => {
        try {
            const input = GetCommentSchema.parse({
                token: req.headers.authorization,
                postId: req.params.id
            }
            )
            const output = await this.CommentBusiness.getComment(input)
            res.status(200).send(output.comments)
        } catch (error) {
            console.log(error)
            if (error instanceof ZodError) {
                res.status(400).send(error.issues)
            } else if (error instanceof BaseError) {
                res.status(error.statusCode).send(error.message)
            } else {
                res.status(500).send("Erro inesperado")
            }
        }
    }

    public likeDislikeComments = async (req: Request, res: Response) => {
        try {
            const input = LikeDislikeCommentSchema.parse({
                token: req.headers.authorization,
                postId: req.params.id,
                commentId: req.params.commentId,
                like: req.body.like
            }
            )
            const output = await this.CommentBusiness.likeDislikeComment(input)
            res.status(200).send(output.message)
        } catch (error) {
            console.log(error)
            if (error instanceof ZodError) {
                res.status(400).send(error.issues)
            } else if (error instanceof BaseError) {
                res.status(error.statusCode).send(error.message)
            } else {
                res.status(500).send("Erro inesperado")
            }

        }
    }

}