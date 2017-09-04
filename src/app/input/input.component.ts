import {Component, Output, EventEmitter} from '@angular/core';
import {SharedService} from '../shared.service';
import * as FileSaver from 'file-saver';

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

  download() {
    let name = (<HTMLInputElement>document.getElementById("fileName")).value;
    let blob = new Blob([this.data], {
              type: "text/plain;charset=utf-8"
          });

    if (name) {
      name = name + ".md";
    } else {
      name = "README.md";
    }
    FileSaver.saveAs(blob, name);
  }
}
