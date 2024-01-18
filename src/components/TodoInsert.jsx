import { useState } from "react";
import styled from "styled-components";

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };
  const onClick = () => {
    console.log(onInsert());
    onInsert(value);
    setValue("");
  };
  return (
    <>
      <Header>할 일 목록</Header>
      <InputContainer>
        <TodoInput value={value} onChange={onChange} placeholder="할 일" />
        <InsertButton onClick={onClick}>추가</InsertButton>
      </InputContainer>
    </>
  );
};
export default TodoInsert;

const InputContainer = styled.div`
  margin: 20px auto auto auto;
  display: flex;
  justify-content: center;
  flex-direction: row;
  /* background-color: white; */
`;
const Header = styled.div`
  font-size: 20px;
  text-align: center;
  margin-top: 20px;
  /* background-color: white; */
`;
const TodoInput = styled.input`
  width: 200px;
  height: 30px;
  border: 1px solid gray;
  /* background-color: white; */
`;

const InsertButton = styled.button`
  height: 30px;
  width: 50px;
  border: 1px solid #dbdbdb;
  background-color: aliceblue;

  &:hover {
    background-color: #d3ebff;
  }
  cursor: pointer;
`;
