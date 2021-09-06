import { ErrorMessage, useField } from 'formik';
import styled from 'styled-components';

const TextFieldAdmin = (props) => {
  const { className, label } = props;
  // const [field, meta] = useField(props);

  return (
    <StyledTextInputAdmin>
      {label && <label className="heading">{label} :</label>}
      <input
        // className={`${meta.touched && meta.error && 'is-invalid'} ${className}`}
        // {...field}
        {...props}
      />
    </StyledTextInputAdmin>
  );
};

export default TextFieldAdmin;

const StyledTextInputAdmin = styled.div`
  display: flex;
  flex-direction: column;
  label {
    margin-bottom: 8px;
  }
  input {
    padding: 10px 0;
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 24px;
    color: #9f9f9f;
    background-color: transparent;

    &:focus {
      outline: none;
    }
    &:valid {
      color: #4f5665;
    }
  }
`;
