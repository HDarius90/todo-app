import { Link } from 'react-router-dom';
import styled from 'styled-components';

type WrapperContainerProps = {
  isHomePage: boolean;
};

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 25px;
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  margin: 10px 30px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 600;
  text-decoration: none;
  color: black;
  border: 2px solid black;
  border-radius: 10px;

  &:hover {
    background-color: #c9c3c3dc;
  }
`;

export const WrapperContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'isHomePage',
})<WrapperContainerProps>`
  background-color: ${({ isHomePage }) => (isHomePage ? '#e3f2fd' : 'white')};
  min-height: 100vh;
`;
