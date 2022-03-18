import styled from "styled-components";

type BackgroundColor = {
  bgColor?: string;
};

const StyledButton = styled.button<BackgroundColor>`
  background: ${({ bgColor }) => bgColor || "transparent"};
  padding: 5px 4px;
  border: 1px solid;
  border-color: ${({ bgColor }) => bgColor || "transparent"};
  box-shadow: 1px 1px 2px gray;
  border-radius: 3px;
  margin: 5px;
  &:focus {
    filter: saturate(3);
  }
`;
export { StyledButton };
