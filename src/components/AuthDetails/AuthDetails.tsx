import { onAuthStateChanged, signOut, getAuth } from "firebase/auth";
import { useEffect, useState } from "react";
import { useAppSelector } from "store";
import { FullUserName, StyledAuthDetails, UserInfoContainer, UserNameInitials } from "./styles";

export const AuthDetails = () => {
  const [authUser, setAuthUser] = useState<any>("");
  const { user } = useAppSelector((state) => state.account);

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

  return (
    <StyledAuthDetails>
      <UserInfoContainer>
        <UserNameInitials>TEST</UserNameInitials>
        <FullUserName>TEST</FullUserName>
      </UserInfoContainer>
    </StyledAuthDetails>
  );
};

