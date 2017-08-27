import {Component, Output, EventEmitter} from '@angular/core';
import {SharedService} from '../shared.service';

@Component({
  selector: 'input-root',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})

export class InputComponent{

  @Output() change = new EventEmitter;
  data: string;

  constructor(private _sharedService: SharedService) { }
  ngOnInit():any {
      this.data = this._sharedService.rawData;
  }

  inputChange(event: any) {
    this.data = event.target.value;
    this.change.emit(this.data);
  }
}
