import { useState } from "react";

import { useMutation } from "@apollo/client";
import { ADD_USER } from "../../utils/mutations";
import Auth from "../../utils/auth";

import { SmallContainer } from "./SignUp.styles";

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
      <form className="signup-form" onSubmit={handleSignUpSubmit}>
        <h2>Sign Up</h2>
        <input
          type="username"
          name="username"
          placeholder="Username"
          value={signUpFormData.username}
          onChange={handleSignUpChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={signUpFormData.email}
          onChange={handleSignUpChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={signUpFormData.password}
          onChange={handleSignUpChange}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
      <SmallContainer>
        <h2>
          Already have an account? <a href="/"> Login! </a>
        </h2>
      </SmallContainer>
    </>
  );
}

export default SignUp;
