import { useState, useEffect } from "react";
import { EthereumNetworks } from "./types";

export const useEthereumNetwork = (provider: EthereumNetworks) => {
    const [isConnected, setIsConnected] = useState(false);

    useEffect(() => {
        if (window.ethereum) {
            setIsConnected(window.ethereum.chainId === provider);
            window.ethereum.on("chainChanged", (chainId: string) => {
                setIsConnected(chainId === provider);
            });
        }
    }, [provider]);

    return isConnected;
};
