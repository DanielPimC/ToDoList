import express from "express"
import { UserBusiness } from "../business/UserBusiness"
import { UserController } from "../controller/UserController"
import { UserData } from "../data/UserData"

export const userRouter = express.Router()

const userController = new UserController(new UserBusiness(new UserData()))

userRouter.post("/signup", userController.signup)
userRouter.post("/login", userController.login)