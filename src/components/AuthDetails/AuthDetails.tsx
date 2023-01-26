import { onAuthStateChanged, signOut, getAuth } from "firebase/auth";
import { useEffect, useState } from "react";
import { selectAccount, useAppSelector } from "store";
import { getUserInitials } from "utils";
import { FullUserName, StyledAuthDetails, UserInfoContainer, UserNameInitials } from "./styles";

export const AuthDetails = () => {
  const [authUser, setAuthUser] = useState<any>("");
  const { name, email } = useAppSelector(selectAccount);

  useEffect(() => {
    const auth = getAuth();
    const listen = onAuthStateChanged(auth, (user: any) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth);
  };

  //   const initials = getUserInitials(name);

  return (
    <StyledAuthDetails>
      <UserInfoContainer>
        <UserNameInitials>{email}</UserNameInitials>
        <FullUserName>{email}</FullUserName>
      </UserInfoContainer>
      <button onClick={handleSignOut}>sign out</button>
    </StyledAuthDetails>
  );
};
