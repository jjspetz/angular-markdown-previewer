import {Component} from '@angular/core';
import marked from 'marked';

@Component({
  selector: 'display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent {

  markdown = marked('# Test')
}
