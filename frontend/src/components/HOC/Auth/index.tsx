import { ComponentType } from "react";
import useTokenCheck from "@/hooks/auth/useTokenCheck";
import { useNavigate } from "react-router-dom";

const Auth = (AuthComponent: ComponentType) => {
  const navigate = useNavigate();
  const AuthCheck = () => {
    const { isAuthority } = useTokenCheck();

    if (!isAuthority) {
      window.alert("로그인이 필요합니다.");
      navigate("/login");
      return <></>;
    }
    return <AuthComponent />;
  };

  return AuthCheck;
};

export default Auth;
