import { Request, Response } from 'express';

import Car from '../models/Car';

export const getAllCars = async (
  req: Request,
  res: Response
): Promise<void> => {
  const cars = await Car.find();

  res.send(
    cars.map(({ description,  carModel, make, estimatedate, image, id }) => ({
      description,
      make,
      model: carModel,
      estimatedate,
      id,
      image,
    }))
  );
};

export const addCar = async (req: Request, res: Response): Promise<void> => {
  const body = req.body;
  body.carModel = body.model;
  const car = new Car(body);
  try {
    await car.save();
    delete car.__v;
    delete car._id;
    const newCar = {
      ...car,
      model: car.carModel,
    };
    delete newCar.carModel;
    res.send({
      message: 'Car created Succesfully',
      newCar,
    });
  } catch (error) {
    res.status(500).send({
      message: 'An error ocurred',
      error,
    });
  }
};
