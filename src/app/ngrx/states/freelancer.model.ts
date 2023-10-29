import { IFreelancer } from "../../interfaces/freelancer.interface";

export interface IFreelancerState {
    freelancers: Array<IFreelancer>,
    isLoading: boolean
}