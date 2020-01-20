import { Component, OnInit, Input } from '@angular/core';
import * as Muuri from 'muuri';

@Component({
  selector: 'muuri-container',
  templateUrl: './muuri-container.component.html',
  styleUrls: ['./muuri-container.component.scss']
})
export class MuuriContainerComponent implements OnInit {

  @Input() items: any[] = [];

  constructor() { }

  ngOnInit() {
    this.items.map(item => {
      item
    })
  }


   initGrid() {
    let grid = new Muuri('.grid', {
      dragEnabled: true,
      layoutOnInit: false
    }).on('move', () => {
      this.saveLayout(grid);
    });
  
    let layout = window.localStorage.getItem('layout');
    if (layout) {
      this.loadLayout(grid, layout);
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
