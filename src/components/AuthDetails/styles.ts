import styled from "styled-components";
import { Color } from "ui";

const StyledAuthDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
`;

const UserInfoContainer = styled.div`
  display: grid;
  grid-template-columns: 56px auto;
  column-gap: 20px;
`;

const FullUserName = styled.span`
  place-self: center;

  color: ${Color.WHITE_THEME};
`;

const UserNameInitials = styled.span`
  padding: 16px;

  background-color: ${Color.PRIMARY};
  color: ${Color.WHITE};
  border-radius: 10px;
`;

export { StyledAuthDetails, FullUserName, UserNameInitials, UserInfoContainer };
