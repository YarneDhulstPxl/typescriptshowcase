import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'h45-oefening2';
  isHidden = true;
  timestamps = [];

  onClick(): void {
    this.isHidden = !this.isHidden;
    this.timestamps.push(Date.now().toString());
  }
}
