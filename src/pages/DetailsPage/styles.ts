import styled from "styled-components";
import { Breakpoint, Color, Typography } from "ui";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  Image,
} from "pure-react-carousel";

import "pure-react-carousel/dist/react-carousel.es.css";

const StyledDetailsPage = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
`;

const DetailsContainer = styled.div`
  display: grid;

  ${Breakpoint.XXS} {
    grid-template-rows: repeat(3, auto);
    column-gap: 32px;
  }

  ${Breakpoint.MD} {
    grid-template-columns: auto 1fr;
    grid-template-rows: auto 1fr;
    column-gap: 42px;
  }
`;

const DetailsHeader = styled.div`
  display: grid;
  grid-template-rows: repeat(3, auto);

  ${Breakpoint.MD} {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
  }
`;

const GenreList = styled.ul`
  display: flex;
`;

const GenreItem = styled.li`
  color: ${Color.LIGHT};
`;

const HeaderInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  column-gap: 20px;

  ${Breakpoint.MD} {
    align-items: start;
    justify-content: start;
  }
`;

const Raiting = styled.span`
  background-color: ${Color.GRAPHITE};

  svg path {
    fill: ${Color.WHITE_THEME};
  }
`;

const MovieInfo = styled.div`
  display: grid;
  grid-template-rows: auto auto 1fr;
  row-gap: 40px;

  ${Breakpoint.MD} {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
  }
`;

const Runtime = styled.span``;

const MovieTitle = styled.h3``;

const DetailsPreview = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  row-gap: 32px;

  ${Breakpoint.XXS} {
    place-self: center;
  }

  ${Breakpoint.MD} {
    grid-column: 1 / 2;
    grid-row: 1 / 3;
    place-self: start;
  }
`;

const OtherDetails = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: repeat(7, auto);
  row-gap: 20px;
  column-gap: 60px;
`;

const Info = styled.p``;

const Plot = styled.p`
  ${Typography.BODY}
`;

const MoviePoster = styled.img``;

const Carousel = styled(CarouselProvider)`
  display: grid;
  grid-template-rows: auto 1fr;
`;

export {
  StyledDetailsPage,
  MoviePoster,
  DetailsContainer,
  DetailsHeader,
  GenreList,
  GenreItem,
  MovieTitle,
  HeaderInfo,
  Runtime,
  Raiting,
  DetailsPreview,
  MovieInfo,
  Plot,
  OtherDetails,
  Info,
  Carousel,
};
