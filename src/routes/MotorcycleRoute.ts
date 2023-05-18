import { Router } from 'express';

const router = Router();
const service = new MotorcycleService();
const controller = new MotorcycleController(service);

router.get('/:id', (req, res) => controller.getById(req, res));
router.post('/', (req, res) => controller.createNew(req, res));
router.get('/', (req, res) => controller.getAll(req, res));

export default router;
