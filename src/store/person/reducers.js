import {PERSON_GET_API_DATA} from "./actions";

const defaultState = {
    api: {},
    localApi: {}
};

export const personReducer = (state = defaultState, action) => {
    switch (action.type) {
        case PERSON_GET_API_DATA:
            return {
                ...state,
                localApi: action.payload
            };
        default:
            return state;
    }
};