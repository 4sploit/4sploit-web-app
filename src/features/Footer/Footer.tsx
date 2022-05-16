import { FC } from "react";
import { useAppSelector } from "app/hooks";
import { FooterProps, defaultProps } from "./Footer.props";
import {
  Container,
  CopyrightContainer,
  CopyrightText,
  FooterIconLink,
  FooterLinksContainer,
  StyledFooter,
} from "./Footer.style";
import { LinkTypes } from "common/components/Link";

const Footer: FC<FooterProps> = () => {
  const footerStore = useAppSelector((state) => state.footer);

  return (
    <StyledFooter>
      <Container>
        <FooterLinksContainer>
          {footerStore.externalLinks.map(
            (link) =>
              link.icon && (
                <FooterIconLink
                  key={link.id}
                  url={link.url}
                  target={link.target}
                  icon={link.icon}
                  linkType={
                    link.isExternal
                      ? LinkTypes.External
                      : LinkTypes.Internal
                  }
                />
              )
          )}
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
