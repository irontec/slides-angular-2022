import { analyzeNgModules } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <hello-world>></hello-world>
    colores {{colours | json}}
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'weather-app';

  colours = {
    1: 'azul',
    2: 'verde'
  }

  foo(value: string) {
    console.log(value);
  }
}
