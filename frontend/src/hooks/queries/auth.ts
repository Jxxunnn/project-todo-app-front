import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router";
import { postLogin, postSignup } from "@/api/auth";
import ROUTES from "@/constants/routes";

export const usePostSignUpMutation = () => {
  const mutation = useMutation(postSignup);

  return mutation;
};

export const usePostLoginMutation = () => {
  const mutation = useMutation(postLogin);

  return mutation;
};
