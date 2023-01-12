import { Header, ModalFiltersWindow, ThemeToggler } from "components";
import { useToggle } from "hooks";
import { useAppSelector } from "store";
import {
  ColorMode,
  ColorModeInfo,
  ColorModeText,
  ColorModeTextContainer,
  Label,
  Password,
  PasswordInfo,
  Profile,
  ProfileInfo,
  SettingsContainer,
  SettingsInput,
  StyledSettingsPage,
  Title,
} from "./styles";

export const SettingsPage = () => {
  const { currentTheme } = useAppSelector((state) => state.theme);
  const [isOpen, setIsOpen] = useToggle();

  const handleOpenModal = () => {
    setIsOpen();
  };

  return (
    <StyledSettingsPage>
      <Header />
      <SettingsContainer>
        <Profile>
          <Title>Profile</Title>
          <ProfileInfo currentTheme={currentTheme}>
            <Label>
              Name
              <SettingsInput placeholder="testName" />
            </Label>
            <Label>
              Email
              <SettingsInput placeholder="testEmail" />
            </Label>
          </ProfileInfo>
        </Profile>
        <Password>
          <Title>Password</Title>
          <PasswordInfo currentTheme={currentTheme}>
            <Label>
              Password
              <SettingsInput placeholder="Your password" />
            </Label>
            <Label>
              New password
              <SettingsInput placeholder="New password" />
            </Label>
            <Label>
              Confirm password
              <SettingsInput placeholder="Confirm password" />
            </Label>
          </PasswordInfo>
        </Password>
        <ColorMode>
          <Title>Color mode</Title>
          <ColorModeInfo currentTheme={currentTheme}>
            <ColorModeTextContainer>
              <ColorModeText>Dark</ColorModeText>
              <ColorModeText light>Use dark thema</ColorModeText>
            </ColorModeTextContainer>
            <ThemeToggler />
          </ColorModeInfo>
        </ColorMode>
      </SettingsContainer>
      <button onClick={handleOpenModal}>open modal</button>
      {isOpen && <ModalFiltersWindow toggleModal={setIsOpen} />}
    </StyledSettingsPage>
  );
};
