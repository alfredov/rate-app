import { TMovie } from './TMovie'

export type TtopRatedMovie = {
  score: number,
  releaseDate: string,
} & TMovie
