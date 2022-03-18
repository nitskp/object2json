import { StyledButton } from "./Button.styled"

const Button = (props:{bgColor?:string, btnText:string}) => {
  const {bgColor, btnText} = props;
  return (
    <>
      <StyledButton bgColor={bgColor}>
        {btnText}
      </StyledButton>
    </>
  )
}

export default Button
