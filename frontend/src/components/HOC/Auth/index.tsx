import { ComponentType } from "react";

const Auth = (AuthComponent: ComponentType) => {
  const AuthCheck = () => {};
  return <AuthComponent />;
};

export default Auth;
