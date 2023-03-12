import api from "@/api/index";
import { API_PATH } from "@/constants/path";
import type { AuthType } from "@/types/auth";

export const postLogin = async (params: AuthType) => {
  const { data } = await api.post(API_PATH.LOGIN, params);

  return data;
};

export const postSignup = async (params: AuthType) => {
  const { data } = await api.post(API_PATH.SIGN_UP, params);

  return data;
};
