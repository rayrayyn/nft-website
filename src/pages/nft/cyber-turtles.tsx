import { useEffect, useState } from "react";
import { ethers } from "ethers";
import Image from "next/image";

import {
    CYBER_TURTLES_ABI_DATA,
    CYBER_TURTLES_CONTRACT_ADDRESS,
    CYBER_TURTLES_STAKED_ABI_DATA,
    CYBER_TURTLES_STAKING_CONTRACT_ADDRESS,
} from "../../constants/cyberTurtles";
import Layout from "../../components/Layout";
import { useEthereumNetwork } from "../../utils/ethereum/hooks";
import { EthereumNetworks } from "../../utils/ethereum/types";
import EthereumErrorPage from "../../components/Error/EthereumErrorPage";

const CyberTurtles = () => {
    const isConnected = useEthereumNetwork(EthereumNetworks.mainnet);
    const [imageUrl, setImageUrl] = useState();
    const [maxSupply, setMaxSupply] = useState(0);
    const [totalStaked, setTotalStaked] = useState(0);

    const getOpenSeaInfo = () => {
        fetch("https://api.opensea.io/api/v1/collection/cyberturtles-genesis")
            .then((r) => r.json())
            .then(({ collection }) => {
                setImageUrl(collection.image_url);
            });
    };

    const getTotalStaked = () => {
        const provider = new ethers.providers.Web3Provider(window.ethereum);

        const contract = new ethers.Contract(
            CYBER_TURTLES_CONTRACT_ADDRESS,
            CYBER_TURTLES_ABI_DATA,
            provider
        );
        contract.maxTokens().then((value: any) => setMaxSupply(value._hex / 1));

        const stakingContract = new ethers.Contract(
            CYBER_TURTLES_STAKING_CONTRACT_ADDRESS,
            CYBER_TURTLES_STAKED_ABI_DATA,
            provider
        );

        stakingContract
            .totalSupply()
            .then((value: any) => setTotalStaked(value._hex / 1));
    };

    useEffect(() => {
        if (isConnected) {
            getTotalStaked();
            getOpenSeaInfo();
        }
    }, [isConnected]);

    return (
        <Layout
            title="Cyber Turtles"
            description="$SHELL"
            showErrorPage={
                !isConnected && (
                    <EthereumErrorPage network={EthereumNetworks.mainnet} />
                )
            }
        >
            {imageUrl && (
                <Image
                    src={imageUrl}
                    alt="Cyber Turtles Image"
                    width={128}
                    height={128}
                />
            )}
            <p>Max Supply: {maxSupply}</p>
            <p>Total Staked: {totalStaked}</p>
            <p>
                Percent Staked: {((totalStaked / maxSupply) * 100).toFixed(2)}%
            </p>
        </Layout>
    );
};

export default CyberTurtles;
