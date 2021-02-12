import { REDUCER_START } from "../actions/types";

const INITIAL_STATE = {
    connected: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case REDUCER_START:
            return { ...state, connected: true };
        default:
            return state;
    }
};