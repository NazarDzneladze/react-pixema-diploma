import { onAuthStateChanged, signOut, getAuth } from "firebase/auth";
import { useEffect, useState } from "react";
import { logOutUser, selectAccount, useAppDispatch, useAppSelector } from "store";
import { getUserInitials } from "utils";
import { FullUserName, StyledAuthDetails, UserInfoContainer, UserNameInitials } from "./styles";

export const AuthDetails = () => {
  const { name, email, isAuth } = useAppSelector(selectAccount);
  const dispatch = useAppDispatch();

  const userInfo = JSON.parse(localStorage.getItem("userInfo")!);
  if (userInfo) {
    userInfo.isAuth = false;
  }

  const handleSignOut = () => {
    dispatch(logOutUser());
    const auth = getAuth();
    signOut(auth);
    localStorage.length > 0 && localStorage.setItem("userInfo", JSON.stringify(userInfo));
  };

  return (
    <StyledAuthDetails>
      <UserInfoContainer>
        <UserNameInitials>{isAuth ? getUserInitials(name) : "test"}</UserNameInitials>
        <FullUserName>{isAuth && name || "test"}</FullUserName>
      </UserInfoContainer>
      <button onClick={handleSignOut}>sign out</button>
    </StyledAuthDetails>
  );
};
