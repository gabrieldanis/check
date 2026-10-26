import { Component } from '@angular/core';
import { mockTodos } from './mock-list';
import { CheckListItem } from '../check-list-item/check-list-item';
import {CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  imports: [CheckListItem, CdkDropList, CdkDrag],
  selector: 'app-check-list',
  styleUrl: './check-list.css',
  templateUrl: './check-list.html',
})
export class CheckList {
  todos = [...mockTodos];

  drop(event: CdkDragDrop<string[]>) {
    console.log('previousIndex:', event.previousIndex, 'currentIndex:', event.currentIndex);
    moveItemInArray(this.todos, event.previousIndex, event.currentIndex);
  }}
