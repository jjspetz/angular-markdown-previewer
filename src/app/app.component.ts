import { Component } from '@angular/core';
import {SharedService} from './shared.service';
import marked from 'marked';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})

export class AppComponent {

  display: string;

  constructor(private _sharedService: SharedService) { }
  ngOnInit():any {
      this.display = marked(this._sharedService.rawData);
  }
  onChange(msg) {
    this.display = marked(msg);
  }
}
