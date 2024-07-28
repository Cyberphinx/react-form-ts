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
}

const FormInput = (props: Props) => {
  const { label, onChange, id, ...inputProps } = props;
  return (
    <div className="formInput">
      <label>{props.label}</label>
      <input
        {...inputProps}
        onChange={onChange}
      />
    </div>
  );
};

export default FormInput;
