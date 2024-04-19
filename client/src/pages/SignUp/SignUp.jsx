import { useState } from "react";

import { useMutation } from "@apollo/client";
import { ADD_USER } from "../../utils/mutations";
import Auth from "../../utils/auth";

import { SmallContainer, SignUpContainer, SignUpForm } from "./SignUp.styles";

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
    <SignUpContainer>
      <SignUpForm onSubmit={handleSignUpSubmit}>
        <h3>Sign Up</h3>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={signUpFormData.username}
          onChange={handleSignUpChange}
          required
        />
        <br /><br />
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={signUpFormData.email}
          onChange={handleSignUpChange}
          required
        />
        <br /><br />
        <input
          type="text"
          name="password"
          placeholder="Password"
          value={signUpFormData.password}
          onChange={handleSignUpChange}
          required
        />
        <br /><br />
        <button type="submit">Sign Up</button>
      </SignUpForm>
      
      <SmallContainer>
        <h3>
          Already have an account? <a href="/"> Login! </a>
        </h3>
      </SmallContainer>
      </SignUpContainer>
    </>
  );
}

export default SignUp;
