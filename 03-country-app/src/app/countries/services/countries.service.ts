import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, tap, map, Observable, of } from 'rxjs';
import { Country } from '../interfaces/country';
import { CacheStore } from '../interfaces/cache-store.interface';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  private apiUrl: string = 'https://restcountries.com/v3.1';

  public cacheStore: CacheStore = {
    byCapital: {term: '', countries: []},
    byCountries: {term: '', countries: []},
    byRegion: {region: '', countries: []},
  }

  constructor(private http: HttpClient) {
    this.loadFromLocalStorage();
  }

  private saveToLocalStorage(): void{
    localStorage.setItem('cacheStore', JSON.stringify(this.cacheStore));
  }

  private loadFromLocalStorage(): void{
    if (!localStorage.getItem('cacheStore')) return;
    this.cacheStore = JSON.parse(localStorage.getItem('cacheStore') || '{}');
  }

  private getCountriesRequest(url: string): Observable<Country[]> {
    return this.http.get<Country[]>(url)
    .pipe(
      catchError(error => of([])),
    );
  }

  searchCountryByAlphaCode(code: string): Observable<Country | null> {
    const url = `${this.apiUrl}/alpha/${code}`;
    return this.http.get<Country[]>(url)
      .pipe(
        map(countries => countries.length > 0 ? countries[0] : null),
        catchError(error => of(null))
      );
  }

  searchCapital(queryString: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${queryString}`;
    return this.getCountriesRequest(url)
    .pipe(
      tap(countries => {
        this.cacheStore.byCapital = {term: queryString, countries: countries};
      }),
      tap(() => this.saveToLocalStorage()),
    );
  }

  searchCountry(queryString: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${queryString}`;
    return this.getCountriesRequest(url)
    .pipe(
      tap(countries => {
        this.cacheStore.byCapital = {term: queryString, countries: countries};
      })
    );
  }

  searchRegion(queryString: string): Observable<Country[]> {
    const url = `${this.apiUrl}/region/${queryString}`;
    return this.getCountriesRequest(url)
    .pipe(
      tap(countries => {
        this.cacheStore.byCapital = {term: queryString, countries: countries};
      })
    );
  }
}
