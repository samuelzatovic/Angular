import { Item } from './Item';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { ITEMS} from './mock-items';
@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }

  getItems(): Observable<Item[]>{
return of(ITEMS); 
  }
}
