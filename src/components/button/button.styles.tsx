import styled from 'styled-components';

export const BaseButton = styled.button`
  width: 80px;
  height: 33px;
  margin-top: 10px;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

`;

export const ClearButton = styled(BaseButton)`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
    color: white;
    border: 1px solid black;
  }
`;

export const DeleteButton = styled(BaseButton)`
    padding: 5px 10px;
`;