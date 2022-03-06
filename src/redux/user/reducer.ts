import { SET_USER_ETHEREUM_ADDRESS } from "./constants";

const initialState = {
    ethereum: {
        address: "",
    },
};

const userReducer = (state = initialState, action: any) => {
    const { type, payload } = action;
    switch (type) {
        case SET_USER_ETHEREUM_ADDRESS:
            return {
                ethereum: {
                    ...state.ethereum,
                    address: payload,
                },
            };
        default:
            return state;
    }
};

export default userReducer;
