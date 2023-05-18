import express from 'express';
import carRouter from './routes/CarRoute';

const app = express();

app.use(express.json());
app.use('/cars', carRouter);

export default app;
