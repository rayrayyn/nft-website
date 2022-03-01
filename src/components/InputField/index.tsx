import React from "react";
import styled from "styled-components";

export enum InputFieldTypes {
    string = "string",
    number = "number",
}

type Props = {
    className?: string;
    type: InputFieldTypes;
    value: any;
    onChange: Function;
    placeHolder?: string;
    useLabel?: boolean;
    label?: string;
};

const InputField = ({
    className,
    type,
    value,
    onChange,
    placeHolder,
    label,
    useLabel,
}: Props) => {
    return (
        <Container showLabel={!!value?.toString().length} useLabel>
            {useLabel && <label>{label || placeHolder}</label>}
            <input
                className={className}
                type={type}
                value={value}
                onChange={(e: { target: { value: any } }) =>
                    onChange(e.target.value)
                }
                placeholder={placeHolder}
            />
        </Container>
    );
};

export default InputField;

const Container = styled.div<{ showLabel: boolean; useLabel: boolean }>`
    position: relative;
    display: flex;
    max-height: 44px;

    label {
        transition: all 0.2s ease-out;
        font-size: 11px;
        position: absolute;
        transform: ${({ showLabel }) =>
            showLabel ? "none" : "translateY(2.5px)"};
        pointer-events: none;
        overflow: hidden;
        opacity: ${({ showLabel }) => (showLabel ? 1 : 0)};
        margin: 0.5em 0;
        padding: 0 11px;
    }

    input {
        outline: none;
        margin: 0;
        transition: all 0.2s ease-out;
        padding: ${({ useLabel }) => (useLabel ? "1.165em 8px" : "10px 0")};
    
        ${({ showLabel, useLabel }) =>
            showLabel && useLabel
                ? `
          padding-top: 1.845em;
          padding-bottom: .45em;
        `
                : ""}
    
`;
