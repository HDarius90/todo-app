import { FC, ButtonHTMLAttributes } from 'react';

import {
  BaseButton,
  ClearButton,
  DeleteButton,
  GoogleSignInButton,
  InvertedButton,
} from './button.styles';

export enum BUTTON_TYPE_CLASSES {
  base = 'base',
  clear = 'clear-button',
  delete = 'delete',
  google = 'google-sign-in',
  inverted = 'inverted',
}

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.clear]: ClearButton,
    [BUTTON_TYPE_CLASSES.delete]: DeleteButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
  }[buttonType]);

export type ButtonProps = {
  children?: React.ReactNode;
  buttonType?: BUTTON_TYPE_CLASSES;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({ children, buttonType, ...otherProps }) => {
  const CustomeButton = getButton(buttonType);
  return <CustomeButton {...otherProps}>{children}</CustomeButton>;
};

export default Button;
