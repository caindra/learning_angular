import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

const GIPHY_API_KEY = 'rC3wTuEpqz4jiQfGUXsP0CTwFbbitKP4';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _tagHistory: string[] = [];
  private apiKey: string = GIPHY_API_KEY;
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs';

  constructor(private http: HttpClient) { }

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

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', tag);

    this.http.get(`${this.serviceUrl}/search`, { params })
      .subscribe((resp: any) => {
        console.log(resp.data);
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
