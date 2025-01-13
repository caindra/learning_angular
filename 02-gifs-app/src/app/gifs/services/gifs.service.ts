import { Injectable } from '@angular/core';

const GIPHY_API_KEY = 'rC3wTuEpqz4jiQfGUXsP0CTwFbbitKP4';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _tagHistory: string[] = [];
  private apiKey: string = GIPHY_API_KEY;

  constructor() { }

  get tagsHistory(): string[] {
    return [...this._tagHistory];
  }

  private organiseHistory(tag: string){
    tag = tag.toLowerCase();
    if(this._tagHistory.includes(tag)){
      this._tagHistory = this._tagHistory.filter(oldTag => oldTag !== tag);
    }
    this._tagHistory.unshift(tag);
    this._tagHistory = this.tagsHistory.splice(0,10);
  }

  public searchTag(tag: string): void {
    if (tag.length === 0) return;
    this.organiseHistory(tag);
    //console.log(this._tagHistory);
  }

}
