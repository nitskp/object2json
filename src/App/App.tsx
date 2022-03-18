import { SubmitHandler, useForm } from "react-hook-form";
import Button from "../Button/Button";
import Navbar from "../Navbar/Navbar";
import Textarea from "../Textarea/Textarea";
import {
  Container,
  DataTypeButtonContainer,
  Form,
  Header,
  LanguageButtonContainer,
  Submit,
  TextareaContainer,
} from "./App.styled";

function App() {
  const languages = [
    "C",
    "C#",
    "Go",
    "C++",
    "Java",
    "Rust",
    "Ruby",
    "Python",
    "Typescript",
  ];
  const dataTypes = ["Json", "Yaml", "XML"];

  type Inputs = {
    stringObject: string;
    jsonObject: string;
  };

  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) =>
    console.log("Form Data", formData);
  return (
    <>
      <Header>
        <Navbar />
      </Header>
      <Container>
        <LanguageButtonContainer>
          {/* Need to change button to input type = radios, 
          otherwise only one button gets selected on the page  */}
          {languages.map((language, index) => {
            return (
              <Button
                key={"lbtn" + index.toString()}
                btnText={language}
                bgColor={"#ffe2f1"}
              />
            );
          })}
        </LanguageButtonContainer>
        <DataTypeButtonContainer>
          {dataTypes.map((dataType, index) => {
            return (
              <Button
                key={"dbtn" + index.toString()}
                btnText={dataType}
                bgColor={"#fed48b"}
              />
            );
          })}
        </DataTypeButtonContainer>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <TextareaContainer>
            <Textarea
              placeHolder={"Enter the object string"}
              register={register}
              registerValue={"stringObject"}
            />
          </TextareaContainer>
          <Submit />
          <TextareaContainer>
            <Textarea
              placeHolder={"Json Formatted data"}
              register={register}
              registerValue={"jsonObject"}
            />
          </TextareaContainer>
        </Form>
      </Container>
    </>
  );
}

export default App;
