import { Component } from "@angular/core";
import { MoviesList } from "../models/movie.model";
import { MoviesService } from "../services/movies.service";

@Component({
  selector: 'movies-page',
  template: `
    <div class="wrapper">
      <header>
        <h1>Últimas películas</h1>
      </header>
      <ng-container *ngIf="!loading; else loader">
        <div class="list-movies">
          <movie *ngFor="let movie of movies?.results" [movie]="movie"></movie>
        </div>
        <pagination 
          [currentPage]="this.currentPage"
          [totalPages]="this.movies?.totalPages"
          (onNext)="change($event)"
          (onPrev)="change($event)">
        </pagination>
      </ng-container>

      <ng-template #loader>
        <div class="loader">
          <mat-spinner [diameter]="45" [strokeWidth]="5"></mat-spinner>
        </div>
      </ng-template>
    </div>
  `,
  styleUrls: ['./movies-page.component.scss']
})
export class MoviesPageComponent {

  movies?: MoviesList;
  currentPage: number = 1;
  loading: boolean = true;

  constructor(private moviesService: MoviesService) {
    moviesService.getMovies().then((res: any) => {
      this.movies = res;
      this.loading = false;
    });
  }

  change(page: number) {
    this.loading = true;
    this.currentPage = page;
    this.moviesService.getMovies(this.currentPage).then((res: any) => {
      this.movies = res;
      this.loading = false;
    });
  }

}