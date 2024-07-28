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
}

const Form = () => {
  const [values, setValues] = useState<User>({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });
  // const usernameRef = useRef();

  console.log("re-rendered");

  const inputs: InputAttributes[] = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      label: "Username",
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      label: "Email",
    },
    {
      id: 3,
      name: "birthday",
      type: "text",
      placeholder: "Birthday",
      label: "Birthday",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      label: "Password",
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      label: "Confirm Password",
    },
  ];

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // You can use either FormData or useRef instead of useState if you want to
    // avoid re-rendering the component whenever you change/submit data
    // const data = new FormData(event.currentTarget);
    // console.log(Object.fromEntries(data));
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
