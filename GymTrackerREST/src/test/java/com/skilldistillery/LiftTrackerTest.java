package com.skilldistillery;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.skilldistillery.gym.entities.LiftTracker;
import com.skilldistillery.gym.repositories.LiftTrackerRepository;

@RunWith(SpringRunner.class)
@SpringBootTest
public class LiftTrackerTest {

	@Autowired
	private LiftTrackerRepository repo;
	
	@Test
	public void testLiftTrackerMappingsFindAll() {
		List<LiftTracker> lifts = repo.findAll();
		assertNotNull(lifts);
		assertEquals(2, lifts.size());
	}
	
	@Test
	public void testLiftTrackerMappingsFindById() {
		LiftTracker lt = repo.findById(1).get();
		assertEquals("chest", lt.getMuscleGroup());
	}
	
}
