// create celebrate with joi validation for craete product fields name, description, creater

import { celebrate, Joi } from 'celebrate';

export const createJob = celebrate({
  body: Joi.object({
    title: Joi.string().required().trim(),
    description: Joi.string().required().trim(),
    company: Joi.string().required().trim(),
    location: Joi.string().required().trim(),
  }),
});



// write json input for create product
// {
//   "name": "string",
//   "description": "string"
// }