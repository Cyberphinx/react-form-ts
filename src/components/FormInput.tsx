import React, { ChangeEvent } from "react";
import "./formInput.css";

interface Props {
  id: number;
  name: string;
  type: string;
  placeholder: string;
  label: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  errorMessage?: string;
}

const FormInput = (props: Props) => {
  const { label, errorMessage, onChange, id, ...inputProps } = props;
  return (
    <div className="formInput">
      <label>{props.label}</label>
      <input
        {...inputProps}
        onChange={onChange}
      />
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
