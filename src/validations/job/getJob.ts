import { celebrate, Joi } from 'celebrate';

export const getJob = celebrate({
  body: Joi.object({
    title: Joi.string().required().trim(),
    description: Joi.string().required().trim(),
    company: Joi.string().required().trim(),
    location: Joi.string().required().trim(),
  }),
});