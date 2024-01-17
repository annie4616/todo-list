import { useRef, useState } from "react";
import styled from "styled-components";
import TodoList from "./TodoList";
import TodoInsert from "./TodoInsert";

const TodoTemplate = () => {
  const nextId = useRef(3);
  const [todos, setTodos] = useState([
    {
      id: 0,
      text: "소주 마시기",
      checked: false,
    },
    {
      id: 1,
      text: "양주 마시기",
      checked: false,
    },
    {
      id: 2,
      text: "맥주 마시기",
      checked: false,
    },
  ]);

  const onInsert = (item) => {
    const newCard = {
      id: nextId.current,
      text: item,
      checked: false,
    };
    setTodos(todos.concat(newCard));
    nextId.current++;
  };
  const onDelete = (id) => {
    const newTodos = todos.filter((item) => {
      return item.id !== id;
    });
    setTodos(newTodos);
  };
  const onToggle = (id) => {
    const Toggle = todos.map((item) => {
      return item.id === id ? { ...item, checked: !item.checked } : item;
    });
    setTodos(Toggle);
    console.log("ss");
  };

  return (
    <Container>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onDelete={onDelete} onToggle={onToggle} />
    </Container>
  );
};
export default TodoTemplate;

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  /* margin: auto; */
`;
