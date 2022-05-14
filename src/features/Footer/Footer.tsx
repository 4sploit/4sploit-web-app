import { FC } from "react";
import { useAppSelector } from "app/hooks";
import { Icons } from "common/globals";
import { FooterProps, defaultProps } from "./Footer.props";
import {
  Container,
  CopyrightContainer,
  CopyrightText,
  FooterLink,
  FooterLinksContainer,
  StyledFooter,
  StyledSvgIcon,
} from "./Footer.style";
import { LinkTypes } from "common/components/Link";

const Footer: FC<FooterProps> = () => {
  const footerStore = useAppSelector((state) => state.footer);

  return (
    <StyledFooter>
      <Container>
        <FooterLinksContainer>
          {footerStore.externalLinks.map((link) => (
            <FooterLink
              key={link.id}
              url={link.url}
              target={link.target}
              linkType={
                link.isExternal ? LinkTypes.External : LinkTypes.Internal
              }>
              {link.icon && <StyledSvgIcon as={Icons[link.icon]} />}
            </FooterLink>
          ))}
        </FooterLinksContainer>
        <CopyrightContainer>
          <CopyrightText>
            {footerStore.ownerName} © {new Date().getFullYear()}
          </CopyrightText>
        </CopyrightContainer>
      </Container>
    </StyledFooter>
  );
};

Footer.defaultProps = defaultProps;

export default Footer;
