import { AxiosError } from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { setToken } from "@/utils/storage";
import { usePostLoginMutation } from "@/hooks/queries/auth";
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Heading,
  Center,
  Button,
  chakra,
} from "@chakra-ui/react";
import REGEX from "@/constants/regex";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm();

  const navigate = useNavigate();
  const postLoginMutation = usePostLoginMutation();

  return (
    <>
      <Heading>
        <Center>로그인</Center>
      </Heading>
      <chakra.form
        onSubmit={handleSubmit(({ email, password }) =>
          postLoginMutation.mutateAsync(
            { email, password },
            {
              onSuccess: ({ message, token }) => {
                window.alert(message);
                setToken(token);
                navigate("/");
              },
              onError: (error: any) => {
                if (error instanceof AxiosError) {
                  window.alert(error.response!.data.details);
                }
              },
            }
          )
        )}
      >
        <FormControl isRequired>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            {...register("email", {
              required: "이메일 입력은 필수입니다.",
              pattern: {
                value: REGEX.EMAIL,
                message: "이메일 형식에 맞지 않습니다.",
              },
            })}
            placeholder="이메일을 입력해주세요"
            id="email"
          />
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input
            {...register("password", {
              required: "비밀번호 입력은 필수입니다.",
              pattern: {
                value: REGEX.PASSWORD,
                message: "8자리 이상 비밀번호를 사용하세요.",
              },
            })}
            placeholder="비밀번호를 입력해주세요"
            type="password"
            id="password"
          />
          <Button
            type="submit"
            disabled={!isValid}
            isDisabled={!isValid}
            colorScheme="blue"
            size="lg"
          >
            로그인
          </Button>
          <FormHelperText
            onClick={() => navigate("/signup")}
            cursor="pointer"
            textDecoration="underline"
          >
            아이디가 없으신가요?
          </FormHelperText>
        </FormControl>
      </chakra.form>
    </>
  );
};

export default Login;
