import styled from 'styled-components';

export const TaskListContainer = styled.ul`
  max-height: 18rem;
  overflow-y: auto;
  scrollbar-width: thin;
  display: flex;
  list-style: none;
  flex-direction: column;
  gap: 0.8rem;
  padding: 0 1rem 0 0;
`;

export const TaskItem = styled.li<{ completed: boolean }>`
  display: flex;
  align-items: center;
  padding: 1.2rem;
  background-color: #F2F2F2;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-decoration: ${({ completed }) => (completed ? "line-through" : "none")};
  color: black;
`;