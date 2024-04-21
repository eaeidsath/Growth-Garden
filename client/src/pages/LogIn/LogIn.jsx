import { useState } from "react";

import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../utils/mutations";
import Auth from "../../utils/auth";

import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  Container,
  BoxWrapper,
  LoginContainer,
  Message,
  LoginForm,
  TextInput,
  SubmitButton,
} from "./LogIn.styles";

function LogIn() {
  const [signInFormData, setSignInFormData] = useState({
    email: "",
    password: "",
  });

  const [login, { error }] = useMutation(LOGIN_USER);

  const handleSignInChange = (event) => {
    const { name, value } = event.target;
    setSignInFormData({ ...signInFormData, [name]: value });
  };

  const handleSignInSubmit = async (event) => {
    event.preventDefault();
    console.log("Sign In Form Data:", signInFormData);
    try {
      const { data } = await login({
        variables: { ...signInFormData },
      });
      Auth.login(data.login.token);
    } catch (error) {
      console.error(error);
    }

    setSignInFormData({
      email: "",
      password: "",
    });
  };

  return (
    <>
      <Container>
        <BoxWrapper>
          <LoginContainer>
            <LoginForm onSubmit={handleSignInSubmit}>
              <h2>Sign In</h2>
              <TextInput
                type="email"
                name="email"
                placeholder="Email"
                value={signInFormData.email}
                onChange={handleSignInChange}
                required
              />
              <br /><br />
              <TextInput
                type="password"
                name="password"
                placeholder="Password"
                value={signInFormData.password}
                onChange={handleSignInChange}
                required
              />
              <br /><br />
              <SubmitButton type="submit">Sign In <FontAwesomeIcon icon={faPaperPlane} /></SubmitButton>
            </LoginForm>
          </LoginContainer>
          <LoginContainer>
            <Message>
              <p>Don't have an account?</p>
              <p>
                Please <a href="/signup"> Sign Up </a> for an account
              </p>
            </Message>
          </LoginContainer>
        </BoxWrapper>
      </Container>
    </>
  );
}

export default LogIn;
