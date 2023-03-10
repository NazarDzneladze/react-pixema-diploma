import { Link } from "react-router-dom";
import { ROUTE } from "router";
import { ErrorCode, NotFoundMessage, NotFoundMessageContainer, StyledNotFoundPage } from "./styles";

export const NotFoundPage = () => {
  return (
    <StyledNotFoundPage>
      <NotFoundMessageContainer>
        <ErrorCode>404</ErrorCode>
        <NotFoundMessage>
          Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in the
          first place?
        </NotFoundMessage>
        <NotFoundMessage>
          Let's go <Link to={ROUTE.HOME}>home</Link> and try from there.
        </NotFoundMessage>
      </NotFoundMessageContainer>
    </StyledNotFoundPage>
  );
};
