import { SET_USER_ETHEREUM_ADDRESS } from "./constants";

export const setUserEthereumAddress = (address: string) => {
    return {
        type: SET_USER_ETHEREUM_ADDRESS,
        payload: address,
    };
};
