import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-pipes';

  public product = {
    Name: 'Sansung Tv',
    Price: 45000.5,
    mfd: new Date('2020-03-20'),
  };
}
