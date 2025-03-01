import styled from 'styled-components';

export const BaseButton = styled.button`
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ClearButton = styled(BaseButton)`
  width: 80px;
  height: 33px;
  background-color: #4285f4;
  color: white;
  margin-top: 10px;

  &:hover {
    background-color: #357ae8;
    color: white;
    border: 1px solid black;
  }
`;

export const DeleteButton = styled(BaseButton)`
    padding: 1px 10px;
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
`;