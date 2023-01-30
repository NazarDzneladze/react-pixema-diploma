import { motion } from "framer-motion";
import styled from "styled-components";
import { Color } from "ui";

const StyledBurgerMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 999;

  display: grid;
  grid-template-columns: 1fr auto;

  min-height: 100vh;
  width: 257px;
  padding: 24px;

  background-color: ${Color.BLACK};

  nav {
    place-self: start;
  }

  svg {
    cursor: pointer;
  }
`;

const LogOutButton = styled.button`
  font-size: 36px;

  background-color: transparent;
  border: none;
  color: ${Color.SECONDARY};
`;

const BurgerNav = styled.nav<{ $isAuth: boolean }>`
  display: grid;
  grid-template-rows: ${({ $isAuth }) => ($isAuth ? "repeat(5, auto)" : "repeat(4, auto)")};
  row-gap: 40px;

  a {
    display: grid;
    grid-template-columns: 24px 1fr;
    column-gap: 20px;
  }
`;

export { StyledBurgerMenu, BurgerNav, LogOutButton };
