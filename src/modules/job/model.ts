import { Document, Types } from 'mongoose';

export interface IJob extends Document {
    title: string;
    description: string;
    company: string;
    location: string;
}

export interface ICreateJobRequest {
    title: string;
    description: string;
    company: string;
    location: string;
}

export interface IGetJobRequest {
  title: string;
  description: string;
  company: string;
  location: string;
}

export interface IJobRequestObject {
  title: string;
  description: string;
  company: string;
  location: string;
  _id: Types.ObjectId;
}
