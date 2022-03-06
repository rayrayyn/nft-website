import Link from "next/link";
import React, { useCallback, useEffect } from "react";
import styled from "styled-components";
import { toast } from "react-hot-toast";

import DropDown from "./DropDown";
import { DROP_DOWN_MENU_ITEMS } from "../../constants/navBarItems";
import { useDispatch, useSelector } from "react-redux";
import { selectUserEthereumAddress } from "../../redux/user/selectors";
import { setUserEthereumAddress } from "../../redux/user/action";
import { WindowEthereumRequestError } from "../../types/window.ethereum";
import { formatAddress } from "../../utils/ethereum/helpers";
import { useShouldNavBarBeVisible } from "./hooks";

const NavBar = () => {
    const dispatch = useDispatch();
    const shouldNavBarBeVisible = useShouldNavBarBeVisible();
    const ethereumWallet = useSelector(selectUserEthereumAddress);

    const checkIfWalletIsConnected = useCallback(() => {
        if (window.ethereum) {
            window.ethereum
                .request({
                    method: "eth_accounts",
                })
                .then((accounts: string[]) => {
                    if (accounts[0]) {
                        dispatch(setUserEthereumAddress(accounts[0]));
                    }
                })
                .catch((err: WindowEthereumRequestError) =>
                    toast.error(err.message)
                );
        }
    }, [dispatch]);

    const handleConnect = useCallback(() => {
        if (window.ethereum) {
            window.ethereum
                .request({
                    method: "eth_requestAccounts",
                })
                .then((accounts: string[]) => {
                    if (accounts[0]) {
                        dispatch(setUserEthereumAddress(accounts[0]));
                    }
                })
                .catch((err: WindowEthereumRequestError) =>
                    toast.error(err.message)
                );
        } else {
            toast.error("Please Install An Ethereum Wallet");
        }
    }, [dispatch]);

    const handleDisconnect = useCallback(() => {
        dispatch(setUserEthereumAddress(""));
    }, [dispatch]);

    useEffect(() => {
        checkIfWalletIsConnected();
    }, [checkIfWalletIsConnected]);

    return (
        <Container shouldNavBarBeVisible={shouldNavBarBeVisible}>
            <NavContainer>
                <LeftContainer>
                    <Link href="/" passHref>
                        <StyledLink>Home</StyledLink>
                    </Link>
                    {DROP_DOWN_MENU_ITEMS.map((item, index) => (
                        <DropDown
                            key={index}
                            title={item.title}
                            list={item.list}
                        />
                    ))}
                </LeftContainer>
                <RightContainer
                    onClick={ethereumWallet ? handleDisconnect : handleConnect}
                >
                    {ethereumWallet
                        ? formatAddress(ethereumWallet)
                        : "Connect Wallet"}
                </RightContainer>
            </NavContainer>
        </Container>
    );
};

export default NavBar;

const Container = styled.div<{ shouldNavBarBeVisible: boolean }>`
    height: 80px;
    background-color: ${({ theme }) => theme.colors.navBar.background};
    position: sticky;
    top: ${({ shouldNavBarBeVisible }) =>
        shouldNavBarBeVisible ? 0 : "-90px"};
    transition: 0.3s;
`;

const NavContainer = styled.div`
    height: 100%;
    display: flex;
    justify-content: space-between;
    margin: 0 16px;
`;

const LeftContainer = styled.div`
    display: flex;

    > a {
        margin-right: 16px;
    }

    > div {
        margin-right: 16px;
    }
`;

const StyledLink = styled.a`
    color: ${({ theme }) => theme.colors.text};
    text-decoration: none;
    display: flex;
    align-items: center;
`;

const RightContainer = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
`;
