import { Component } from '@angular/core';
import { InputComponent } from './input/input.component';
import marked from 'marked';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  markdown = marked('# Angular Markdown Previewer\n\n\
  ## Marked in browser\n\nRendered by **marked**.')
}
