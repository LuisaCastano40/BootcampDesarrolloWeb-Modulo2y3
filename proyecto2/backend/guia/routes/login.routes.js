import {Router} from 'express';
import loginService from '../services/login.js';

const longinRouter = Router();

longinRouter.post('/', loginService);

export default longinRouter;