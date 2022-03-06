import { RootState } from "../store";

export const selectUserEthereumAddress = (state: RootState) =>
    state.user.ethereum.address;
