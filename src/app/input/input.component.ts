import {Component, OnInit} from '@angular/core';
import {SharedService} from '../shared.service';

@Component({
  selector: 'input-root',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})

export class InputComponent implements OnInit {

  data: string;
  constructor(private _sharedService: SharedService) { }
  ngOnInit():any {
      this.data = this._sharedService.rawData;
  }

}
