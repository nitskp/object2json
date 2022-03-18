import { Path, UseFormRegister } from "react-hook-form";
import { StyledTextarea } from "./Textarea.styled";
type Inputs = {
  stringObject: string;
  jsonObject: string;
};

const Textarea = (props: {
  placeHolder: string;
  register: UseFormRegister<Inputs>;
  registerValue: Path<Inputs>;
}) => {
  const { placeHolder, register, registerValue } = props;
  return (
    <>
      <StyledTextarea placeholder={placeHolder} {...register(registerValue)} />
    </>
  );
};

export default Textarea;
