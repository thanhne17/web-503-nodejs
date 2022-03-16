import { Router } from 'express';
import { create, list, read } from '../controller/category';
import { bibat } from '../midddleware/check';

const router = Router();

router.get("/categories", bibat, list);
router.post('/category', bibat, create);
router.get('/category/:slug', bibat, read);
export default router