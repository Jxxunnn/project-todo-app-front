import { useEffect, useState } from "react";
import { getToken, setToken } from "@/utils/storage";

const useTokenCheck = () => {
  const [isAuthority, setIsAuthority] = useState(true);

  useEffect(() => {
    if (getToken() === null) {
      setIsAuthority(false);
    } else {
      setIsAuthority(true);
    }
  }, []);

  return { isAuthority };
};

export default useTokenCheck;
