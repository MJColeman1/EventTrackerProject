	package com.skilldistillery.gym.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "lift_tracker")
public class LiftTracker {

	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(name = "time_in")
	private String timeIn;
	
	@Column(name = "time_out")
	private String timeOut;
	
	@Column(name = "muscle_group")
	private String muscleGroup;
	
	private int reps;
	
	private int movements;
	
	private String date;
	
	@Column (name = "personal_records_set")
	private String personalRecordsSet;
	
	@Column(name = "miles_ran")
	private double milesRan;
	
	public LiftTracker() {}

	public LiftTracker(int id, String timeIn, String timeOut, String muscleGroup, int reps, int movements, String date,
			String personalRecordsSet, double milesRan) {
		super();
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

	public String getTimeIn() {
		return timeIn;
	}

	public void setTimeIn(String timeIn) {
		this.timeIn = timeIn;
	}

	public String getTimeOut() {
		return timeOut;
	}

	public void setTimeOut(String timeOut) {
		this.timeOut = timeOut;
	}

	public String getMuscleGroup() {
		return muscleGroup;
	}

	public void setMuscleGroup(String muscleGroup) {
		this.muscleGroup = muscleGroup;
	}

	public int getReps() {
		return reps;
	}

	public void setReps(int reps) {
		this.reps = reps;
	}

	public int getMovements() {
		return movements;
	}

	public void setMovements(int movements) {
		this.movements = movements;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public String getPersonalRecordsSet() {
		return personalRecordsSet;
	}

	public void setPersonalRecordsSet(String personalRecordsSet) {
		this.personalRecordsSet = personalRecordsSet;
	}

	public double getMilesRan() {
		return milesRan;
	}

	public void setMilesRan(double milesRan) {
		this.milesRan = milesRan;
	}

	public int getId() {
		return id;
	}

	@Override
	public String toString() {
		return "LiftTracker [id=" + id + ", timeIn=" + timeIn + ", timeOut=" + timeOut + ", muscleGroup=" + muscleGroup
				+ ", reps=" + reps + ", movements=" + movements + ", date=" + date + ", personalRecordsSet="
				+ personalRecordsSet + ", milesRan=" + milesRan + "]";
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((date == null) ? 0 : date.hashCode());
		result = prime * result + id;
		long temp;
		temp = Double.doubleToLongBits(milesRan);
		result = prime * result + (int) (temp ^ (temp >>> 32));
		result = prime * result + movements;
		result = prime * result + ((muscleGroup == null) ? 0 : muscleGroup.hashCode());
		result = prime * result + ((personalRecordsSet == null) ? 0 : personalRecordsSet.hashCode());
		result = prime * result + reps;
		result = prime * result + ((timeIn == null) ? 0 : timeIn.hashCode());
		result = prime * result + ((timeOut == null) ? 0 : timeOut.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		LiftTracker other = (LiftTracker) obj;
		if (date == null) {
			if (other.date != null)
				return false;
		} else if (!date.equals(other.date))
			return false;
		if (id != other.id)
			return false;
		if (Double.doubleToLongBits(milesRan) != Double.doubleToLongBits(other.milesRan))
			return false;
		if (movements != other.movements)
			return false;
		if (muscleGroup == null) {
			if (other.muscleGroup != null)
				return false;
		} else if (!muscleGroup.equals(other.muscleGroup))
			return false;
		if (personalRecordsSet == null) {
			if (other.personalRecordsSet != null)
				return false;
		} else if (!personalRecordsSet.equals(other.personalRecordsSet))
			return false;
		if (reps != other.reps)
			return false;
		if (timeIn == null) {
			if (other.timeIn != null)
				return false;
		} else if (!timeIn.equals(other.timeIn))
			return false;
		if (timeOut == null) {
			if (other.timeOut != null)
				return false;
		} else if (!timeOut.equals(other.timeOut))
			return false;
		return true;
	}
	
	
	
}
