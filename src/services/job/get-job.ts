import { ICreateJobRequest, IJob } from '@modules/job/model';
import jobModel from '@modules/job/schema';
/**
 * Save new user into db
 * @param userDetails
 */
export const getAllJobs = async (): Promise<IJob[]> => {
    const jobs = await jobModel.find();
    return jobs;
  };

  