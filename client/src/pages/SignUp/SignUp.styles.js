import { styled } from "styled-components";

// Container for login box and sign up message
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
`;

// Styled component for the wrapper that holds both boxes
export const BoxWrapper = styled.div`
  display: flex;
  flex: 1;
  gap: 5rem;
  margin: 15rem;
`;

// Container for login form
export const SignUpContainer = styled.div`
  flex: 1;
  padding: 20px;
  background-color: var(--cambridge-blue);
  border-radius: 8px;
`;

// Message on the right asking the user to sign up
export const Message = styled.div`
  flex: 1;
  background-image: url("../src/assets/chalkboard.jpeg");
  background-size: cover;
  background-position: center;
  padding: 20px;
  font-size: 1.2rem;
  color: white;
  text-align: center;
  border-radius: 8px;
  height: calc(100% - 40px);
`;

// Login form styling
export const SignUpForm = styled.form`
  background-image: url("../src/assets/chalkboard.jpeg");
  background-size: cover;
  background-position: center;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: white;
  width: calc(100% - 40px);
`;

export const TextInput = styled.textarea`
  width: 80%;
  max-width: 100%;
  padding: 10px;
  border: 2px solid white;
  border-radius: 8px;
  background-color: transparent;
  color: white;
  font-size: 16px;
  outline: none;
`;

export const SubmitButton = styled.button`
  padding: 10px 20px;
  border: 2px solid white;
  border-radius: 8px;
  background-color: transparent;
  color: white;
  font-size: 16px;
  cursor: pointer;
`;
