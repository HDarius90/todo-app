import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as DarkModeSvg } from '../../assets/dark-mode-solid-svgrepo-com.svg';

type WrapperContainerProps = {
  isHomePage: boolean;
  isDarkMode: boolean;
};

export const NavigationContainer = styled.div`
  height: 70px;
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
  padding: 1rem;
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 7rem;
  padding: 0.5rem 1rem;
  font-size: 0.95rem;
  font-weight: 500;
  color: #444;
  text-decoration: none;
  border-radius: 0.75rem;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover,
  &:focus {
    color: #2563eb;
    background-color: #f3f4f6;
  }
`;

export const WrapperContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'isHomePage',
})<WrapperContainerProps>`
  background-color: ${({ isDarkMode, isHomePage }) =>
    isDarkMode ? '#000' : isHomePage ? '#e3f2fd' : '#fff'};
  min-height: 100vh;
`;

export const DarkModeSymbol = styled(DarkModeSvg)`
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
`;
