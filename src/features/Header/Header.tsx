import { FC, useEffect } from "react";
import { useTypedDispatch, useTypedSelector } from "store";
import { NavBar } from "common/components/NavBar";
import { HeaderProps, defaultProps } from "./Header.props";
import { StyledHeader } from "./Header.style";
import { ApiStatus } from "common/constants";
import { Loader } from "common/components";
import getHeaderData from "features/Header/Header.thunk";

const Header: FC<HeaderProps> = () => {
  const { data, status } = useTypedSelector((state) => state.header);
  const dispatch = useTypedDispatch();

  useEffect(() => {
    if (status == ApiStatus.Idle) {
      dispatch(getHeaderData());
    }
  }, [status, dispatch]);

  return (
    <StyledHeader>
      {status == ApiStatus.Loading ? (
        <Loader />
      ) : (
        data && <NavBar logo={data.logo} links={data.links} />
      )}
    </StyledHeader>
  );
};

Header.defaultProps = defaultProps;

export default Header;
