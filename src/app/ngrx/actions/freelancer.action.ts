import { createAction, props } from "@ngrx/store";
import { IFreelancer } from "../../interfaces/freelancer.interface";

const prefix = '[Freelancers]';

export const getFreelancers = createAction(`${prefix} Get Freelancers`);
export const getFreelancerSuccess = createAction(`${prefix} Success`, props<{ freelancer: IFreelancer }>());

export const createFreelancer = createAction(`${prefix} Create Freelancer`, props<{ freelancer: IFreelancer }>());
export const createFreelancerSuccess = createAction(`${createFreelancer.type} Success`, (freelancer: IFreelancer) => freelancer);

export const updateFreelancer = createAction(`${prefix} Update Freelancer`, props<{ freelancer: IFreelancer }>());
export const updateFreelancerSuccess = createAction(`${updateFreelancer.type} Success`, props<{ freelancer: IFreelancer }>());

export const deleteFreelancer = createAction(`${prefix} Delete Freelancer`, (freelancer: IFreelancer) => freelancer);
export const deleteFreelancerSuccess = createAction(`${deleteFreelancer.type} Success`, props<{ freelancer: IFreelancer }>());
