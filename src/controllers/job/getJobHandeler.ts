

import { Request, Response } from 'express';
import { jobService } from '@services/index';
import { IGetJobRequest } from '@modules/job/model';
import { controller } from '@config/controller/controller';


export const getJobHandeler = controller(async (req: Request, res: Response): Promise<void> => {

  try {
    const newJob = await jobService.getAllJobs();
    res.status(200).json(newJob);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
});