import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {catchError, Observable, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private url = " "

  constructor(private http: HttpClient) {
    this.url = environment.url.endpoint;
  }


  fetchData(path: string) {
    return this.http.get(this.url + path, {
      responseType: 'text'
    })
  }

  private handleHttpError(error: HttpErrorResponse) {
    if (error.status !== 200) {
      // Handle non-200 status errors
      console.error(`Error ${error.status}: ${error.statusText}`);
      return throwError(new Error(`Error ${error.status}: ${error.statusText}`));
    } else {
      // Handle other errors (this block may not be needed if you're only concerned with HTTP status codes)
      return this.handleError(error);
    }
  }

  private handleError(error: any) {
    // Generic error handling logic
    console.error('An error occurred:', error);
    return throwError(new Error('Something went wrong; please try again later.'));
  }

}
