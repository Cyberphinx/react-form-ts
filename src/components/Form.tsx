import React, { FormEvent, useRef, useState } from "react";
import FormInput from "./FormInput";

interface User {
  username: string;
  email: string;
  fullname: string;
  sth: string;
}

const Form = () => {
  const [values, setValues] = useState<User>({
    username: "",
    email: "",
    fullname: "",
    sth: "",
  });
  // const usernameRef = useRef();

  console.log("re-rendered");

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      label: "Username",
    },
  ];

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // You can use either FormData or useRef instead of useState if you want to
    // avoid re-rendering the component whenever you change/submit data
    // const data = new FormData(event.currentTarget);
    // console.log(Object.fromEntries(data));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <FormInput name="username" placeholder="Username" />
        <FormInput name="email" placeholder="Email" />
        <FormInput name="fullname" placeholder="Full Name" />
        <FormInput name="sth" placeholder="Sth Else" />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;
