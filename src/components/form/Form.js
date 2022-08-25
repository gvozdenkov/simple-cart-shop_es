import "./Form.css";

function Form({ name, children }) {
  return (
    <form action="" className="form" id={`${name}-form`}>
      {children}
    </form>
  );
}

export default Form;
