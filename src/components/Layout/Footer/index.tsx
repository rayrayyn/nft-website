import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { FaTwitter, FaDiscord } from "react-icons/fa";
import {
    FOOTER_HELPFUL_LINKS_ITEMS,
    FOOTER_SOCIAL_ITEMS,
} from "../../../constants/FooterItems";

const Footer = () => {
    return (
        <Container>
            <Wrapper>
                <div>Idk What I Am Doing With This Website</div>
                <LinksContainer>
                    <div>
                        <h3>Helpful Links</h3>
                        {FOOTER_HELPFUL_LINKS_ITEMS.map((item, index) => (
                            <Link key={index} href={item.href} passHref>
                                <StyledLink
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {item.name}
                                </StyledLink>
                            </Link>
                        ))}
                    </div>

                    <SocialsContainer>
                        <h3>Socials</h3>
                        {FOOTER_SOCIAL_ITEMS.map((item, index) => (
                            <Link key={index} href={item.href} passHref>
                                <StyledLink
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {item.name === "Twitter" && <FaTwitter />}
                                    {item.name === "Discord" && <FaDiscord />}
                                    {item.name}
                                </StyledLink>
                            </Link>
                        ))}
                    </SocialsContainer>
                </LinksContainer>
            </Wrapper>
        </Container>
    );
};

export default Footer;

const Container = styled.footer`
    background-color: ${({ theme }) => theme.colors.background};
    margin-top: auto;
`;

const Wrapper = styled.div`
    display: flex;
    width: 75%;
    margin: 16px auto;
    justify-content: space-between;
`;

const LinksContainer = styled.div`
    display: flex;
    width: 50%;
    justify-content: space-evenly;
`;

const SocialsContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const StyledLink = styled.a`
    color: ${({ theme }) => theme.colors.text};
    text-decoration: none;
    display: flex;
    align-items: center;
    margin-bottom: 8px;
    > svg {
        margin-right: 8px;
    }
`;
