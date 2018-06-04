import { Component } from '@angular/core';
import { MyDataService } from './my-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  constructor(private myDataService: MyDataService) {}
  data;

  ngOnInit() {
    this.data = this.myDataService.getData();
  }
}
