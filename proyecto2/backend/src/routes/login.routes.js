import {Router} from 'express';
import loginService from '../services/loginServices.js';

const longinRouter = Router();

longinRouter.post('/', loginService);

export default longinRouter;