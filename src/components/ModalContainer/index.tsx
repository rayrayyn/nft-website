import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectIsModalOpen } from "../../redux/modals/selectors";

const ModalContainer = () => {
    const isModalOpen = useSelector(selectIsModalOpen);

    if (!isModalOpen) {
        return null;
    }

    return (
        <>
            <Backdrop onClick={() => console.log("closing")} />
            <Container>
                <div>Close</div>
                <div>Content</div>
            </Container>
        </>
    );
};

export default ModalContainer;

const Backdrop = styled.div`
    z-index: 1;
    position: fixed;
    height: 100vh;
    width: 100vw;
    backdrop-filter: brightness(75%);
`;

const Container = styled.div`
    z-index: 2;
    position: fixed;
    top: 50%;
    left: 50%;
    width: 50%;
    height: 50%;
    transform: translate(-50%, -50%);
    background-color: aliceblue;
`;
