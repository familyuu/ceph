import { Component, Input } from '@angular/core';

import { Description } from './info-card-description.enum';
@Component({
  selector: 'cd-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss']
})
export class InfoCardComponent {
  @Input()
  cardTitle: string;
  @Input()
  link: string;
  @Input()
  cardClass = '';
  @Input()
  contentClass: string;
  @Input()
  descriptionIndex: string;

  description = Description;
}
