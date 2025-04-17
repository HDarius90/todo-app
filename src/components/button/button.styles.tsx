import styled from 'styled-components';

export const BaseButton = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: 'Open Sans';
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

export const ClearButton = styled.button`
  width: 80px;
  height: 33px;
  background-color: #4285f4;
  color: white;
  margin-top: 10px;
  border: none;
  border-radius: 4px;
  font-family: 'Poppins', serif;
  cursor: pointer;

  &:hover {
    background-color: #357ae8;
    color: white;
    border: 1px solid black;
  }
`;

export const DeleteButton = styled.button`
  padding: 1px 10px;
  opacity: 0;
  border: none;
  transition: opacity 0.2s ease-in-out;
  cursor: pointer;
`;

export const GoogleSignInButton = styled(BaseButton)`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

export const InvertedButton = styled(BaseButton)`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

export const DarkModeButton = styled(BaseButton)`
  background-color: transparent;
  min-width: 0;
  padding: 0;
  position: absolute;
  top: 0;
  right: 5vw;
  margin-top: 8px;

  &:hover {
    background-color: transparent;

    border: none;
  }
`;
