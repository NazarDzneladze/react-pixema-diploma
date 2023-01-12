import { Portal } from "components";
import { PortalTarget } from "config";
import { StyledModalFiltersWindow } from "./styles";

interface IProps {
  toggleModal: (isOpen: boolean) => void;
}

export const ModalFiltersWindow = ({ toggleModal }: IProps) => {
  const closeModal = () => {
    toggleModal(false);
  };

  return (
    <Portal target={PortalTarget.MODAL}>
      <StyledModalFiltersWindow onClick={closeModal}>
        ModalFiltersWindow
        <button>Close modal</button>
      </StyledModalFiltersWindow>
      ;
    </Portal>
  );
};
