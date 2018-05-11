package com.skilldistillery.gym.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.gym.entities.LiftTracker;
import com.skilldistillery.gym.services.LiftTrackerService;

@RestController
@RequestMapping("api")
public class LiftTrackerController {

	@Autowired
	private LiftTrackerService service;
	
	@RequestMapping(path = "lifts", method = RequestMethod.GET)
	public List<LiftTracker> index() {
		return service.index();
	}
	
	@RequestMapping(path = "lifts/{id}", method = RequestMethod.GET)
	public LiftTracker findById(@PathVariable int id) {
		return service.findById(id);
	}
	
	@RequestMapping(path = "lifts", method = RequestMethod.POST)
	public LiftTracker createLift(@RequestBody LiftTracker lt) {
		return service.create(lt);
	}
	
	@RequestMapping(path = "lifts/{id}", method = RequestMethod.PUT) 
	public LiftTracker updateLift(@RequestBody LiftTracker lt, @PathVariable int id) {
		return service.update(lt, id);
	}
	
	@RequestMapping(path = "lifts/{id}", method = RequestMethod.PATCH)
	public LiftTracker patchLift(@RequestBody LiftTracker lt, @PathVariable int id) {
		return service.patch(lt, id);	
	}
	
	@RequestMapping(path = "lifts/{id}", method = RequestMethod.DELETE)
	public boolean deleteLift(@PathVariable int id) {
		return service.delete(id);
	}
	

	
}
