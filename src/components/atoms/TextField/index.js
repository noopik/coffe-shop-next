import { ErrorMessage, useField } from 'formik';
import styled from 'styled-components';

const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <StyledTextField>
      <label
        htmlFor={field.name}
        className={`${meta.touched && meta.error && 'is-invalid'}`}
      >
        {label}
      </label>
      <input
        className={`form-control shadow-none ${
          meta.touched && meta.error && 'is-invalid'
        }`}
        {...field}
        {...props}
        // autoComplete="off"
      />
      <ErrorMessage component="div" name={field.name} className="error" />
    </StyledTextField>
  );
};

export default TextField;

const StyledTextField = styled.div`
  display: flex;
  flex-direction: column;
  .error {
    color: red;
    margin-top: 10px;
    font-family: Rubik;
    font-size: 1rem;
  }
  label {
    font-family: Rubik;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    color: #4f5665;
    margin-bottom: 13px;
    &.is-invalid {
      color: red;
    }
  }
  input {
    background: #ffffff;
    border: 1px solid #4f5665;
    box-sizing: border-box;
    border-radius: 20px;
    border: 0;
    padding: 30px 25px;
    border: 1px solid #4f5665;
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 24px;
    color: #9f9f9f;
    &.is-invalid {
      border-color: red;
    }
    &:focus {
      outline: none;
    }
    &:valid {
      color: #000000;
    }
  }
`;
