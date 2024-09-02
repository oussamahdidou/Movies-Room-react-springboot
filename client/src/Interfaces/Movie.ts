export interface Movie {
  backdrop_path: string;
  id: number;
  title: string;
  originalTitle: string;
  overview: string;
  poster_path: string;
  mediaType: string;
  adult: boolean;
  originalLanguage: string;
  genreIds: number[];
  popularity: number;
  releaseDate: string;
  video: boolean;
  voteAverage: number;
  voteCount: number;
  name: string;
}
