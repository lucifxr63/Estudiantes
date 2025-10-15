import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { healthRouter } from './routes/health';

const app = express();
const port = process.env.PORT ?? 3001;

app.use(cors());
app.use(helmet());
app.use(express.json());

app.use('/health', healthRouter);

app.get('/', (_req, res) => {
  res.status(200).json({
    message: 'Estudiantes API v0.1.0',
    links: {
      health: '/health'
    }
  });
});

app.listen(port, () => {
  console.log(`API listening on port ${port}`);
});
