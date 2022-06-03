import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError, pipe, Observable, of } from 'rxjs';
import { catchError, switchMap, tap } from 'rxjs/operators';
import {
  Movie,
  MoviesList,
  Comment,
  ApiResponseMovieList,
  ApiResponseMovie,
  ApiResponseRequestToken,
  ApiResponseCreateSession,
} from '../models/movie.model';

const API_KEY = '91f024697109b9ee4aa0237feb466ea1';
const BASE_ENDPOINT = 'https://api.themoviedb.org/3/';
const IMAGE_BASEPATH = 'https://image.tmdb.org/t/p/w500';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  getMovies(page = 1): Observable<MoviesList> {
    const url = `${BASE_ENDPOINT}movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`;

    return this.http.get<ApiResponseMovieList>(url).pipe(
      switchMap((res) => {
        if (!res.results) {
          return throwError(res);
        } else {
          const results = res.results.map((m) => {
            return {
              id: m.id,
              title: m.title,
              overview: m.overview,
              adult: m.adult,
              vote: m.vote_average,
              poster: IMAGE_BASEPATH + m.poster_path,
            } as Movie;
          });
          const list = {
            page: res.page,
            totalPages: res.total_pages,
            totalResults: res.total_results,
            results,
          } as MoviesList;
          return of(list);
        }
      })
    );
  }

  getMovie(id: number) {
    const url = `${BASE_ENDPOINT}movie/${id}?api_key=${API_KEY}&language=en-US`;
    return this.http.get<ApiResponseMovie>(url).pipe(
      switchMap((res) => {
        console.log(res);
        if (!res) {
          return throwError(res);
        } else {
          const movie = {
            id: res.id,
            adult: res.adult,
            overview: res.overview,
            title: res.title,
            subtitle: res.tagline,
            poster: IMAGE_BASEPATH + res.poster_path,
            vote: res.vote_average,
            genres: res.genres,
          } as Movie;
          return of({ success: true, result: movie });
        }
      })
    );
  }


  sendComment(id: number, comment: Comment) {

    console.log(`Comentario enviado sobre la película ${id}:${comment}`)
/*     return fetch(`${BASE_ENDPOINT}movie/${id}/rating?api_key=${API_KEY}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        value: comment.vote,
      }),
    }); */
  }
}
