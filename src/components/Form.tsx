import "./form.css";
import React, { ChangeEvent, FormEvent, useState } from "react";
import FormInput from "./FormInput";

interface User {
  username: string;
  email: string;
  birthday: string;
  password: string;
  confirmPassword: string;
}

export interface InputAttributes {
  id: number;
  name: keyof User;
  type: string;
  placeholder: string;
  label: string;
  errorMessage?: string;
  pattern?: string;
  required: boolean;
}

const Form = () => {
  const [values, setValues] = useState<User>({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  console.log("re-rendered");

  const inputs: InputAttributes[] = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      label: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      pattern: "^[A-Za-z0-9]{3,16}$", // Use regex as a pattern for validation
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      label: "Email",
      errorMessage: "It should be a valid email address!",
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday",
      required: false,
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      label: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      pattern:
        "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      label: "Confirm Password",
      errorMessage: "Password don't match!",
      pattern: values.password,
      required: true,
    },
  ];

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values, // spread the previous values
      [event.target.name]: event.target.value,
    });
  };

  console.log(values);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Resgister</h1>
        {inputs.map((input: InputAttributes) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={handleChange}
          />
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;
