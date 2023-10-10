import express from "express";
import { IdGenerator } from "../services/IdGenerator";
import { TokenManager } from "../services/TokenManager";
import { PostDataBase } from "../dataBase/PostDataBase";
import { CommentController } from "../controller/CommentController";
import { CommentBusiness } from "../business/CommentBusiness";
import { CommentDataBase } from "../dataBase/CommentDataBase";


export const commentRouter = express.Router()
const commentControler = new CommentController(new CommentBusiness(
    new TokenManager(),
    new IdGenerator(),
    new PostDataBase(),
    new CommentDataBase()
))
commentRouter.post("/:id", commentControler.creatComment)

commentRouter.get("/:id", commentControler.getComments)

commentRouter.put("/:id/:commentId/like", commentControler.likeDislikeComments)