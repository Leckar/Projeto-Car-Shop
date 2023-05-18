import { Router } from 'express';
import CarService from '../Services/CarService';
import CarController from '../Controllers/CarController';

const router = Router();
const service = new CarService();
const controller = new CarController(service);

router.get('/:id', (req, res, next) => controller.getById(req, res, next));
router.put('/:id', (req, res, next) => controller.update(req, res, next));
router.post('/', (req, res, next) => controller.createNew(req, res, next));
router.get('/', (req, res) => controller.getAll(req, res));

export default router;
