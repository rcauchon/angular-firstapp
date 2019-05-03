import {Directive, ElementRef, Input, Renderer2} from '@angular/core';

@Directive({
    selector: '[appMyMatrixGreenText]'
})

export class MatrixGreenTextDirective {
    constructor(el: ElementRef, renderer: Renderer2){
        renderer.setStyle(el.nativeElement, 'color', 'green');
        renderer.setStyle(el.nativeElement, 'background-color', 'orange');
    }
}
