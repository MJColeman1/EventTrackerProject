export class LiftTracker {
  id: number;
  timeIn: string;
  timeOut: string;
  muscleGroup: string;
  reps: number;
  movements: number;
  date: string;
  personalRecordsSet: string;
  milesRan: number;


  constructor(id?: number, timeIn?: string, timeOut?: string, muscleGroup?: string, reps?: number,
  movements?: number, date?: string, personalRecordsSet?: string, milesRan?: number) {
    this.id = id;
    this.timeIn = timeIn;
    this.timeOut = timeOut;
    this.muscleGroup = muscleGroup;
    this.reps = reps;
    this.movements = movements;
    this.date = date;
    this.personalRecordsSet = personalRecordsSet;
    this.milesRan = milesRan;
  }
}
