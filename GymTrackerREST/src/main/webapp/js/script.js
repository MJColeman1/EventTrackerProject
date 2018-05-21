window.addEventListener('load', function(e){
    console.log('document loaded');
    init();
}); 


function init() {
    document.eventForm.lookup.addEventListener('click', function(event) {   
        event.preventDefault();
        var liftId = document.eventForm.eventId.value;
        if (!isNaN(liftId) && liftId > 0) {
            getWorkout(liftId);
        }
        
    })
    
    getAllWorkouts();
    
    document.newWorkoutForm.newWorkoutButton.addEventListener('click', function addWorkout(evt){
        // evt.preventDefault();
        var form = document.newWorkoutForm;
        var workout = {
          date: form.date.value, 
          timeIn: form.timeIn.value, 
          timeOut: form.timeOut.value,
          muscleGroup: form.muscleGroup.value,
          reps: form.reps.value,
          movements: form.movements.value,
          personalRecordsSet: form.personalRecordsSet.value,
          milesRan: form.milesRan.value 
         };
         var workoutJSON = JSON.stringify(workout);
         console.log(workout);
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'api/lifts', true);
        xhr.setRequestHeader("Content-type", "application/json");
        xhr.onreadystatechange = function (){
          if (xhr.readyState === 4){
            if (xhr.status === 200 || xhr.status === 201){
              var newWorkoutJSON = xhr.responseText;
              var newWorkout = JSON.parse(newWorkoutJSON);
              console.log(newWorkout);
              displayWorkout(newWorkout);
            }
            else {
              console.error("ERROR: In addWorkout");
              console.error(xhr.status + ": " + xhr.responseText);
            }
          }
        }
        xhr.send(workoutJSON);
      });
    
    
}


  function getAllWorkouts() {
      var xhr = new XMLHttpRequest();
      xhr.open('GET','api/lifts', true);
      xhr.onreadystatechange = function() {
          if (xhr.status < 400 && xhr.readyState === 4) {
              var workouts = JSON.parse(xhr.responseText);
              console.log(workouts);
              displayIndex(workouts);
          }
          if (xhr.status >= 400 && xhr.readyState === 4) {
              console.error('Error in Get All Workouts');
          }
      };
      xhr.send(null);
  }

  function displayIndex(workouts) {
      console.log((workouts));
      
      var div = document.getElementById('liftIndex');
      div.textContent = '';
      var table = document.createElement('table');
      div.appendChild(table);
      
      workouts.forEach(workout => {
          var tr = document.createElement('tr');
          tr.liftId = workout.id;
          var td = document.createElement('td');
          var td2 = document.createElement('td');
          var td3 = document.createElement('button');
          td.textContent = workout.date;
          td2.textContent = workout.muscleGroup;
          td3.textContent = 'Delete';
          td3.addEventListener('click', function(e){
              //   e.preventDefault();
              var deleteCell = e.target;
              var deleteId = deleteCell.parentElement.liftId;
              deleteWorkout(deleteId);
              
            })
            tr.appendChild(td);
            tr.appendChild(td2);
            tr.appendChild(td3);
            table.appendChild(tr);
            td.addEventListener('click', function(evt) {
                var cell = evt.target;
                console.log(cell.parentElement.liftId);
                var lid = cell.parentElement.liftId;
                if (!isNaN(lid) && lid > 0) {
                    var lift = getWorkout(lid);
                    displayWorkout(lift);
                }
            })
            td2.addEventListener('click', function(evt) {
                var cell = evt.target;
                console.log(cell.parentElement.liftId);
                var lid = cell.parentElement.liftId;
                if (!isNaN(lid) && lid > 0) {
                    var lift = getWorkout(lid);
                    displayWorkout(lift);
                }
            })
      })
     }

     function getWorkout(id) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', `api/lifts/${id}`, true);
        xhr.onreadystatechange = function (){
          if(xhr.readyState === 4 && xhr.status < 400){
            var workout = JSON.parse(xhr.responseText);
            console.log(workout);
            displayWorkout(workout);
          }
          if(xhr.readyState ===4 && xhr.status >= 400){
            console.log(xhr.status + " error returned: " + xhr.responseText);
          }
        }
        xhr.send(null);
    }

    function deleteWorkout(id) {
        var xhr = new XMLHttpRequest();
        xhr.open('DELETE', `api/lifts/${id}`, true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status < 400) {
                var deleted = JSON.parse(xhr.responseText);
                console.log(deleted);
            }
            if (xhr.readyState === 4 && xhr.status >= 400) {
                console.log("Error in DeleteWorkout");
            }
        }
        xhr.send(null); 
        location.reload();
        getAllWorkouts();
    }

    var updateForm = document.createElement('form');

    function displayWorkout(workout) {
        var workoutDiv = document.getElementById('findWorkout');
        workoutDiv.textContent = '';
        var arrival = document.createElement('h5');
        var muscleGroup = document.createElement('h5');
        var reps = document.createElement('h5');
        var movements = document.createElement('h5');
        var date = document.createElement('h5');
        var personalRecordsSet = document.createElement('h5');
        var milesRan = document.createElement('h5');
        var timeLeft = document.createElement('h5');
        var repsPerExercise = document.createElement('h5');
        arrival.textContent = "Workout Start Time: " + workout.timeIn;
        muscleGroup.textContent = "Muscle Group Exercised: " + workout.muscleGroup;
        reps.textContent = "Number of Repetitions Completed: " + workout.reps;
        movements.textContent = "Number of Exercises Completed: " + workout.movements;
        date.textContent = "Date: " + workout.date;
        personalRecordsSet.textContent = "Personal Records Set: " + workout.personalRecordsSet;
        milesRan.textContent = "Number of Miles Ran: " + workout.milesRan;
        timeLeft.textContent = "Workout End Time: " + workout.timeOut;
        repsPerExercise.textContent = "Average Number of Repetitions per Exercise: " + Math.floor((workout.reps/workout.movements));
        workoutDiv.appendChild(date);
        workoutDiv.appendChild(arrival);
        workoutDiv.appendChild(timeLeft);
        workoutDiv.appendChild(muscleGroup);
        workoutDiv.appendChild(reps);
        workoutDiv.appendChild(movements);
        workoutDiv.appendChild(personalRecordsSet);
        workoutDiv.appendChild(milesRan);
        workoutDiv.appendChild(repsPerExercise);
        var date = document.createElement('input');
        date.type = 'text';
        date.name = 'date';
        date.placeholder = "Date: " + workout.date;
        var timeIn = document.createElement('input');
        timeIn.type = 'text';
        timeIn.name = 'timeIn';
        timeIn.placeholder = "Workout Start Time: " + workout.timeIn;
        var timeOut = document.createElement('input');
        timeOut.type = 'text';
        timeOut.name = 'timeOut';
        timeOut.placeholder = "End Time: " + workout.timeOut;
        var muscleGroup = document.createElement('input');
        muscleGroup.type = 'text';
        muscleGroup.name = 'muscleGroup';
        muscleGroup.placeholder = "Muscle Group: " + workout.muscleGroup;
        var reps = document.createElement('input');
        reps.type = 'number';
        reps.name = 'reps';
        reps.placeholder = "Repetitions Completed: " + workout.reps;
        var movements = document.createElement('input');
        movements.type = 'number';
        movements.name = 'movements';
        movements.placeholder = "Exercises Performed: " + workout.movements;
        var personalRecordsSet = document.createElement('input');
        personalRecordsSet.type = 'text';
        personalRecordsSet.name = 'personalRecordsSet';
        personalRecordsSet.placeholder = "Personal Records Set: " + workout.personalRecordsSet;
        var milesRan = document.createElement('input');
        milesRan.type = 'number';
        milesRan.name = 'milesRan';
        milesRan.placeholder = "Miles Ran: " + workout.milesRan;

        var updateId = workout.id;
        var updateWorkoutButton = document.createElement('button');
        updateWorkoutButton.name = 'updateWorkoutButton';
        updateWorkoutButton.textContent = 'Update Workout';
        updateWorkoutButton.addEventListener('click', function(e){
            e.preventDefault();
            // var button = e.target;
            updateWorkout(updateId);
            displayWorkout(workout);

        })
        updateForm.textContent = "";
        updateForm.appendChild(date);
        updateForm.appendChild(document.createElement('br'));
        updateForm.appendChild(timeIn);
        updateForm.appendChild(document.createElement('br'));
        updateForm.appendChild(timeOut);
        updateForm.appendChild(document.createElement('br'));
        updateForm.appendChild(muscleGroup);
        updateForm.appendChild(document.createElement('br'));
        updateForm.appendChild(reps);
        updateForm.appendChild(document.createElement('br'));
        updateForm.appendChild(movements);
        updateForm.appendChild(document.createElement('br'));
        updateForm.appendChild(personalRecordsSet);
        updateForm.appendChild(document.createElement('br'));
        updateForm.appendChild(milesRan);
        updateForm.appendChild(document.createElement('br'));
        updateForm.appendChild(updateWorkoutButton);
        workoutDiv.appendChild(updateForm);

    }


      function updateWorkout(id) {
          var form = updateForm;
          var workout = {
            date: form.date.value, 
            timeIn: form.timeIn.value, 
            timeOut: form.timeOut.value,
            muscleGroup: form.muscleGroup.value,
            reps: form.reps.value,
            movemenets: form.movements.value,
            personalRecordsSet: form.personalRecordsSet.value,
            milesRan: form.milesRan.value 
          };
          var updateWorkoutJSON = JSON.stringify(workout);
          var xhr = new XMLHttpRequest();
          xhr.open('PUT', `api/lifts/${id}`, true);
          xhr.setRequestHeader("Content-type", "application/json");
          xhr.onreadystatechange = function (){
            if (xhr.readyState === 4){
              if (xhr.status === 200 || xhr.status === 201){
                var updatedWorkoutJSON = xhr.responseText;
                var updatedWorkout = JSON.parse(updatedWorkoutJSON);
                console.log(updatedWorkout);
                displayWorkout(updatedWorkout);
              }
              else {
                console.error("ERROR: In addWorkout");
                console.error(xhr.status + ": " + xhr.responseText);
              }
            }
          }
          xhr.send(updateWorkoutJSON);
        }
    
      
