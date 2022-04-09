import { Router } from "express";
import { addVideo, getAllVideo, getOneVideo, removeVideo } from "../controller/video";

const router = Router();

router.get("/video", getAllVideo);

router.get("/video/:id", getOneVideo);

router.post("/video", addVideo);

router.delete("/video/:id", removeVideo)

export default router