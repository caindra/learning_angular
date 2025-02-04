import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, delay, map, Observable, of } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) { }

  private getCountriesRequest(url: string): Observable<Country[]> {
    return this.http.get<Country[]>(url)
    .pipe(
      catchError(error => of([])),
      delay(2000),
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
    return this.getCountriesRequest(url);
  }

  searchCountry(queryString: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${queryString}`;
    return this.getCountriesRequest(url);
  }

  searchRegion(queryString: string): Observable<Country[]> {
    const url = `${this.apiUrl}/region/${queryString}`;
    return this.getCountriesRequest(url);
  }
}
