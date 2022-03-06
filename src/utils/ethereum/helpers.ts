export const formatAddress = (address: string): string => {
    const left = address.substring(0, 4);
    const right = address.substring(address.length - 4);
    return left + "..." + right;
};
