import styled from 'styled-components';
import { FaTrash } from 'react-icons/fa';


export const List = styled.ul`
  max-height: 18rem;
  overflow-y: auto;
  scrollbar-width: thin;
  display: flex;
  list-style: none;
  flex-direction: column;
  gap: 0.8rem;
  padding: 0 1rem 0 0;
`;

export const TodoItem = styled.li<{ completed: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 0.7rem;
  background-color: #F2F2F2;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-decoration: ${({ completed }) => (completed ? "line-through" : "none")};
  color: black;

  &:hover button {
    opacity: 1;
  }
`;

export const Checkbox = styled.input`
  margin-right: 10px;
  cursor: pointer;
`;

export const TodoContent = styled.span`
  text-align: left;
  flex-grow: 2;
  word-wrap: break-word;
  max-width: 80%
`

export const TrashIcon = styled(FaTrash)`
color: grey;

&:hover {
  color: #000000a2;
}
`