import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { CommentsForm } from "./components/comments-form.component";
import { MovieComponent } from "./components/movie.component";
import { RatingComponent } from "./components/rating.component";
import { MoviesDetailPageComponent } from "./containers/movies-detail.component";
import { MoviesPageComponent } from "./containers/movies-page.component";
import { MoviesRoutingModule } from "./movies-routing.module";
import { MoviesService } from "./services/movies.service";

@NgModule({
  declarations: [
    MoviesPageComponent,
    MoviesDetailPageComponent,
    MovieComponent,
    CommentsForm,
    RatingComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MoviesRoutingModule,
    ReactiveFormsModule
  ],
  providers: [MoviesService]
})
export class MoviesModule {}