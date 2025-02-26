import styled from 'styled-components';

export const NotebookContainer = styled.div`
  background-color: white;
  max-width: 500px;
  width: 100%;
  min-height: 8rem;
  border-radius: 5px;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1);
  margin: auto;
  padding: 20px;

  @media (max-width: 550px) {
    max-width: 90%;
  }
`;

export const NotebookFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TaskCounter = styled.span`
  align-self: flex-end;
  color: #00000094;
`;
