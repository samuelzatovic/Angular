import { from } from 'rxjs';
import {Item} from "./item";
export interface Hero {
    id: number;
    name: string;
    items: Item[];
  }