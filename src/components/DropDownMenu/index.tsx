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

    const handleOnMouseEnter = () => setShouldShow(true);

    const handleOnMouseLeave = () => setShouldShow(false);

    return (
        <Container
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
        >
            <div>{title}</div>
            {shouldShow && (
                <DropDownItemContainer shouldShow={shouldShow}>
                    {list.map((item, index) => (
                        <Link key={index} href={item.href} passHref>
                            <StyledLink>{item.name}</StyledLink>
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
`;

const DropDownItemContainer = styled.div<{ shouldShow: boolean }>`
    display: ${({ shouldShow }) => (shouldShow ? "flex" : "none")};
    position: absolute;
    flex-direction: column;
    background-color: white;
    border-radius: 0 0 8px 8px;
    overflow: hidden;
`;

const StyledLink = styled.a`
    text-decoration: none;
    padding: 8px;

    &:hover {
        background-color: grey;
    }
`;
