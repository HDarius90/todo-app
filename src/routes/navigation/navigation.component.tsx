import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useLocation } from 'react-router-dom';
import { selectCurrentUser, signOutStart } from '../../store/user/user.slice';
import {
  DarkModeSymbol,
  NavigationContainer,
  NavLink,
  WrapperContainer,
} from './navigation.styles';
import Button, {
  BUTTON_TYPE_CLASSES,
} from '../../components/button/button.component';

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
        <NavLink to="/">HOME</NavLink>
        {currentUser ? (
          <NavLink as="span" to="/" onClick={signOutUser}>
            SIGN OUT
          </NavLink>
        ) : (
          <NavLink to="/auth">SIGN IN</NavLink>
        )}
        <Button buttonType={BUTTON_TYPE_CLASSES.darkmode}>
          <DarkModeSymbol />
        </Button>
      </NavigationContainer>
      <Outlet />
    </WrapperContainer>
  );
};

export default Navigation;
