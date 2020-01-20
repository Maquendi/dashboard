import { Component, OnInit, Input, OnChanges, SimpleChanges, AfterViewInit } from '@angular/core';
import { IChart } from '../../model/interfaces/charts';
import * as Muuri from 'muuri';
import { PodService } from '../../model/services/pod.service';
import { VzPod } from '../../model/classes/implementations/BasicBarChart';

@Component({
  selector: 'pod-container',
  templateUrl: './pod-container.component.html',
  styleUrls: ['./pod-container.component.scss']
})
export class PodContainerComponent implements OnInit, AfterViewInit {

  constructor(private podService: PodService) { }

  @Input('pods2Render') pods2Render$: VzPod[];

  ngOnInit() { }

  ngAfterViewInit(): void {
    this.initGrid();
  
  }


  initGrid() {
    console.log('initGrid called..')
    let grid = new Muuri('.grid', {
      dragEnabled: true,
      layoutOnInit: false
    }).on('move', () => {
     // this.saveLayout(grid);
    });
  
    let layout = window.localStorage.getItem('layout');
    if (layout) {
     // this.loadLayout(grid, layout);
    } else {
      grid.layout(true);
    }
  }
  
  serializeLayout(grid) {
    let itemIds = grid.getItems().map( (item)=> {
      return item.getElement().getAttribute('data-id');
    });
    return JSON.stringify(itemIds);
  }
  
  saveLayout(grid) {
    let layout = this.serializeLayout(grid);
    window.localStorage.setItem('layout', layout);
  }
  
  loadLayout(grid, serializedLayout) {
    let layout = JSON.parse(serializedLayout);
    let currentItems = grid.getItems();
    let currentItemIds = currentItems.map( (item)=>{
      return item.getElement().getAttribute('data-id')
    });
    let newItems = [];
    let itemId;
    let itemIndex;
  
    for (let i = 0; i < layout.length; i++) {
      itemId = layout[i];
      itemIndex = currentItemIds.indexOf(itemId);
      if (itemIndex > -1) {
        newItems.push(currentItems[itemIndex])
      }
    }
  
    grid.sort(newItems, {layout: 'instant'});
  }

}
