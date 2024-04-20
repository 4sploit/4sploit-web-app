import { FC, useEffect } from "react";
import { useTypedDispatch, useTypedSelector } from "store";
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
import { env } from "config";
import { ApiStatus } from "common/constants";
import getFooterData from "features/Footer/Footer.thunk";
import { Loader } from "common/components";

const Footer: FC<FooterProps> = () => {
  const { data, status } = useTypedSelector((state) => state.footer);
  const dispatch = useTypedDispatch();

  useEffect(() => {
    if (status == ApiStatus.Idle) {
      dispatch(getFooterData());
    }
  }, [status, dispatch]);

  if (status == ApiStatus.Loading) {
    return <Loader />;
  }

  return (
    <StyledFooter>
      <Container>
        <FooterLinksContainer>
          {data?.externalLinks.map(
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
              ),
          )}
        </FooterLinksContainer>
        <CopyrightContainer>
          <CopyrightText>
            {env.ownerName} © {new Date().getFullYear()}
          </CopyrightText>
        </CopyrightContainer>
      </Container>
    </StyledFooter>
  );
};

Footer.defaultProps = defaultProps;

export default Footer;
