import { IFreelancerState } from "../states/freelancer.model";
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectFreelancerState = createFeatureSelector<IFreelancerState>('freelancer');

export const selectFreelancerList = createSelector(
    selectFreelancerState,
    (state: IFreelancerState) => state.freelancers
);

export const selectFreelancerLoading = createSelector(
    selectFreelancerState,
    (state: IFreelancerState) => state.isLoading
);