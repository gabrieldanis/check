import { Component } from '@angular/core';
import { mockTodos } from './mock-list';
import { ListItem } from '../list-item/list-item';

@Component({
  imports: [ListItem],
  selector: 'app-list',
  styleUrl: './list.css',
  templateUrl: './list.html',
})
export class List {
  readonly mockTodos = mockTodos;
}
