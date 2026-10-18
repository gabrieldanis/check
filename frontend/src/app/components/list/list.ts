import { Component } from '@angular/core';
import { mockTodos } from './mock-list';
import { ListItem } from '../list-item/list-item';
import {CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  imports: [ListItem, CdkDropList, CdkDrag],
  selector: 'app-list',
  styleUrl: './list.css',
  templateUrl: './list.html',
})
export class List {
  todos = [...mockTodos];

  drop(event: CdkDragDrop<string[]>) {
    console.log('previousIndex:', event.previousIndex, 'currentIndex:', event.currentIndex);
    moveItemInArray(this.todos, event.previousIndex, event.currentIndex);
  }}
