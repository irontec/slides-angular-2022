import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { MoviesList } from '../models/movie.model';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'movies-page',
  template: `
    <div class="wrapper">
      <header>
        <h1>Últimas películas</h1>
      </header>
      <ng-container *ngIf="!loading; else loader">
        <div *ngIf="movies$ | async as movies" class="search">
          <form [formGroup]="selectedMovie">
          <mat-form-field appearance="fill">
            <mat-label>Seleccionar película</mat-label>
            <mat-select formControlName="movieId" >
              <mat-option
                *ngFor="let movie of movies.results"
                [value]="movie.id"
                >{{ movie.title }}</mat-option
              >
            </mat-select>
          </mat-form-field>
          <button [disabled]="!selectedMovie.valid" mat-raised-button color="accent" [routerLink]="'/movies/' + selectedMovie.value.movieId">Ver detalle de película</button>
          </form>
        </div>
        <div *ngIf="movies$ | async as movies" class="list-movies">
          <movie *ngFor="let movie of movies.results" [movie]="movie"></movie>
        </div>
        <pagination
          [currentPage]="currentPage"
          [totalPages]="22"
          (onNext)="change($event)"
          (onPrev)="change($event)"
        >
        </pagination>
      </ng-container>

      <ng-template #loader>
        <div class="loader">
          <mat-spinner [diameter]="45" [strokeWidth]="5"></mat-spinner>
        </div>
      </ng-template>
    </div>
  `,
  styleUrls: ['./movies-page.component.scss'],
})
export class MoviesPageComponent {
  movies$: Observable<MoviesList> | Observable<null>;
  currentPage: number = 1;
  loading: boolean = true;

  selectedMovie = new FormGroup({
    movieId: new FormControl('', [Validators.required]),
  });

  constructor(private moviesService: MoviesService) {
    this.movies$ = moviesService.getMovies();
    this.loading = this.movies$ ? false : true;
  }

  change(page: number) {
        this.loading = true;
    this.currentPage = page;
    this.movies$ = this.moviesService.getMovies(this.currentPage);
    this.loading = this.movies$ ? false : true;
  }
}
