import Joi from 'joi';

export default Joi.object({
  id: Joi.number().required(),
  description: Joi.string().required(),
  make: Joi.string().required(),
  model: Joi.string().required(),
  km: Joi.number().required(),
  image: Joi.string().required(),
});
