import { Request, Response } from 'express';
import { ListMessageService } from '../services/ListMessagesService';

class ListMessageController {
  async hanle(req: Request, res: Response) {
    const listMessageService = new ListMessageService();

    const allMessages = await listMessageService.execute();

    return res.json(allMessages);
  }
}

export { ListMessageController };
