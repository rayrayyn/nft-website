import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import DropDownMenu from "../DropDownMenu";
import { DROP_DOWN_MENU_ITEMS } from "../../constants/navBarItems";

const NavBar = () => {
    const [wallet, setWallet] = useState<string>("");
    const [shouldShow, setShouldShow] = useState<boolean>(true);
    const [previousScrollPosition, setPreviousScrollPosition] =
        useState<number>(0);

    const formatAddress = useCallback((address: string): string => {
        const left = address.substring(0, 4);
        const right = address.substring(address.length - 4);
        return left + "..." + right;
    }, []);

    const checkIfWalletIsConnected = useCallback(() => {
        if (!window.ethereum) {
            return console.log("No ethereum wallet provider found.");
        }

        window.ethereum
            .request({
                method: "eth_accounts",
            })
            .then((accounts: string[]) => {
                if (accounts[0]) {
                    setWallet(formatAddress(accounts[0]));
                }
            })
            .catch(console.log);
    }, [formatAddress]);

    const handleConnect = useCallback(() => {
        window.ethereum
            .request({
                method: "eth_requestAccounts",
            })
            .then((accounts: string[]) => {
                setWallet(formatAddress(accounts[0]));
            })
            .catch(console.log);
    }, [formatAddress]);

    const handleDisconnect = useCallback(() => {
        setWallet("");
    }, []);

    const shouldNavBarBeVisible = useCallback(() => {
        const scrollTop = window.scrollY;
        setShouldShow(previousScrollPosition > scrollTop);
        setPreviousScrollPosition(scrollTop);
    }, [previousScrollPosition]);

    useEffect(() => {
        checkIfWalletIsConnected();
    }, [checkIfWalletIsConnected]);

    useEffect(() => {
        window.addEventListener("scroll", shouldNavBarBeVisible);

        return () => {
            window.removeEventListener("scroll", shouldNavBarBeVisible);
        };
    }, [shouldNavBarBeVisible]);

    return (
        <Container shouldShow={shouldShow}>
            <NavContainer>
                <LeftContainer>
                    <Link href="/" passHref>
                        <StyledLink>Home</StyledLink>
                    </Link>
                    {DROP_DOWN_MENU_ITEMS.map((item, index) => (
                        <DropDownMenu
                            key={index}
                            title={item.title}
                            list={item.list}
                        />
                    ))}
                </LeftContainer>
                <RightContainer
                    onClick={wallet ? handleDisconnect : handleConnect}
                >
                    {wallet ? wallet : "Connect Wallet"}
                </RightContainer>
            </NavContainer>
        </Container>
    );
};

export default NavBar;

const Container = styled.div<{ shouldShow: boolean }>`
    height: 80px;
    background-color: ${({ theme }) => theme.colors.navBar.background};
    box-shadow: 0 5px 5px rgba(182, 182, 182, 0.75);
    position: sticky;
    top: ${({ shouldShow }) => (shouldShow ? 0 : "-90px")};
    transition: 0.3s;
`;

const NavContainer = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
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
    text-decoration: none;
`;

const RightContainer = styled.div``;
