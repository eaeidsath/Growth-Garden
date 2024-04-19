import { styled } from "styled-components";

export const SmallContainer = styled.div`
margin: 10px;
background-color: white;
opacity: 0.75; 
`;

export const LoginContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 40vh;
`;

export const LoginForm = styled.form`
background-color: var(--pale-green);
padding: 20px;
border-radius: 8px;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
width: 400px;
margin: 0 20px;
&h2 {
    margin-top: 0;
    margin-bottom: 20px;
    text-align: center;
}
&input {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
}
`;