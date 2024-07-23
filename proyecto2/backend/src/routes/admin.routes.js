import {Router} from 'express'
import { getAdmin, postAdmin, deleteAdmin } from '../controllers/admin.controller.js';

const adminRouter = Router();

adminRouter.post('/', postAdmin);
adminRouter.get('/', getAdmin);
adminRouter.delete('/:id', deleteAdmin);

export default adminRouter;