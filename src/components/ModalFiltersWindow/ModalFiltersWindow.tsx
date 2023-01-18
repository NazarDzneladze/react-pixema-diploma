import { CloseIcon } from "assets";
import { Button, ModalWrapper, Portal } from "components";
import { PortalTarget } from "config";
import {
  FiltersHeader,
  FilterstForm,
  SortByContainer,
  StyledModalFiltersWindow,
  SubTitle,
  Tab,
  Title,
} from "./styles";
import Select from "react-select";

interface IProps {
  toggleModal: (isOpen: boolean) => void;
}

const options = [
  {
    value: "movie",
    label: "Movie",
  },
  {
    value: "series",
    label: "Series",
  },
  {
    value: "episode",
    label: "Episode",
  },
];

export const ModalFiltersWindow = ({ toggleModal }: IProps) => {
  const closeModal = () => {
    toggleModal(false);
  };

  return (
    <Portal target={PortalTarget.MODAL}>
      <ModalWrapper>
        <StyledModalFiltersWindow>
          <FiltersHeader>
            <Title>Filters</Title>
            <Button onClick={closeModal}>
              <CloseIcon />
            </Button>
          </FiltersHeader>
          <SortByContainer>
            <SubTitle>Sort By</SubTitle>
            <Tab>Rating</Tab>
            <Tab>Year</Tab>
          </SortByContainer>
          <FilterstForm>
            <Select isMulti options={options} />
          </FilterstForm>
        </StyledModalFiltersWindow>
      </ModalWrapper>
    </Portal>
  );
};
