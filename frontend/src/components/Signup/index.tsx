import React, { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Heading,
  Center,
  Button,
} from "@chakra-ui/react";

const Signup = () => {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const handleEmailInputChange = (e: ChangeEvent<HTMLInputElement>) =>
    setEmailInput(e.target.value);

  const handlePasswordInputChange = (e: ChangeEvent<HTMLInputElement>) =>
    setPasswordInput(e.target.value);

  const isEmailError = emailInput === "";

  return (
    <>
      <Heading>
        <Center>회원 가입</Center>
      </Heading>
      <FormControl isInvalid={isEmailError}>
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          value={emailInput}
          onChange={handleEmailInputChange}
        />
        {!isEmailError ? (
          <FormHelperText>이메일을 입력하세요</FormHelperText>
        ) : (
          <FormErrorMessage>이메일을 입력하세요</FormErrorMessage>
        )}
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          value={passwordInput}
          onChange={handlePasswordInputChange}
        />
        {!isEmailError ? (
          <FormHelperText>비밀번호를 입력하세요</FormHelperText>
        ) : (
          <FormErrorMessage>비밀번호를 입력하세요</FormErrorMessage>
        )}
        <Button colorScheme="blue" size="lg">
          가입하기
        </Button>
      </FormControl>
    </>
  );
};

export default Signup;
