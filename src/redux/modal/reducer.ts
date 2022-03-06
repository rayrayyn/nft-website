import { OPEN_MODAL, CLOSE_MODAL } from "./constants";

const initialState = {
    isOpen: false,
};

const modalsReducer = (state = initialState, action: { type: any }) => {
    const { type } = action;
    switch (type) {
        case OPEN_MODAL:
            return {
                isOpen: true,
            };
        case CLOSE_MODAL:
            return {
                isOpen: false,
            };
        default:
            return state;
    }
};

export default modalsReducer;
