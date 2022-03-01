import { OPEN_MODAL, CLOSE_MODAL } from "./constants";

const initialState = {
    show: false,
};

const modalsReducer = (
    state = initialState,
    action: { type: any; payload: any }
) => {
    const { type, payload } = action;
    switch (type) {
        case OPEN_MODAL:
            return {
                show: payload,
            };
        case CLOSE_MODAL:
            return {
                show: payload,
            };
        default:
            return state;
    }
};

export default modalsReducer;
