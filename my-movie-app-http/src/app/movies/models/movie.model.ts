export interface Movie {
  id: number;
  title: string;
  subtitle: string;
  overview: string;
  poster?: string;
  adult: boolean;
  vote: number;
  genres?: Genre[];
}

export interface Genre {
  id: number;
  name: string;
}

export interface MoviesList {
  page: number;
  totalResults: number;
  totalPages: number;
  results: Movie[];
}

export interface Comment {
  name: string;
  genre: '' | 'Ciencia ficción' | 'Drama' | 'Acción';
  message: string;
  vote: number;
}

export interface ApiResponseMovieList {
  page: number
  results: {
    adult: boolean
    backdrop_path: string
    genre_ids: number[]
    id: number
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    release_date: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
  }[]
  total_pages: number
  total_results: number
}

export interface ApiResponseMovie {
  adult: boolean
  backdrop_path: string
  belongs_to_collection: object
  budget: number
  genres: {
    id: number
    name: string
  }[]
  homepage: string
  id: number
  imdb_id: string
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  production_companies: {
    id: number
    logo_path: string
    name: string
    origin_country: string
  }[]
  production_countries: {
    iso_3166_1: string
    name: string
  }[]
  release_date: string
  revenue: number
  runtime: number
  spoken_languages: {
    english_name: string
    iso_639_1: string
    name: string
  }[]
  status: string
  tagline: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export interface ApiResponseRequestToken {
  success?: boolean,
  expires_at?: string,
  request_token: string
}

export interface ApiResponseCreateSession {
  success?: boolean,
  session_id: string
}
