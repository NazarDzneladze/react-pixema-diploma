import styled from "styled-components";
import { Color } from "ui";

const StyledDetailsPage = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
`;

const DetailsContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(3, auto);
  row-gap: 32px;
`;

const DetailsHeader = styled.div`
  display: grid;
  grid-template-rows: repeat(3, auto);
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
`;

const Raiting = styled.span`
  background-color: ${Color.GRAPHITE};

  svg path {
    fill: ${Color.WHITE_THEME};
  }
`;

const MovieInfo = styled.div`
  display: grid;
  grid-template-rows: auto auto auto;
  row-gap: 40px;
`;

const Runtime = styled.span``;

const MovieTitle = styled.h3``;

const DetailsPreview = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
`;

const OtherDetails = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: repeat(7, auto);
  justify-content: space-between;
  row-gap: 20px;
  column-gap: 60px;
`;

const Info = styled.p``;

const Plot = styled.p``;

const MoviePoster = styled.img``;


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
};
