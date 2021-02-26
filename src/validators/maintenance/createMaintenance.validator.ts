import Joi from 'joi';

export default Joi.object({
  estimatedDate: Joi.date().required(),
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  carId: Joi.number().required(),
});
