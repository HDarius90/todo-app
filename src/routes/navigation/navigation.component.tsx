import { Outlet, useLocation } from 'react-router-dom';
import {
  NavigationContainer,
  NavLink,
  NavLinks,
  WrapperContainer,
} from './navigation.styles';

const Navigation = () => {
  const location = useLocation();

  return (
    <WrapperContainer isHomePage={location.pathname === '/'}>
      <NavigationContainer>
        <NavLinks>
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/auth">SIGN IN</NavLink>
        </NavLinks>
      </NavigationContainer>
      <Outlet />
    </WrapperContainer>
  );
};

export default Navigation;
