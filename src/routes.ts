import { Request, Response, Router } from 'express';
import { CreateMessageController } from './controllers/CreateMessageController';
import { ListMessageController } from './controllers/ListMessageController';

const router = Router();

const createMessageController = new CreateMessageController();
const listMessageController = new ListMessageController();

router.get('/', (req: Request, res: Response) => {
  return res.json({ message: 'Bem vindo a API Dio Shopping' });
});

router.get('/message', listMessageController.hanle);
router.post('/message', createMessageController.handle);

export { router };
