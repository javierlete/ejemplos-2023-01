import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appMarcador]'
})
export class MarcadorDirective implements OnInit {

  @Input() appMarcador = '';
  @Input() seVe = false;
  elementoDom?: any;

  constructor(private el: ElementRef) {
    this.elementoDom = this.el.nativeElement;
    
    
  }
  
  ngOnInit() {
    if(this.elementoDom.tagName.includes('APP-')) {
      this.elementoDom = this.elementoDom.children[0];
    }
    
    if(this.seVe) {
      this.highlight(this.appMarcador);
    }
    // this.el.nativeElement.innerHTML = 'CLASIFICADO';
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appMarcador);
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }
  
  private highlight(color: string) {
    this.elementoDom.style.backgroundColor = color;
  }
}
