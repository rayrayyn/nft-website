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
};

const InputField = ({
    className,
    type,
    value,
    onChange,
    placeHolder,
}: Props) => {
    return (
        <Container>
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

const Container = styled.div``;
