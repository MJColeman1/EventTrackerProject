package com.skilldistillery.gym.services;

import java.util.List;

import com.skilldistillery.gym.entities.LiftTracker;

public interface LiftTrackerService {

	public List<LiftTracker> index();
	
	public LiftTracker findById(int id);
	
	public LiftTracker create(LiftTracker lt);
	
	public LiftTracker update(LiftTracker lt, int id);
	
	public LiftTracker patch(LiftTracker lt, int id);
	
	public boolean delete(int id);
	
}
