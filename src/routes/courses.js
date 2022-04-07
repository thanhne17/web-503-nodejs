import { Router } from "express";
import { add, detail, getAll, remove, update } from "../controller/coureses";

const route = Router();

route.get("/course", getAll);
route.get("/course/:id", detail)
route.post("/course", add);
route.delete("/course/:id", remove)
route.put("/course/:id", update)

export default route
