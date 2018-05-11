package com.skilldistillery.gym.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.gym.entities.LiftTracker;
import com.skilldistillery.gym.repositories.LiftTrackerRepository;

@Service
public class LiftTrackerServiceImpl implements LiftTrackerService {
	
	@Autowired
	private LiftTrackerRepository repo;

	@Override
	public List<LiftTracker> index() {
		return repo.findAll();
	}

	@Override
	public LiftTracker findById(int id) {
		return repo.findById(id).get();
	}

	@Override
	public LiftTracker create(LiftTracker lt) {
		return repo.saveAndFlush(lt);
	}

	@Override
	public LiftTracker update(LiftTracker lt, int id) {
		LiftTracker managed = repo.findById(id).get();
		managed.setDate(lt.getDate());
		managed.setTimeIn(lt.getTimeIn());
		managed.setTimeOut(lt.getTimeOut());
		managed.setMilesRan(lt.getMilesRan());
		managed.setMovements(lt.getMovements());
		managed.setMuscleGroup(lt.getMuscleGroup());
		managed.setReps(lt.getReps());
		managed.setPersonalRecordsSet(lt.getPersonalRecordsSet());
		
		
		
		return repo.saveAndFlush(managed);
	}

	@Override
	public boolean delete(int id) {
		try {
			repo.deleteById(id);
			return true;
		}
		catch (Exception e) {
			e.printStackTrace();
		}
		return false;
	}

	@Override
	public LiftTracker patch(LiftTracker lt, int id) {
		LiftTracker managed = repo.findById(id).get();
		if (lt.getTimeIn() != null && !lt.getTimeIn().equals("")) {
			managed.setTimeIn(lt.getTimeIn());
		}
		if (lt.getTimeOut() != null && !lt.getTimeOut().equals("")) {
			managed.setTimeOut(lt.getTimeOut());
		}
		if (lt.getDate() != null && !lt.getDate().equals("")) {
			managed.setDate(lt.getDate());
		}
		if (lt.getReps() >= 0) {
			managed.setReps(lt.getReps());
		}
		if (lt.getMovements() >= 0) {
			managed.setMovements(lt.getMovements());
		}
		if (lt.getMilesRan() >= 0) {
			managed.setMilesRan(lt.getMilesRan());
		}
		if (lt.getMuscleGroup() != null && !lt.getMuscleGroup().equals("")) {
			managed.setMuscleGroup(lt.getMuscleGroup());
		}
		if (lt.getPersonalRecordsSet() != null && !lt.getPersonalRecordsSet().equals("")) {
			managed.setPersonalRecordsSet(lt.getPersonalRecordsSet());
		}
		return repo.saveAndFlush(managed);
	}

	
	
}
