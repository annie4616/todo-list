import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import styled from "styled-components";

const TodoItem = ({ todos, onDelete, onToggle }) => {
  const { id, text, checked } = todos;
  return (
    <ItemCard>
      <div className="content-wrap" onClick={() => onToggle(id)}>
        <div>{checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}</div>
        <Content>
          {checked ? <Checked>{text}</Checked> : <span>{text}</span>}
        </Content>
      </div>
      <DeleteButton onClick={() => onDelete(id)}>X</DeleteButton>
    </ItemCard>
  );
};

export default TodoItem;

const Checked = styled.span`
  color: gray;
  text-decoration: line-through;
`;

const ItemCard = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 250px;
  transition: all 0.3s ease;
  cursor: pointer;
  .content-wrap {
    /* background-color: white; */
    display: flex;
    align-items: center;
    width: 100%;
    &:hover {
      background-color: #e6e6e6;
    }
  }
`;
const Content = styled.span`
  margin: auto 10px auto 5px;
  /* background-color: white; */
`;
const DeleteButton = styled.div`
  background-color: #fa8484;
  color: white;
  border-radius: 5px;
  border: 1px solid #dbdbdb;
  padding: 5px 10px 5px 10px;

  &:hover {
    background-color: #ff6262;
  }
`;
