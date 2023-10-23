import express, { Request, Response } from "express";


import { IdGenerator } from "../services/IdGenerator";
import { UserDataBase } from "../dataBase/userDatabase";
import { TokenManager } from "../services/TokenManager";
import { UserController } from "../controller/userController";
import { UserBusiness } from "../business/userBusness";
import { HashManager } from "../services/hashManager";
export const userRouter = express.Router()
const userController = new UserController(
    new UserBusiness(
        new IdGenerator(),
        new UserDataBase(),
        new HashManager(),
        new TokenManager()
    )
)  //instancia
userRouter.get("/", userController.oiMirian)

userRouter.post('/signup', userController.signup)

userRouter.post('/login', userController.login)