import { Component, Input } from "@angular/core";
import { Movie } from "../models/movie.model";

@Component({
  selector: 'movie',
  template: `
    <mat-card [routerLink]="'/movies/' + movie.id" *ngIf="movie" class="example-card">
      <mat-card-header>
        <mat-card-title>{{movie.title}}</mat-card-title>
        <mat-card-subtitle>{{movie.vote}}</mat-card-subtitle>
      </mat-card-header>
      <figure mat-card-image>
        <img *ngIf="movie.poster; else defaultImage" [src]="movie.poster" alt="" />
        <ng-template #defaultImage>
          <img src="assets/images/placeholder.png" alt="" />
        </ng-template>
        <span class="adult" *ngIf="movie.adult">+18</span>
      </figure>
      <mat-card-content>
        <p>{{movie.overview | trunc : 140 : '[...]'}}</p>
      </mat-card-content>
    </mat-card>
  `,
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent {

  @Input() movie?: Movie;

  

}