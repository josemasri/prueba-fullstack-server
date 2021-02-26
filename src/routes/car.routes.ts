import { addCar, getAllCars } from '../controllers/car.controller';

import { Router } from 'express';
import { createCarValidator } from '../validators/';
import { createValidator } from 'express-joi-validation';

const validator = createValidator();

const router = Router();

router
  // Get all cars
  .get('/', getAllCars)
  // Create a car
  .post('/', validator.body(createCarValidator), addCar);

export default router;
