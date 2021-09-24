import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[imgSrc]',
})
export class ImgDirective implements OnInit {
  @Input() power: string;
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit(): void {
    this.renderer.setProperty(
      this.el.nativeElement,
      'src',
      `../../assets/images/${this.power}.png`
    );
  }
}
