import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import styled from "styled-components";

type Props = {
    children: ReactNode;
    title: string;
    description: string;
    displayErrorPage?: ReactNode;
};

const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -200 },
};

const Layout = ({ children, title, description, displayErrorPage }: Props) => {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <Main
                initial="hidden"
                animate="enter"
                exit="exit"
                variants={variants}
                transition={{ type: "linear" }}
            >
                {displayErrorPage || children}
            </Main>
        </div>
    );
};

export default Layout;

const Main = styled(motion.main)`
    width: 90%;
    margin: 50px auto;
`;
