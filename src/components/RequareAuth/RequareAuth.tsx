import { Navigate, Outlet } from "react-router-dom";
import { selectAccount, useAppSelector } from "store";

export const RequareAuth = () => {
  const { isAuth } = useAppSelector(selectAccount);

  return isAuth ? <Outlet /> : <Navigate to="auth/sign-in" />;
};
