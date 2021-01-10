import { Item } from './../Item';
import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})

export class ItemsComponent implements OnInit {

  items: Item[];
  selectedItem: Item;
  
  constructor(private itemService:ItemService) { }

  ngOnInit() {
    this.getItems();
  }

  onSelect(item: Item): void {
    this.selectedItem = item;
    }

  getItems(): void {
    this.itemService.getItems().subscribe(items => this.items = items);
  }
}