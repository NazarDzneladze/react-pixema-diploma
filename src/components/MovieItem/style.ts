import styled from "styled-components";
import { Breakpoint, Color } from "ui";

const StyledMovieItem = styled.li``;

const MoviePoster = styled.img`
  height: 356px;
  width: 100%;
  border-radius: 20px;
`;

const PosterContainer = styled.div`
  position: relative;

  svg {
    position: absolute;
    top: 20px;
    right: 20px;
  }
`;

const MovieTitle = styled.p`
  color: ${Color.WHITE_THEME};
`;

export { StyledMovieItem, MoviePoster, MovieTitle, PosterContainer };
