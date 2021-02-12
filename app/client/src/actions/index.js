import dataAPI from '../apis/dataAPI';
import {
    REDUCER_START,
    GET_TRICKS
} from './types';

export const reducerStart = () => {
    return {
        type: REDUCER_START,
    }
};