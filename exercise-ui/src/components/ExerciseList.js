import React from 'react';
import Exercise from './Exercise';

function ExerciseList({ exercises}) {
    console.log('exc',exercises)
    let list=exercises.exerciselist
    let onDelete=exercises.onDeleteExercise

    let onEdit=exercises.onEditExercise
    

    return (
      <div className='headcenter'>
        <table id="exercises">
            <caption>Edit Exercises:</caption>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Reps</th>
                    <th>Weight</th>
                    <th>Unit</th>
                    <th>Date</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                {list.map((exercise, i) => 
                    <Exercise 
                        exercise={exercise} 
                        onDelete={onDelete}
                        onEdit={onEdit} 
                    />)}
            </tbody>
        </table>
        </div>
    );
}

export default ExerciseList;
