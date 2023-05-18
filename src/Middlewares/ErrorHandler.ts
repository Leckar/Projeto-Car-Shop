import { NextFunction, Request, Response } from 'express';

import statusPack from '../Utils/HttpStatuses';

const { notFound, unprocessableEntity } = statusPack;

class ErrorHandler {
  public static handle(
    error: Error,
    _req: Request,
    res: Response,
    next: NextFunction,
  ) {
    const { message } = error;
    switch (message) {
      case 'Car not found':
        res.status(notFound).json({ message });
        break;
      case 'Motorcycle not found':
        res.status(notFound).json({ message });
        break;
      case 'Invalid mongo id':
        res.status(unprocessableEntity).json({ message });
        break; 
      default:
        break;
    }
    
    next();
  }
}

export default ErrorHandler;