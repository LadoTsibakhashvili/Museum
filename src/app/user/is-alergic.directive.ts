import { Directive, ElementRef, inject, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[isAlergic]',
  standalone: true
})
export class IsAlergicDirective implements OnInit {
  @Input() isAlergic!: boolean;
  elementRef = inject(ElementRef);

  ngOnInit(): void {
    if (this.isAlergic) {
      this.elementRef.nativeElement.style.backgroundColor = 'red';
    } else {
      this.elementRef.nativeElement.style.backgroundColor = 'green';
    }
  }
}
