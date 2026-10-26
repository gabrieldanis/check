import { Component } from '@angular/core';
import { input } from '@angular/core';
import { Todo } from '../check-list/check-list.types';
import { IconComponent } from '../../shared/components/icon/icon';


@Component({
  imports: [IconComponent],
  selector: 'app-check-list-item',
  styleUrl: './check-list-item.css',
  templateUrl: './check-list-item.html',
})
export class CheckListItem {
 readonly itemData = input.required<Todo>();
}
