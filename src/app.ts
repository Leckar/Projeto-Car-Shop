import express from 'express';
import carRouter from './routes/CarRoute';
import motorcycleRouter from './routes/MotorcycleRoute';
import ErrorHandler from './Middlewares/ErrorHandler';

const app = express();

app.use(express.json());
app.use('/cars', carRouter);
app.use('/motorcycles', motorcycleRouter);
app.use(ErrorHandler.handle);

export default app;
