import { NavigateFunction } from "react-router-dom";
import { AdditionalInformation, UserData } from "../../utils/firebase/firebase.utils";
import { User } from "firebase/auth";

export type UserState = {
  readonly currentUser: UserData | null;
  readonly isLoading: boolean;
  readonly error: Error | null;
};


export type EmailSignInPayload = {
  email: string;
  password: string;
  navigate: NavigateFunction;
};

export type SignUpStartPayload = EmailSignInPayload & { displayName: string };

export type SignUpSuccessPayload = {
  user: User;
  additionalDetails: AdditionalInformation;
};

export type signInSuccessPayload = UserData & { id: string };