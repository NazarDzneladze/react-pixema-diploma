import React, { useEffect } from "react";
import {useAppSelector } from "./store";

export const App = () => {
  const { currentTheme } = useAppSelector((state) => state.theme);
  useEffect(() => {
    document.documentElement.setAttribute("theme", currentTheme);
  }, [currentTheme]);

  return <div>App</div>;
};
