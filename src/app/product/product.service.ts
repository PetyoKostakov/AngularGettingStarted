import { Injectable } from '@angular/core';
import { IProduct } from './product';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private _productsUrl = '/assets/data/products.json';

  constructor(private _http: HttpClient) { }

  getProducts(): Observable<IProduct[]> {
    return this._http.get<IProduct[]>(this._productsUrl).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this._handleError)
    );
  }

  private _handleError(errorMessage: HttpErrorResponse) {
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
