import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchResponse, Gif } from '../interfaces/gifs';

const GIPHY_API_KEY = 'rC3wTuEpqz4jiQfGUXsP0CTwFbbitKP4';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  public gifList: Gif[] = [];

  private _tagHistory: string[] = [];
  private apiKey: string = GIPHY_API_KEY;
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs';

  constructor(private http: HttpClient) {
    this.loadLocalStorage();
    console.log('Gifs Service Initialized');
   }

  get tagsHistory(): string[] {
    return [...this._tagHistory];
  }

  private saveLocalStorage(): void {
    localStorage.setItem('history', JSON.stringify(this._tagHistory));
  }

  private loadLocalStorage(): void {
    localStorage.getItem('history') && (this._tagHistory = JSON.parse(localStorage.getItem('history')!));
    if (this._tagHistory.length === 0) return;
    this.searchTag(this._tagHistory[0]);
  }

  private organiseHistory(tag: string){
    tag = tag.toLowerCase();
    if(this._tagHistory.includes(tag)){
      this._tagHistory = this._tagHistory.filter(oldTag => oldTag !== tag);
    }
    this._tagHistory.unshift(tag);
    this._tagHistory = this.tagsHistory.splice(0,10);
    this.saveLocalStorage();
  }

  public searchTag(tag: string): void {
    if (tag.length === 0) return;
    this.organiseHistory(tag);

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', tag);

    this.http.get<SearchResponse>(`${this.serviceUrl}/search`, { params })
      .subscribe( resp => {
        this.gifList = resp.data;
        console.log({gifs: this.gifList});
      });

    /**
      // Fetch API
        fetch(`https://api.giphy.com/v1/gifs/search?api_key=${this.apiKey}&q=${tag}&limit=10`)
          .then(response => response.json())
          .then(data => console.log(data.data));
    */

    /**
      * Using async/await
      *

        async searchTag(tag: string): Promise<void> {
          if (tag.length === 0) return;
          this.organiseHistory(tag);

          const resp = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${this.apiKey}&q=${tag}&limit=10`);
          const data = await resp.json();
          console.log(data);
        }
    */
  }

}
