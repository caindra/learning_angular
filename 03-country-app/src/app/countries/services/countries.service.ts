import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) { }

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
    return this.http.get<Country[]>(url)
    .pipe(
      catchError(error => of([]))
    );
  }

  searchCountry(queryString: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${queryString}`;
    return this.http.get<Country[]>(url)
    .pipe(
      catchError(error => of([]))
    );
  }

  searchRegion(queryString: string): Observable<Country[]> {
    const url = `${this.apiUrl}/region/${queryString}`;
    return this.http.get<Country[]>(url)
    .pipe(
      catchError(error => of([]))
    );
  }
}
