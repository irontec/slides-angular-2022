import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="wrapper">
      <div class="forms">
        <div class="form">
          <h1>REACTIVE FORM</h1>
          <user-reactive-form></user-reactive-form>
        </div>
        <div class="form">
          <h1>TEMPLATE FORM</h1>
          <user-template-form></user-template-form>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'my-first-app';

  foo(value: string) {
    console.log(value);
  }
}
