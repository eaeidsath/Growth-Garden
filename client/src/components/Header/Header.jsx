import Navbar from "../Navbar/Navbar";
import { TopBanner, Title } from "./Header.styles";

export default function Header() {
  return (
    <>
      <TopBanner>
        {/* <Title>Growth Garden</Title> */}
        <Navbar />
      </TopBanner>
    </>
  );
}
