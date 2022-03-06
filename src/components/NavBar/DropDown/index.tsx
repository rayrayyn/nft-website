import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";

type Props = {
    title: string;
    list: {
        name: string;
        href: string;
    }[];
};

const DropDownMenu = ({ title, list }: Props) => {
    const [shouldShow, setShouldShow] = useState(false);

    const handleOpen = () => setShouldShow(true);

    const handleClose = () => setShouldShow(false);

    return (
        <Container onMouseEnter={handleOpen} onMouseLeave={handleClose}>
            <div>{title}</div>
            {shouldShow && (
                <DropDownItemContainer shouldShow={shouldShow}>
                    {list.map((item, index) => (
                        <Link key={index} href={item.href} passHref>
                            <StyledLink onClick={handleClose}>
                                {item.name}
                            </StyledLink>
                        </Link>
                    ))}
                </DropDownItemContainer>
            )}
        </Container>
    );
};

export default DropDownMenu;

const Container = styled.div`
    cursor: pointer;
    height: 100%;
    display: flex;
    align-items: center;
`;

const DropDownItemContainer = styled.div<{ shouldShow: boolean }>`
    display: ${({ shouldShow }) => (shouldShow ? "flex" : "none")};
    position: absolute;
    top: 80px;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.navBar.background};
    border-radius: 0 0 8px 8px;
    overflow: hidden;
`;

const StyledLink = styled.a`
    text-decoration: none;
    padding: 16px;
    color: ${({ theme }) => theme.colors.text};

    &:hover {
        background-color: grey;
    }
`;
