// craete router useing express router and import jobController and createjob validation

import { Router } from 'express';
import { jobController } from '@controllers/index';
import { jobValidations } from '@validations/job/index';
import { validateUserAccessToken } from '@middleware/index';

const jobRouter = Router();

jobRouter.post('/', validateUserAccessToken, jobValidations.createJob, jobController.saveJobHandeler);
jobRouter.get('/', jobController.getJobHandeler); 


export { jobRouter };
