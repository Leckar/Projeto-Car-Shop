import { Router } from 'express';

const router = Router();
const service = new CarService();
const controller = new CarController(service);

router.get('/:id', (req, res) => controller.getById(req, res));
router.post('/', (req, res) => controller.createNew(req, res));
router.get('/', (req, res) => controller.getAll(req, res));

export default router;
