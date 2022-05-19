import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { TruncatePipe } from "./pipes/trunc.pipe";
import { PaginationComponent } from "./components/pagination.component";
import { NextIcon } from "./icons/next.icon";
import { PrevIcon } from "./icons/prev.icon";
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSelectModule} from '@angular/material/select';
import { StarIcon } from "./icons/star.icon";


@NgModule({
  declarations: [
    TruncatePipe,
    PaginationComponent,
    NextIcon,
    PrevIcon,
    StarIcon
  ],
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatSelectModule
  ],
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
    MatCardModule,
    TruncatePipe,
    PaginationComponent,
    MatProgressSpinnerModule,
    MatSelectModule,
    StarIcon
  ]
})
export class SharedModule {}