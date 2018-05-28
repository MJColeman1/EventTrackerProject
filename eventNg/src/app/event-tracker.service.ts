import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpHeaders} from '@angular/common/http';
import { LiftTracker } from './models/lift-tracker';

@Injectable({
  providedIn: 'root'
})
export class EventTrackerService {

  url = 'http://localhost:8080/api/lifts';

  // Function to get all workouts
  index() {
    return this.http.get<LiftTracker[]>(this.url)
    .pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('KABOOM EROR IN INDEX SERVICE');
      })
    );
  }

  // Function to create a workout
  create(lift) {
    return this.http.post<LiftTracker>(this.url, lift)
    .pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('KABOOM ERROR IN CREATE SERVICE');
      })
    );
  }
  // Function to update a workout
  update (id: number, lift: LiftTracker) {
    return this.http.put<LiftTracker>(this.url + '/' + id, lift)
    .pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('KABOOM IN UPDATE SERVICE');
      })
    );
  }

  // Function to delete a workout
  destroy(id) {
    return this.http.delete<LiftTracker>(this.url + '/' + id)
    .pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('KABOOM IN DELETE SERVICE');
      })
    );
  }

  constructor(private http: HttpClient) { }
}
