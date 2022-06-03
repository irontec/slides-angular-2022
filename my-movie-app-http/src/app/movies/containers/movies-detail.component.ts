import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../models/movie.model';
import { MoviesService } from '../services/movies.service';
import { Comment } from '../models/movie.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'movies-detail-page',
  template: `
    <div *ngIf="(movie$ | async)?.result as movie" class="wrapper movie-info">
      <div class="image" >
        <img *ngIf="movie?.poster" [src]="movie?.poster" alt="" />
      </div>
      <div>
        <header>
          <h1>{{ movie?.title }}</h1>
          <p>{{ movie?.subtitle }}</p>
        </header>
        <comments-form (onSubmit)="submit($event)"></comments-form>
      </div>
      <div class="overview">
        <h1>Sinopsis</h1>
        <p>{{ movie?.overview }}</p>
      </div>
    </div>
  `,
  styleUrls: ['./movies-detail.component.scss'],
})
export class MoviesDetailPageComponent {
  movieId?: number;
  movie$?: Observable<any>;

  constructor(route: ActivatedRoute, private moviesService: MoviesService) {
    route.params.subscribe((params) => {
      const id = parseInt(params['id']);
      if (id) {
        this.movieId = id;
        this.movie$ = moviesService.getMovie(id)
      }
    });
  }

  submit(comment: Comment) {
    console.log('submit')
    if(this.movieId){
     this.moviesService.sendComment(this.movieId, comment);
    }
  }
}
