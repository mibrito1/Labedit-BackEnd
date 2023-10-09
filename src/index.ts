import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { number } from "zod"
import { postRouter } from "./router/postRouter"
import { userRouter } from "./router/userRouter"
dotenv.config()
const api = express()
api.use(express.json())
api.use(cors())
api.listen(Number(process.env.PORT), () => {
    console.log("Estou ouvindo a porta", Number(process.env.PORT))
})
api.use("/post", postRouter)
api.use("/user", userRouter)



