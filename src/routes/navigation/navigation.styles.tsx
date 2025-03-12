import { Link } from 'react-router-dom';
import styled from 'styled-components';

type WrapperContainerProps = {
  isHomePage: boolean;
};

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;

export const WrapperContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'isHomePage',
})<WrapperContainerProps>`
  background-color: ${({ isHomePage }) => (isHomePage ? '#e3f2fd' : 'white')};
  min-height: 100vh;
`;
