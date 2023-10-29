import { Action, createReducer, on } from "@ngrx/store";

import * as freelancerActions from '../actions/freelancer.action';
import { IFreelancerState } from "../states/freelancer.model";

export const initialFreelancerState: IFreelancerState = {
    freelancers: [],
    isLoading: false
};

const reducer = createReducer<IFreelancerState>(
    initialFreelancerState,
    on(freelancerActions.getFreelancers, (state: IFreelancerState) => {
        return {
            ...state,
            isLoading: true
        };
    }),
    on(freelancerActions.getFreelancerSuccess, (state: IFreelancerState) => {
        return {
            ...state,
            isLoading: false,
            freelancers: [...state.freelancers]
        };
    }),
    on(freelancerActions.createFreelancer, (state: IFreelancerState) => {
        return {
            ...state,
            isLoading: true
        };
    }),
    on(freelancerActions.createFreelancerSuccess, (state: IFreelancerState, freelancer) => {
        return {
            ...state,
            freelancers: [...state.freelancers, freelancer],
            isLoading: false
        };
    })
);

export function FreelancerReducer(
    state: IFreelancerState = initialFreelancerState, actions: Action
) {
    return reducer(state, actions);
}