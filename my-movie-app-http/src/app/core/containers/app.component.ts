import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <menu></menu>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-first-app';

  foo(value: string) {
    console.log(value);
  }
}
