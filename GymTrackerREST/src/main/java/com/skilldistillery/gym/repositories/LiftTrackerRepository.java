package com.skilldistillery.gym.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.gym.entities.LiftTracker;

public interface LiftTrackerRepository extends JpaRepository<LiftTracker, Integer> {

	
}
