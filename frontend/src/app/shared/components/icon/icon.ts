import { Component } from '@angular/core';
import { LucideDynamicIcon } from '@lucide/angular';
import { input } from '@angular/core';
import { Icon } from './icon.types';

@Component({
  imports: [LucideDynamicIcon],
  selector: 'app-icon',
  styleUrl: './icon.css',
  templateUrl: './icon.html',
})
export class IconComponent {
  readonly icon = input.required<Icon>();
}

