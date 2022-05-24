import { Component } from '@angular/core';
import { Data } from '../data';

export interface FormModel {
  name: string;
  email: string;
  age: number;
  skills: string[];
  message: string;
}

@Component({
  selector: 'user-template-form',
  template: `
    <form #myDataForm="ngForm" (ngSubmit)="onSubmit()">
      <div *ngIf="!submitted">
        <div>
          <mat-form-field appearance="fill">
            <mat-label>Name</mat-label>
            <input
              matInput
              type="text"
              class="form-control"
              id="name"
              name="name"
              [(ngModel)]="model.name"
              #name="ngModel"
            />
            <mat-error>El campo es requerido</mat-error>
          </mat-form-field>
        </div>
        <div>
          <mat-form-field appearance="fill">
            <mat-label>Email</mat-label>
            <input
              matInput
              required
              type="email"
              class="form-control"
              id="email"
              name="email"
              [(ngModel)]="model.email"
              #email="ngModel"
            />
            <mat-error></mat-error>
          </mat-form-field>
        </div>
        <div>
          <mat-form-field appearance="fill">
            <mat-label>Age</mat-label>
            <input
              matInput
              type="number"
              class="form-control"
              id="age"
              name="age"
              [(ngModel)]="model.age"
              #age="ngModel"
            />
          </mat-form-field>
        </div>
        <div>
          <mat-form-field appearance="fill">
            <mat-label>Skills</mat-label>
            <mat-select name="skills" ngModel>
              <mat-option [value]="'Angular'">Angular</mat-option>
              <mat-option [value]="'React'">React</mat-option>
              <mat-option [value]="'Vue'">Vue</mat-option>
            </mat-select>
          </mat-form-field>
        </div>
        <div>
          <mat-form-field appearance="fill">
            <mat-label>Message</mat-label>
            <textarea
              cdkTextareaAutosize
              matInput
              class="form-control"
              id="message"
              name="message"
              [(ngModel)]="model.message"
              #message="ngModel"
            ></textarea>
          </mat-form-field>
        </div>
        <button
          [disabled]="!myDataForm.form.valid"
          type="submit"
          mat-raised-button
          color="primary"
        >
          Enviar
        </button>
      </div>
      <div *ngIf="submitted">
        <h2>Datos enviados</h2>
        <div class="row">
          <mat-label class="col-xs-3">Name</mat-label>
          <p class="col-xs-9">{{ model.name }}</p>
        </div>
        <div class="row">
          <mat-label class="col-xs-3">Email</mat-label>
          <p class="col-xs-9">{{ model.email }}</p>
        </div>
        <div class="row">
          <mat-label class="col-xs-3">Age</mat-label>
          <p class="col-xs-9">{{ model.age }}</p>
        </div>
        <div class="row">
          <mat-label class="col-xs-3">Skills</mat-label>
          <p class="col-xs-9">{{ model.skills }}</p>
        </div>
        <div class="row">
          <mat-label class="col-xs-3">Skills</mat-label>
          <p class="col-xs-9">{{ model.message }}</p>
        </div>
        <br />
        <button
          type="button"
          class="btn btn-primary"
          (click)="reset(); myDataForm.reset()"
        >
          Editar formulario
        </button>
      </div>
    </form>
  `,
})
export class UserTemplateFormComponent {
  onSubmit() {
    this.submitted = true;
    console.log(this.model);
  }

  reset() {
    this.submitted = false;
    this.model = new Data('', '', 0, [], '');
  }

  submitted: boolean = false;

  model: FormModel = new Data('', '', 0, [], '');
}
