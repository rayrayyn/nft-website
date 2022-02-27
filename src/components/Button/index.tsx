import React, { MouseEventHandler } from "react";
import styled from "styled-components";
import { COLORS, gridUnit } from "../../constants/styles";

type ButtonProps = {
  className?: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  text?: string;
};

export const Button: React.FC<ButtonProps> = ({ className, onClick, text }) => {
  return (
    <Container className={className} onClick={onClick}>
      {text}
    </Container>
  );
};

const Container = styled.button`
  font-size: ${gridUnit(2)};
  padding: ${gridUnit(1)};
  border: none;
  border-radius: ${gridUnit(1)};
  background-color: ${COLORS.button.primary};
  color: ${COLORS.text.primary};
  cursor: pointer;
`;
