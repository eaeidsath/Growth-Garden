import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
:root {
    /* Coolors palette from poppies.jpg */
    --off-red-rgb: #ee0100ff;
    --dark-moss-green: #566241ff;
    --dark-moss-green-2: #31440eff;
    --powder-blue: #a0c1e5ff;
    --cambridge-blue: #739c92ff;
    --chinese-violet: #85698cff;
    --barn-red: #760202ff;
    --columbia-blue: #c9d8eeff;
    --beaver: #ae9682ff;
    --dim-gray: #667069ff;
  
    /* Font families */
    --annie-use-your-telescope: "Annie Use Your Telescope", cursive;
    --homemade-apple: "Homemade Apple", cursive;
    --rubik-scribble: "Rubik Scribble", system-ui;
    --quicksand: "Quicksand", sans-serif;
    --lora: "Lora", serif;
    --indie-flower: "Indie Flower", cursive;
  }

body {
    margin: 0;
    padding: 0;
    background-image: url("/grass.jpg");
    background-size: cover;
    background-position: center;
    font-family: var(--quicksand);
  }

  h1 {
    text-align: center;
    font-size: 2rem;
    font-family: var(--rubik-scribble);
  }

  h2 {
    text-align: center;
    font-size: 1.5rem;
    font-family: var(--homemade-apple);
  }

  h3 {
    text-align: center;
    font-size: 1.2rem;
  }

  button {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: var(--dark-moss-green);
    color: #fff;
    cursor: pointer;
    font-size: 1rem;
    font-family: var(--quicksand);
    transition: background-color 0.3s ease;
  
    &:hover {
      background-color: var(--dark-moss-green-2)};
    }
  }
`;

export default GlobalStyle;