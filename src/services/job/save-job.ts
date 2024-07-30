import { ICreateJobRequest, IJob } from '@modules/job/model';
import jobModel from '@modules/job/schema';
/**
 * Save new user into db
 * @param userDetails
 */
export const saveJob = async (jobDetails: ICreateJobRequest): Promise<IJob> => {
  const newJob: IJob = new jobModel(jobDetails);

  await newJob.save();
  return newJob;
};
