import React from "react";
import { Input } from "./styles";

export enum TextFieldTypes {
  string = "string",
  number = "number",
}

type TextFieldProps = {
  className?: string;
  type: TextFieldTypes;
  value: any;
  onChange: Function;
  placeHolder?: string;
};

export const TextField: React.FC<TextFieldProps> = ({
  className,
  type,
  value,
  onChange,
  placeHolder,
}) => {
  return (
    <Input
      className={className}
      type={type}
      value={value}
      onChange={(e: { target: { value: any } }) => onChange(e.target.value)}
      placeholder={placeHolder}
    />
  );
};
