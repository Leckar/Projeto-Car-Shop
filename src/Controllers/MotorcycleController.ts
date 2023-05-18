import { NextFunction, Request, Response } from 'express';

import MotorcycleService from '../Services/MotorcycleService';
import IMotorcycle from '../Interfaces/IMotorcycle';
import statusPack from '../Utils/HttpStatuses';

const { ok, created } = statusPack;

class MotorcycleController {
  private _service: MotorcycleService;
  
  constructor(service: MotorcycleService) {
    this._service = service;
  }

  async createNew(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await this._service.createVehicle(req.body as IMotorcycle);
      return res.status(created).json(result);
    } catch (error) {
      next(error);
    }
  }

  async getAll(_req: Request, res: Response) {
    const result = await this._service.getAll();
    return res.status(ok).json(result);
  }

  async getById(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    try {
      const result = await this._service.getById(id as string);
      return res.status(ok).json(result);
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    try {
      const result = await this._service.update(id as string, req.body as IMotorcycle);
      return res.status(ok).json(result);
    } catch (error) {
      next(error);
    }
  }
}

export default MotorcycleController;