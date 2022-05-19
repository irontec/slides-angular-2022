import { Injectable } from "@angular/core";
import { Movie, MoviesList, Comment } from "../models/movie.model";

const API_KEY = '91f024697109b9ee4aa0237feb466ea1';
const BASE_ENDPOINT = 'https://api.themoviedb.org/3/';
const IMAGE_BASEPATH =  'https://image.tmdb.org/t/p/w500';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  getMovies(page = 1) {
    return fetch(`${BASE_ENDPOINT}movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`)
      .then(res => {
        if(res.ok) {
          return res.json();
        }
        return null;
      })
      .then(res => {
        if(res) {
          const results = res.results.map((m: any) => {
            return {
              id: m.id,
              title: m.title,
              overview: m.overview,
              adult: m.adult,
              vote: m.vote_average,
              poster: IMAGE_BASEPATH + m.poster_path
            } as Movie
          })
          const list = {
            page: res.page,
            totalPages: res.total_pages,
            totalResults: res.total_results,
            results
          } as MoviesList
          return list;
        }
        console.log('Error obteniendo películas');
        return null;
      })
      .catch(err => {
        console.log('Error obteniendo películas', err);
      })
  }

  getMovie(id: number) {
    return fetch(`${BASE_ENDPOINT}movie/${id}?api_key=${API_KEY}&language=en-US`)
      .then(res => {
        if(res.ok) {
          return res.json();
        }
        else {
          return { success: false, error: 'Error obteniendo las películas' };
        }
      })
      .then(res => {
        if(res.success && res.success === false) { return res } 
        const movie = {
          id: res.id,
          adult: res.adult,
          overview: res.overview,
          title: res.title,
          poster: IMAGE_BASEPATH + res.poster_path,
          vote: res.vote_average,
          genres: res.genres
        } as Movie;
        return { success: true, result: movie };
      })
      .catch(err => {
        console.log('Error obteniendo las películas');
        return { success: false, error: 'Error obteniendo las películas'}
      })
  }

  sendComment(id: number, comment: Comment) {
    return fetch(`${BASE_ENDPOINT}movie/${id}/rating?api_key=${API_KEY}`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        value: comment.vote
      })
    })
  }
}
