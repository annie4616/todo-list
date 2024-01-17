import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, onDelete, onToggle }) => {
  return (
    <Container>
      {todos.map((item) => (
        <TodoItem
          todos={item}
          key={item.id}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </Container>
  );
};

export default TodoList;

const Container = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 0 0 0;
`;
