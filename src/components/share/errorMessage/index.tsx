import { ErrorMessage as Message } from "formik";
import "./errorMes.css";

interface IErrorMessage {
  name?: string;
}

export const ErrorMessage = ({ name = "" }: IErrorMessage) => {
  return (
    <Message
      name={name}
      render={(messError) => <div className='custom-error'>{messError}</div>}
    />
  );
};
