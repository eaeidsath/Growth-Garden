import { useState } from "react";

import { useMutation } from "@apollo/client";
import { ADD_USER } from "../../utils/mutations";
import Auth from "../../utils/auth";

import {
  Container,
  BoxWrapper,
  SignUpContainer,
  Message,
  SignUpForm,
  TextInput,
  SubmitButton,
} from "./SignUp.styles";

function SignUp() {
  const [signUpFormData, setSignUpFormData] = useState({
    email: "",
    password: "",
    username: "",
  });

  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleSignUpChange = (event) => {
    const { name, value } = event.target;
    setSignUpFormData({ ...signUpFormData, [name]: value });
  };

  const handleSignUpSubmit = async (event) => {
    event.preventDefault();
    console.log("Sign Up Form Data:", signUpFormData);
    try {
      const { data } = await addUser({
        variables: { ...signUpFormData },
      });
      Auth.login(data.addUser.token);
    } catch (error) {
      console.error(error);
    }

    setSignUpFormData({
      email: "",
      password: "",
      username: "",
    });
  };

  return (
    <>
      <Container>
        <BoxWrapper>
          <SignUpContainer>
            <SignUpForm onSubmit={handleSignUpSubmit}>
              <h3>Sign Up</h3>
              <TextInput
                type="username"
                name="username"
                placeholder="Username"
                value={signUpFormData.username}
                onChange={handleSignUpChange}
                required
              />
              <br />
              <br />
              <TextInput
                type="email"
                name="email"
                placeholder="Email"
                value={signUpFormData.email}
                onChange={handleSignUpChange}
                required
              />
              <br />
              <br />
              <TextInput
                type="password"
                name="password"
                placeholder="Password"
                value={signUpFormData.password}
                onChange={handleSignUpChange}
                required
              />
              <br />
              <br />
              <SubmitButton type="submit">Sign Up</SubmitButton>
            </SignUpForm>
          </SignUpContainer>
          <SignUpContainer>
            <Message>
              <p>
                Already have an account? <a href="/"> Login! </a>
              </p>
            </Message>
          </SignUpContainer>
        </BoxWrapper>
      </Container>
    </>
  );
}

export default SignUp;
