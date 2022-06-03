import { analyzeNgModules } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <hello-world>></hello-world>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'weather-app';
}
