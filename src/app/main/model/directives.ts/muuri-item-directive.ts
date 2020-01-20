import { Directive, ElementRef, Host, OnInit } from '@angular/core';
import { MuuriGridDirective } from './murri-directive';

@Directive({
    selector: '[muuriGridItem]'
})
export class MuuriGridItemDirective implements OnInit {
    constructor(@Host() private muuriGrid: MuuriGridDirective, private elRef: ElementRef) {}

    ngOnInit(): void {
        this.muuriGrid.addItem(this.elRef.nativeElement);
    }
}