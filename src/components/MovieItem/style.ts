import styled from "styled-components";
import { Breakpoint, Color } from "ui";

const StyledMovieItem = styled.li``;

const MoviePoster = styled.img`
  height: 356px;
  width: 100%;
`;

const MovieTitle = styled.p`
  color: ${Color.WHITE_THEME};
`;

export { StyledMovieItem, MoviePoster, MovieTitle };
