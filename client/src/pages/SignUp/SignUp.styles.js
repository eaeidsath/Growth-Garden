import styled from "styled-components";

export const SmallContainer = styled.div`
margin: 1rem;
background-color: white;
opacity: 0.75; 
width: 30rem;
`;

export const SignUpContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 40vh;
`;

export const SignUpForm = styled.form`
background-color: var(--cambridge-blue);
padding: 20px;
border-radius: 8px;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
width: 100%;
margin: 0 20px;
&h2 {
    margin-top: 0;
    margin-bottom: 20px;
    text-align: center;
    font-family: var(--quicksand);
}
&input[type="text"] {
    margin-bottom: 10px;
    padding: 10px;
    background-color: var(--green);
    font-size: 16px;
    width: 100%;
}
`;