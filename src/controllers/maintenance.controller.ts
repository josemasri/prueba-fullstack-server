import Car, { ICar } from '../models/Car';
import Maintenance, { IMaintenance } from '../models/Maintenance';
import { Request, Response } from 'express';

export const getAllMaintenance = async (
  req: Request,
  res: Response
): Promise<void> => {
  const maintenances = await Maintenance.find({}).populate('car');
  res.json(maintenances);
};

export const createMaintenance = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { carId, firstName, lastName, estimatedDate } = req.body;
  // Find a Car
  const car = await Car.findOne({ id: carId });

  const maintenance = new Maintenance();
  maintenance.car = car?._id;
  maintenance.firstName = firstName;
  maintenance.lastName = lastName;
  maintenance.estimateDate = estimatedDate;
  const newMaintenance = await maintenance.save();

  res.json({ ...newMaintenance, car });
};
