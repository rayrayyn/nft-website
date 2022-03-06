import React from "react";
import {
    EthereumChainIdToNetwork,
    EthereumNetworks,
} from "../../utils/ethereum/types";
import styled from "styled-components";
import { toast } from "react-hot-toast";

type Props = {
    network: EthereumNetworks;
};

const EthereumErrorPage = ({ network }: Props) => {
    const switchNetwork = () => {
        if (window.ethereum) {
            window.ethereum.request({
                method: "wallet_switchEthereumChain",
                params: [{ chainId: network }],
            });
        } else {
            toast.error("Please Install An Ethereum Wallet");
        }
    };

    return (
        <Container>
            <div>Please connect to {EthereumChainIdToNetwork[network]}.</div>
            <button onClick={switchNetwork}>Switch</button>
        </Container>
    );
};

export default EthereumErrorPage;

export const Container = styled.div`
    display: flex;
    justify-content: center;
`;
