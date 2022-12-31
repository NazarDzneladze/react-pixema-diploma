import styled from "styled-components";

const StyledMovieList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(208px, auto));
  gap: 40px;
`;

export { StyledMovieList };
