import { Component } from '@angular/core';

@Component({
  selector: 'input-root',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  rawData = `
  # Angular Markdown Previewer

  ## Marked in browser
  Rendered by **marked**.
  `;
}
