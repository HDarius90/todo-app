import { Outlet } from 'react-router-dom';
import {
  NavigationContainer,
  NavLink,
  NavLinks,
} from './navigation.styles';

const Navigation = () => {
  return (
    <>
      <NavigationContainer>
        <NavLinks>
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/auth">SIGN IN</NavLink>
        </NavLinks>
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;
