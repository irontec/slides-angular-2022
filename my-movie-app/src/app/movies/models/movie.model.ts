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
