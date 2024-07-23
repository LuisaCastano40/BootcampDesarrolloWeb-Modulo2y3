import {Router} from 'express'
import { getUsers, getOneUser, postUser, putUser, deleteUser } from '../controllers/user.controller.js'

const usersRouter = Router();

usersRouter.post('/', postUser);
usersRouter.get('/:id', getOneUser);
usersRouter.get('/', getUsers);
usersRouter.put('/:id', putUser);
usersRouter.delete('/:id', deleteUser);

export default usersRouter;