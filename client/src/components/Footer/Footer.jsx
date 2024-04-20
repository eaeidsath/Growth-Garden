import { SocialFooter, SocialIcons, Copyright } from './Footer.styles';

export default function Footer() {
  return (
    <SocialFooter>
      <SocialIcons>
        <a href="https://github.com/eaeidsath/Growth-Garden">
          <i className="fab fa-github"></i>
        </a>
      </SocialIcons>
      <Copyright>© 2024 this.team. All rights reserved.</Copyright>
    </SocialFooter>
  );
}
