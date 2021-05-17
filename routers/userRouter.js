import express from "express";
import routes from "../routes";

import {
    users,
    userDetail,
    editProfile,
    changePassword
} from "../controller/userController";

const userRouter = express.Router();

userRouter.get(routes.users, users);
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.changePassword, changePassword);
userRouter.get(routes.userDetail, userDetail);

export default userRouter;


// MVC (pattern)
//M (modell) data
//V (view) how does the data look
//C (controller) function that looks for the data