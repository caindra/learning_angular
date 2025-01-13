import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  standalone: false,

  template: `
    <h5>Search:</h5>
    <input
      type="text"
      class="form-control"
      placeholder="Search a gif..."
      (keyup.enter)="searchTag()"
      #txtTagInput
    />
  `
})
export class SearchBoxComponent {

  // ViewChild: To get a reference to the input element
  // ElementRef: To get the value of the input element
  // txtTagInput: To get the value of the input element
  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService) {}

  searchTag(): void {
    const newTag = this.tagInput.nativeElement.value;
    this.gifsService.searchTag(newTag);
    this.tagInput.nativeElement.value = '';
  }
}
