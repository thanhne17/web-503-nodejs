import { Router } from "express";
import { signin, signUp } from "../controller/auths";
import {getAllUser, removeUser, userById} from "../controller/user"
import { getOneUser, updateUser } from "../controller/user";

const router = Router();

router.post("/signup", signUp)
router.post("/signin", signin)
router.get("/user/:id", getOneUser)
router.put("/user/:id", updateUser)
router.get("/user", getAllUser)
router.delete("/user/:id", removeUser)

export default router
