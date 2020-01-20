import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MuuriContainerComponent } from '../components/muuri-container/muuri-container.component';

@NgModule({
  declarations: [
    MuuriContainerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MuuriContainerComponent
  ]
})
export class MuuriWrapperModule { }
