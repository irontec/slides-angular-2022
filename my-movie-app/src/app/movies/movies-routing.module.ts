import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MoviesDetailPageComponent } from "./containers/movies-detail.component";
import { MoviesPageComponent } from "./containers/movies-page.component";


const routes : Routes = [
  {
    path: '',
    component: MoviesPageComponent
  },
  {
    path: ':id',
    component: MoviesDetailPageComponent
  }
] 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule {}