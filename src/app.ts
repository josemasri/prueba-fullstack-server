import 'dotenv/config';

import { carRoutes, maintenanceRoutes } from './routes';

import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import { swaggerDocument } from './swagger';
import swaggerUi from 'swagger-ui-express';

const port = process.env.PORT || 4000;

const app = express();

// Conecting to mongoDB
mongoose.connect(
  process.env.MONGO_URI || '',
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log(`Mongoose Conected`)
);

app.use(express.json());

app.use(cors());

app.use('/', express.static(path.join(__dirname, 'public')))

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/car', carRoutes);

app.use('/maintenance', maintenanceRoutes);

app.listen(port, () => console.log(`Server running on port ${port}`));
