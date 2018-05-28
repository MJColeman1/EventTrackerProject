import { Component, OnInit } from '@angular/core';
import { generate } from 'rxjs';
import { EventTrackerService } from '../event-tracker.service';
import { LiftTracker } from '../models/lift-tracker';

@Component({
  selector: 'app-event-tracker',
  templateUrl: './event-tracker.component.html',
  styleUrls: ['./event-tracker.component.css']
})
export class EventTrackerComponent implements OnInit {

  lifts = [];

  liftTracker = new LiftTracker();

  selected = null;

  editLift = null;

  // End of Fields


  displayLift(lift) {
    this.selected = lift;
  }

  displayTable() {
    return this.selected = null;
  }

  setEditLift() {
    this.editLift = Object.assign({}, this.selected);
  }

  reload() {
  return this.service.index().subscribe(
    data => this.lifts = data,

    error => console.log(error)
  );
  }

  addLift() {
    return this.service.create(this.liftTracker).subscribe(
      data => {
        this.liftTracker = new LiftTracker();
        this.reload();
      },
      error => console.log('KABOOM ERROR IN CREATE COMPONENT'));
  }

  updateLift(id: number, lift: LiftTracker) {
    this.service.update(id, lift).subscribe(
      data => {
     this.reload();
      },
      error => console.log('KABOOM ERROR IN UPDATE COMPONENT'));
      this.selected = null;
      this.editLift = null;

  }

  deleteLift(id: number) {
    return this.service.destroy(id).subscribe(
      data => {
        this.reload();
      },
      error => console.log('KABOOM ERROR IN DELETE COMPONENT'));
  }


  constructor(private service: EventTrackerService) { }

  ngOnInit() {
    this.reload();
  }

}
