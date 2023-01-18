import { auth } from "../../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { StyledAuthDetails } from "./styles";

export const AuthDetails = () => {
  const [authUser, setAuthUser] = useState<any>("");

  useEffect(() => {
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
    signOut(auth);
  };

  return (
    <StyledAuthDetails>
      {authUser ? <span>{authUser.email}</span> : <span>sign in</span>}
      <button onClick={handleSignOut}>sign out</button>
    </StyledAuthDetails>
  );
};
