import { Component } from '@angular/core';
import marked from 'marked';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})

export class AppComponent {

  display: string;
  onChange(msg) {
    this.display = marked(msg);
  }
}
