import { Router } from "express";
import { get, detail, add, remove, update, search } from "../controller/products"
import { bibat, isAdmin, requireSignIN, isAuth } from "../midddleware/check"
import { userById } from "../controller/user";

const router = Router();

router.get("/product", get);

router.get("/product/:id", detail)

router.post("/product/:userId", isAuth, requireSignIN, isAdmin, add);

router.delete("/product/:id", bibat, remove);

router.put("/product/:id", bibat, update);

router.post("/product", search)

router.param("userId", userById)

export default router