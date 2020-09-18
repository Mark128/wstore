import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Session } from '../shared/session';
import { HTTP } from '@ionic-native/http/ngx';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class SessionService {
  url = 'http://127.0.0.1:8000/api';
  allSessions = [];
  constructor(private http: HttpClient) { }

   // Get students data
   getSessionList(): Observable<Session> {
    return this.http
      .get<Session>(`${this.url}/session-list`)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  getSession(id: number): Observable<Session> {
    return this.http
      .get<Session>(this.url + '/session-detail/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  createSession(s: Session): Observable<Session> {
    console.log('inside' + s);
    return this.http
    .post<Session>(this.url + '/create-session/', JSON.stringify(s), httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  // Update item by id
  updateSession(id: any, session: Session): Observable<Session> {
    return this.http
      .put<Session>(`${this.url}/update-session/${id}/`, JSON.stringify(session), httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  // Delete item by id
  deleteSession(id: any) {
    console.log('deleting ' + id);
    return this.http
      .delete(`${this.url}/delete-session/${id}/`, httpOptions)
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
