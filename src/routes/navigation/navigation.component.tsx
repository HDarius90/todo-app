import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useLocation } from 'react-router-dom';
import { selectCurrentUser, signOutStart } from '../../store/user/user.slice';
import {
  NavigationContainer,
  NavLink,
  NavLinks,
  WrapperContainer,
} from './navigation.styles';

const Navigation = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const currentUser = useSelector(selectCurrentUser);

  const signOutUser = () => {
    dispatch(signOutStart());
  };

  return (
    <WrapperContainer isHomePage={location.pathname === '/'}>
      <NavigationContainer>
        <NavLinks>
          <NavLink to="/">HOME</NavLink>
          {currentUser ? (
            <NavLink as="span" to="/" onClick={signOutUser}>
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
