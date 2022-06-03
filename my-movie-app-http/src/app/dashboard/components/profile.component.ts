import { Component } from "@angular/core";
import { Profile } from "../models/profile.model";
import { ProfileService } from "../services/profile.service";

@Component({
  selector: 'profile',
  template: `
    <ng-container *ngIf="profile">
      <figure>
        <img [src]="profile.picture" alt=""/>
      </figure>
      <div>
        <header>
          <h2>{{profile.firstname}} {{profile.lastname}}</h2>
          <a [href]="'mailto:' + profile.email">{{profile.email}}</a>
          
          <p *ngIf="!showMore; else descriptionComplete">{{text | trunc : 100}}</p>
          <ng-template #descriptionComplete>
            <p>{{text}}</p>
          </ng-template>

          <button mat-button (click)="toggleShowMore()">Ver más</button>
          
        </header>
        <div>
          <h3>Tus géneros favoritos</h3>
          <mat-chip-list>
            <mat-chip color="primary" selected>Thriller</mat-chip>
            <mat-chip>Acción</mat-chip>
            <mat-chip>Comedia</mat-chip>
          </mat-chip-list>
        </div>
      </div>
    </ng-container>
  `,
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  profile?: Profile;

  text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

  showMore: boolean = false;

  constructor(profile: ProfileService) {
    profile.getProfile()
      .then((res: any) => {
        this.profile = res;
      })
  }

  toggleShowMore() {
    this.showMore = !this.showMore;
  }
}