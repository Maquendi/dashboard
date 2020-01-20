import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IChart } from '../../model/interfaces/charts';


@Component({
  selector: 'pod-configurer',
  templateUrl: './pod-configurer.component.html',
  styleUrls: ['./pod-configurer.component.css']
})
export class PodConfigurerComponent implements OnInit {

  constructor() { }

  @Input() options: IChart[];

  @Output() oncompleted = new EventEmitter<IChart>();

  selectedOption: IChart;

  ngOnInit() {}

  onChange($event){
    console.log(this.selectedOption);
  }

  onApply($event) {
    this.oncompleted.emit(this.selectedOption);
  }

}
