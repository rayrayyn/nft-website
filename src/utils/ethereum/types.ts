export enum EthereumNetworks {
    mainnet = "0x1",
    polygon = "0x89",
}

export const EthereumChainIdToNetwork: { [key: string]: string } = {
    "0x1": "Ethereum Mainnet",
    "0x89": "Polygon",
};
