import React, { useCallback } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { selectIsModalOpen } from "../../redux/modal/selectors";
import { closeModal } from "../../redux/modal/actions";
import { IoClose } from "react-icons/io5";

const Modal = () => {
    const dispatch = useDispatch();
    const isModalOpen = useSelector(selectIsModalOpen);

    const handleClose = useCallback(() => dispatch(closeModal()), [dispatch]);

    return isModalOpen ? (
        <>
            <Backdrop />
            <ModalContainer>
                <div>
                    <CloseButtonWrapper>
                        <IoClose onClick={handleClose} />
                    </CloseButtonWrapper>

                    <div>
                        <h1>Title</h1>
                        <div>Content</div>
                    </div>
                </div>
            </ModalContainer>
        </>
    ) : null;
};

export default Modal;

const Backdrop = styled.div`
    z-index: 1;
    position: fixed;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.8);
`;

const ModalContainer = styled.div`
    z-index: 2;
    position: fixed;
    top: 10%;
    left: 50%;
    min-width: 25%;
    width: auto;
    height: auto;
    transform: translate(-50%, 0);
    background-color: ${({ theme }) => theme.colors.body};
    border-radius: 8px;

    > div {
        margin: 16px;
    }
`;

const CloseButtonWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;

    > svg {
        width: 32px;
        height: 32px;
        cursor: pointer;
    }
`;
