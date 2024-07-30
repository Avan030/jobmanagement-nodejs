

import { Request, Response } from 'express';
import { jobService } from '@services/index';
import { ICreateJobRequest } from '@modules/job/model';
import { controller } from '@config/controller/controller';


export const saveJobHandeler = controller(async (req: Request, res: Response): Promise<void> => {
    const JobDetails: ICreateJobRequest = {
      title: req.body.title,
      description: req.body.description,
      company: req.body.company,
      location: req.body.location,
    } ;
  try {
    const newJob = await jobService.saveJob(JobDetails);
    res.status(201).json(newJob);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
});