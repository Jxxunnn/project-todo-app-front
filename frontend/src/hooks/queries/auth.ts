import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router";
import { postLogin, postSignup } from "@/api/auth";
import { QUERY_KEYS, MUTATION_KEYS } from "@/constants/queries";
import ROUTES from "@/constants/routes";
import { setToken } from "@/utils/storage";

export const useSignUp = () => {
  const navigate = useNavigate();

  const { mutate } = useMutation(postSignup, {
    retry: 0,
    onSuccess: () => {
      navigate(ROUTES.TODOS);
    },
    mutationKey: MUTATION_KEYS.SIGNUP,
  });

  return { mutate };
};
