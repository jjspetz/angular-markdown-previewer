import {Injectable} from '@angular/core';

@Injectable()
export class SharedService {
    rawData = '\n# Angular Markdown Previewer\n\n## Marked in browser\nRendered by **marked**.\n';

    insertData(data: string) {
      this.rawData = data;
    }
}
