import { Component } from '@angular/core';
import { input } from '@angular/core';
import { TodoItem } from '../list/list.types';
import { IconComponent } from '../../shared/components/icon/icon';


@Component({
  imports: [IconComponent],
  selector: 'app-list-item',
  styleUrl: './list-item.css',
  templateUrl: './list-item.html',
})
export class ListItem {
 readonly itemData = input.required<TodoItem>();
}
