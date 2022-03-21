import { Router } from "express";
import { get, detail, add, remove, update } from "../controller/products"
import { bibat } from "../midddleware/check"

const router = Router();

router.get("/product", get);

router.get("/", get);

router.get("/product/:id", detail)

router.post("/product", bibat, add);

router.delete("/product/:id", bibat, remove);

router.put("/product/:id", bibat, update)

export default router