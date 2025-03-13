import { useSelector } from 'react-redux';
import { Outlet, useLocation } from 'react-router-dom';
import { selectCurrentUser } from '../../store/user/user.slice';
import {
  NavigationContainer,
  NavLink,
  NavLinks,
  WrapperContainer,
} from './navigation.styles';

const Navigation = () => {
  const location = useLocation();
  const currentUser = useSelector(selectCurrentUser);

  return (
    <WrapperContainer isHomePage={location.pathname === '/'}>
      <NavigationContainer>
        <NavLinks>
          <NavLink to="/">HOME</NavLink>
          {currentUser ? (
            <NavLink
              as="span"
              to="/"
              onClick={() => {
                console.log('sign out');
              }}
            >
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
        </NavLinks>
      </NavigationContainer>
      <Outlet />
    </WrapperContainer>
  );
};

export default Navigation;
