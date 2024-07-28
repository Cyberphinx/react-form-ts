import "./formInput.css";

interface InputProps {
  placeholder: string;
  name: string;
}

const FormInput = (props: InputProps) => {
  return (
    <div className="formInput">
      {/* <label>Username</label> */}
      <input
        name={props.name}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default FormInput;
