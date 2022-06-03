import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: 'rating',
  template: `
    <button (click)="onSelect.emit(1)" type="button" mat-icon-button>
      <star-icon class="icon"></star-icon>
    </button>
    <button (click)="onSelect.emit(2)" type="button" mat-icon-button>
      <star-icon class="icon"></star-icon>
    </button>
    <button (click)="onSelect.emit(3)" type="button" mat-icon-button>
      <star-icon class="icon"></star-icon>
    </button>
    <button (click)="onSelect.emit(4)" type="button" mat-icon-button>
      <star-icon class="icon"></star-icon>
    </button>
    <button (click)="onSelect.emit(5)" type="button" mat-icon-button>
      <star-icon class="icon"></star-icon>
    </button>
  `
})
export class RatingComponent {
  @Output() onSelect = new EventEmitter();
}