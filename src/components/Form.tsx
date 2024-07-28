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
  errorMessage: string;
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
      errorMessage: "",
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      label: "Email",
      errorMessage: "",
    },
    {
      id: 3,
      name: "birthday",
      type: "text",
      placeholder: "Birthday",
      label: "Birthday",
      errorMessage: "",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      label: "Password",
      errorMessage: "",
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      label: "Confirm Password",
      errorMessage: "",
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
