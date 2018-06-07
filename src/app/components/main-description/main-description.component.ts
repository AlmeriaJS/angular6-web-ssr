import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-description',
  templateUrl: './main-description.component.html',
  styleUrls: ['./main-description.component.sass']
})
export class MainDescriptionComponent {
  @Input() name;
  @Input() mainDescription;
  @Input() position;
  @Input() socialLinks;

  constructor() {}
}
