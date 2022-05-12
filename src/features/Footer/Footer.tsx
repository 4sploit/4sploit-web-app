import { FC } from "react";
import { useAppSelector } from "app/hooks";
import { Icons } from "common/globals";
import { FooterProps, defaultProps } from "./Footer.props";
import {
  Container,
  CopyrightContainer,
  CopyrightText,
  ExternalLink,
  ExternalLinksContainer,
  StyledFooter,
  StyledSvgIcon,
} from "./Footer.style";

const Footer: FC<FooterProps> = () => {
  const footerStore = useAppSelector((state) => state.footer);

  return (
    <StyledFooter>
      <Container>
        <ExternalLinksContainer>
          {footerStore.externalLinks.map((link) => (
            <ExternalLink
              key={link.id}
              url={link.url}
              target={link.target}
              isExternal={link.isExternal}>
              {link.icon && <StyledSvgIcon as={Icons[link.icon]} />}
            </ExternalLink>
          ))}
        </ExternalLinksContainer>
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
