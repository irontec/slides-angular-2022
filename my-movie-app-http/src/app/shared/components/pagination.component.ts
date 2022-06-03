import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: 'pagination',
  template: `
    <button
      mat-fab
      color="primary"
      [disabled]="currentPage === 1"
      (click)="handlePrev()">
      <prev-icon class="icon"></prev-icon>
    </button>
    <span class="current-page">Página {{currentPage}} de {{totalPages}}</span>
    <button 
      mat-fab 
      color="primary"
      [disabled]="currentPage === totalPages"
      (click)="handleNext()">
      <next-icon class="icon"></next-icon>
    </button>
  `,
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  @Input() currentPage = 1;
  @Input() totalPages? : number;

  @Output() onPrev = new EventEmitter();
  @Output() onNext = new EventEmitter();

  handlePrev() {
    this.currentPage = this.currentPage - 1;
    this.onPrev.emit(this.currentPage);
  }

  handleNext() {
    this.currentPage = this.currentPage + 1;
    this.onNext.emit(this.currentPage);
  }
}