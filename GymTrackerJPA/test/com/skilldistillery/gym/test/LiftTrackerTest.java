package com.skilldistillery.gym.test;

import static org.junit.Assert.assertEquals;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import com.skilldistillery.gym.entities.LiftTracker;

class LiftTrackerTest {

	private EntityManagerFactory emf;
	private EntityManager em;
	
	@BeforeEach
	void setUp() throws Exception {
		emf = Persistence.createEntityManagerFactory("Gym");
		em = emf.createEntityManager();
	}

	@AfterEach
	void tearDown() throws Exception {
		em.close();
		emf.close();
	}
	
	@Test
	void testLiftTrackerMappings() {
		LiftTracker lt = em.find(LiftTracker.class, 1);
		assertEquals("chest", lt.getMuscleGroup());
		assertEquals("3:00 PM", lt.getTimeIn());
	}

}
