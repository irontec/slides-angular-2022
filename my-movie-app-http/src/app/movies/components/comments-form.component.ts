import { Component, EventEmitter, Output } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";



@Component({
  selector: 'comments-form',
  template: `
    <form [formGroup]="commentsForm" (ngSubmit)="handleSubmit()">
      <div>
        <mat-form-field appearance="fill">
          <mat-label>Nombre</mat-label>
          <input matInput formControlName="name">
          <mat-error>Este campo es requerido</mat-error>
        </mat-form-field>
      </div>
      <div>
        <mat-form-field appearance="fill">
          <mat-label>Género</mat-label>
          <mat-select formControlName="genre">
            <mat-option value="Ciencia ficción">Ciencia ficción</mat-option>
            <mat-option value="Drama">Drama</mat-option>
            <mat-option value="Acción">Acción</mat-option>
          </mat-select>
        </mat-form-field>
      </div>
      <div>
        <mat-form-field appearance="fill">
          <mat-label>Mensaje</mat-label>
          <textarea matInput formControlName="message"></textarea>
          <mat-error>Este campo es requerido</mat-error>
        </mat-form-field>
      </div>
      <div>
        <rating (onSelect)="handleRatingSelection($event)"></rating> <span>{{commentsForm.get('vote')?.value}}/5</span>
      </div>
      <button [disabled]="!commentsForm.valid" mat-raised-button color="accent">Enviar valoración</button>
    </form>
  `
})
export class CommentsForm {
  @Output() onSubmit = new EventEmitter();

  commentsForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    genre: new FormControl(''),
    message: new FormControl('', [Validators.required]),
    vote: new FormControl(0, [Validators.required])
  })

  handleRatingSelection(value: number) {
    this.commentsForm.patchValue({
      vote: value
    })
  }

  handleSubmit() {
    this.onSubmit.emit(this.commentsForm.value);
  }
}