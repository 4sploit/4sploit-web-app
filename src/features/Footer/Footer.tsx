import { FC } from "react";
import { useAppSelector } from "app/hooks";
import { Icons } from "common/styles";
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
  const externalLinks = footerStore.externalLinks;

  return (
    <StyledFooter>
      <Container>
        <ExternalLinksContainer>
          {externalLinks.map((link) => (
            <ExternalLink
              key={link.id}
              url={link.url}
              target={link.target}>
              {link.icon && <StyledSvgIcon as={Icons[link.icon]} />}
            </ExternalLink>
          ))}
        </ExternalLinksContainer>
        <CopyrightContainer>
          <CopyrightText>
            4sploit © {new Date().getFullYear()}
          </CopyrightText>
        </CopyrightContainer>
      </Container>
    </StyledFooter>
  );
};

Footer.defaultProps = defaultProps;

export default Footer;
