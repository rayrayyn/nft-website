import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";

import { COLORS, gridUnit } from "../../constants/styles";
import { Button } from "../Button";

const NavBar = () => {
    const [wallet, setWallet] = useState<string>("");

    const formatAddress = (address: string): string => {
        const left = address.substr(0, 4);
        const right = address.substr(address.length - 4);
        return left + "..." + right;
    };

    const checkIfWalletIsConnected = useCallback(async () => {
        try {
            if (!window.ethereum) {
                return console.log("No ethereum wallet provider found.");
            }

            const accounts = await window.ethereum.request({
                method: "eth_accounts",
            });

            if (accounts[0]) {
                setWallet(formatAddress(accounts[0]));
            }
        } catch (error) {
            console.log(error);
        }
    }, []);

    const connectWallet = async () => {
        try {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            return setWallet(formatAddress(accounts[0]));
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        checkIfWalletIsConnected();
    }, [checkIfWalletIsConnected]);

    return (
        <Container>
            <NavContainer>
                <Link href="/">Home</Link>

                <ConnectWalletContainer
                    onClick={connectWallet}
                    text={wallet ? wallet : `Connect Wallet`}
                />
            </NavContainer>
        </Container>
    );
};

export default NavBar;

const Container = styled.div`
    height: ${gridUnit(10)};
    border-bottom: 1px solid ${COLORS.border.primary};
`;

const NavContainer = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: ${gridUnit(2)};
    margin-right: ${gridUnit(2)};
`;

const ConnectWalletContainer = styled(Button)`
    width: 125px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;
