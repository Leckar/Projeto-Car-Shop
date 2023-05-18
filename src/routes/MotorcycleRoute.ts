import { Router } from 'express';
import MotorcycleService from '../Services/MotorcycleService';
import MotorcycleController from '../Controllers/MotorcycleController';

const router = Router();
const service = new MotorcycleService();
const controller = new MotorcycleController(service);

router.get('/:id', (req, res, next) => controller.getById(req, res, next));
router.put('/:id', (req, res, next) => controller.update(req, res, next));
router.post('/', (req, res, next) => controller.createNew(req, res, next));
router.get('/', (req, res) => controller.getAll(req, res));

export default router;
