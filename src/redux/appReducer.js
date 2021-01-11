import { authTC } from './authReducer';
const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let initialState = {
    initialized: false,
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            }
        default:
            return state;
    }
}

export const InitiaziedSuccess = () => ({ type: INITIALIZED_SUCCESS });

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(authTC());
    Promise.all([promise])
        .then(() => {
            dispatch(InitiaziedSuccess());
        });
}

export default appReducer;