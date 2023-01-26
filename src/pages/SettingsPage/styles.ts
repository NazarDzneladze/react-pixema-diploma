import { StyledInput } from "components/Input/styles";
import styled from "styled-components";
import { Breakpoint, Color } from "ui";

const StyledSettingsPage = styled.div`
  display: grid;
  grid-template-rows: 56px 1fr;

  ${Breakpoint.XXS} {
    grid-template-rows: auto 1fr;
  }

  ${Breakpoint.MD} {
    grid-template-rows: 56px 1fr;
  }
`;

const SettingsContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(3, auto);
  row-gap: 40px;
`;

const Profile = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  row-gap: 16px;
`;

const ProfileInfo = styled.div<{ currentTheme?: string }>`
  display: grid;

  border: ${({ currentTheme }) =>
    currentTheme === "light" ? `2px solid ${Color.LIGHT}` : `2px solid ${Color.DARK}`};
  border-radius: 10px;
  background-color: ${({ currentTheme }) => (currentTheme === "light" ? "none" : `${Color.DARK}`)};

  ${Breakpoint.XXS} {
    grid-template-rows: repeat(2, auto);
    row-gap: 20px;

    padding: 24px;
  }

  ${Breakpoint.MD} {
    grid-template-columns: repeat(2, auto);
    column-gap: 40px;

    padding: 40px;
  }
`;

const Title = styled.h3`
  color: ${Color.WHITE_THEME};
`;

const Label = styled.label`
  display: grid;
  grid-template-rows: auto auto;
  row-gap: 8px;

  width: 100%;

  color: ${Color.WHITE_THEME};
`;

const SettingsInput = styled(StyledInput)`
  :active,
  :hover,
  :focus {
    outline: 0;
    outline-offset: 0;
  }
`;

const Password = styled(Profile)``;

const PasswordInfo = styled(ProfileInfo)<{ currentTheme?: string }>`
  grid-template-rows: repeat(2, auto);
  row-gap: 24px;

  background-color: ${({ currentTheme }) => (currentTheme === "light" ? "none" : `${Color.DARK}`)};

  ${Breakpoint.XXS} {
    grid-template-rows: repeat(3, auto);
    row-gap: 20px;

    padding: 24px;
  }

  ${Breakpoint.MD} {
    grid-template-columns: repeat(2, auto);
    column-gap: 40px;

    padding: 40px;

    label:nth-child(3) {
      grid-column: 2 / 3;
    }
  }
`;

const ColorMode = styled(Profile)``;

const ColorModeInfo = styled.div<{ currentTheme?: string }>`
  display: grid;
  grid-template-columns: repeat(2, auto);
  justify-content: space-between;

  padding: 40px;

  border-radius: 10px;
  border: ${({ currentTheme }) =>
    currentTheme === "light" ? `2px solid ${Color.LIGHT}` : `2px solid ${Color.DARK}`};
  background-color: ${({ currentTheme }) => (currentTheme === "light" ? "none" : `${Color.DARK}`)};
`;

const ColorModeTextContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(2, auto);
  row-gap: 4px;
`;

const ColorModeText = styled.p<{ light?: boolean }>`
  color: ${({ light }) => (light ? `${Color.LIGHT}` : `${Color.WHITE_THEME}`)};
`;

export {
  StyledSettingsPage,
  SettingsContainer,
  Profile,
  Title,
  ProfileInfo,
  SettingsInput,
  Label,
  Password,
  PasswordInfo,
  ColorMode,
  ColorModeInfo,
  ColorModeTextContainer,
  ColorModeText,
};
