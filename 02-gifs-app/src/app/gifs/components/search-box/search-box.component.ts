import { Component } from '@angular/core';

@Component({
  selector: 'gifs-search-box',
  standalone: false,

  template: `
    <h5>Search:</h5>
    <input
      type="text"
      class="form-control"
      placeholder="Search a gif..."
    />
  `
})
export class SearchBoxComponent {

}
