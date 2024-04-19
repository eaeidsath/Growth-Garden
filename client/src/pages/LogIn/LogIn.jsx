import { useState } from "react";

import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../utils/mutations";
import Auth from "../../utils/auth";

import { SmallContainer, LoginContainer, LoginForm } from "./LogIn.styles";

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
      
        <form className="signin-form" onSubmit={handleSignInSubmit}>
          <h2>Sign In</h2>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={signInFormData.email}
            onChange={handleSignInChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={signInFormData.password}
            onChange={handleSignInChange}
            required
          />
          <button type="submit">Sign In</button>
        </form>
        <SmallContainer>
        <div>
          <h2>
            Don't have an account? Please <a href="/signup"> Sign Up </a> for an
            account
          </h2>
        </div>
      </SmallContainer>
    </>
  );
}

export default LogIn;
