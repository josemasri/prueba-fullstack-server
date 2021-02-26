import { createMaintenance, getAllMaintenance } from '../controllers/maintenance.controller';

import { Router } from 'express';
import { createCarValidator } from '../validators/';
import createMaintenanceValidator from '../validators/maintenance/createMaintenance.validator';
import { createValidator } from 'express-joi-validation';

const validator = createValidator({});

const router = Router();

router
  // Get all cars
  .get('/', getAllMaintenance)
  // Create a car
  .post('/', validator.body(createMaintenanceValidator), createMaintenance);

export default router;
