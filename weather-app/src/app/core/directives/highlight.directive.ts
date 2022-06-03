import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
  selector: '[highlight]'
})
export class HighLightDirective {
  _defaultColor: string = '';
  @Input() highlight = '';
  @Input() set defaultColor(value: string) {

    this.elRef.nativeElement.style.backgroundColor = value;
    this._defaultColor = value;
  };

  constructor(private elRef : ElementRef) {
    console.log(elRef.nativeElement)
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.elRef.nativeElement.style.backgroundColor = this.highlight || 'yellow';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.elRef.nativeElement.style.backgroundColor = this._defaultColor;
  }
}
