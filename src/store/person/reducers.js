import {PERSON_SAVE_API_DATA} from "./actions";

const defaultState = {
    api: {}
};

export const personReducer = (state = defaultState, action) => {
    switch (action.type) {
        case PERSON_SAVE_API_DATA:
            return {
                ...state,
                api: action.payload
            };
    }
    return state;
};