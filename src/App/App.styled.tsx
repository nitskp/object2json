import styled from "styled-components";

const Container = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 50px;
  grid-row-gap: 10px;
  grid-template-rows: auto 1fr;
  min-height: 80vh;
`;

const LanguageButtonContainer = styled.div`
`;
const DataTypeButtonContainer = styled.div`
`;
const Header = styled.header`
`;
const Form = styled.form`
  grid-column: 1/3;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-gap: 10px;
`;
const TextareaContainer = styled.div`
    padding: 20px 10px;
`;

const Submit = styled.input.attrs((props) => ({
  type: "submit",
  value: "→",
}))`
  font-size: 25px;
  border: 1px solid black;
  border-radius: 50%;
  padding: 5px;
  padding-top: 1.5px;
  background: transparent;
  align-self: center;
`;

export {
  Container,
  Header,
  LanguageButtonContainer,
  DataTypeButtonContainer,
  Submit,
  Form,
  TextareaContainer,
};
