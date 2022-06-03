import { Component } from "@angular/core";

@Component({
  selector: 'menu',
  template: `
    <nav class="wrapper">
      <button routerLink="/" mat-stroked-button>Dashboard</button>
      <button routerLink="/movies" mat-stroked-button>Peliculas</button>
    </nav>
  `,
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

}