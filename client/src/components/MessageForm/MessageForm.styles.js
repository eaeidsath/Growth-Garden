import { styled } from "styled-components";

export const NoteText = styled.textarea`
  width: 80%;
  max-width: 100%;
  height: 200px; /* Adjust height as needed */
  padding: 10px;
  border: 2px solid white;
  border-radius: 8px;
  background-color: transparent;
  color: white;
  font-size: 16px;
  resize: vertical; /* Allow vertical resizing */
  outline: none; /* Remove outline on focus */
`;

// Styled select for the dropdown
export const Category = styled.select`
  width: 80%;
  max-width: 100%;
  padding: 10px;
  border: 2px solid white;
  border-radius: 8px;
  background-color: transparent;
  color: white;
  font-size: 16px;
  outline: none; /* Remove outline on focus */
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
