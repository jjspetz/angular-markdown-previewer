import {Component, OnInit} from '@angular/core';
import {SharedService} from '../shared.service';
import marked from 'marked';

@Component({
  selector: 'display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

    data: string;
    constructor(private _sharedService: SharedService) { }
    ngOnInit():any {
        this.data = marked(this._sharedService.rawData);
    }
}
