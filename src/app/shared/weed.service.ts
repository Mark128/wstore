import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class WeedService {
  url = 'strainapi.evanbusse.com';
  // tslint:disable-next-line: variable-name
  api_key = 'gCz8uoF';

  constructor(private http: HttpClient) { }

  getAllStrains(): Observable<any> {
    return this.http
    .get('strainapi.evanbusse.com/gCz8uoF/strains/search/all/', httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }

}
