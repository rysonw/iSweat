import React from 'react';
import { useHistory } from "react-router-dom";
import { useState } from 'react';

export const EditExercise = ({ exercise }) => {
 
    const [name, setName] = useState(exercise.name);
    const [reps, setReps] = useState(exercise.reps);
    const [weight, setWeight] = useState(exercise.weight);
    const [unit, setUnit] = useState(exercise.unit);
    const [date, setDate] = useState(exercise.date);

    
    const history = useHistory();

    const editExercise = async () => {
        const response = await fetch(`/exercises/${exercise._id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                name: name,
                reps: reps,
                weight: weight,
                unit: unit,
                date: date
            }),
            headers: {'Content-Type': 'application/json',},
        });

        if (response.status === 200) {
            alert("Edit Successful!");
        } else {
            const errMessage = await response.json();
            alert(`Edit Successful!`);
        }
        history.push("/");
    }

    return (
        <>
        <article>
            <h2>Edit an Exercise:</h2>
            <p>Use this page to edit existsting exercises!</p>
            <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset>
                    <legend>What exercise are you adding?</legend>
                    <label for="name">Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)} 
                        id="name" />
                    
                    <label for="reps">Reps:</label>
                    <input
                        type="number"
                        value={reps}
                        onChange={e => setReps(e.target.value)} 
                        id="reps" />

                    <label for="weight">Weight:</label>  
                    <input
                        type="number"
                        value={weight}
                        onChange={e => setWeight(e.target.value)} 
                        id="weight" />

                    <label for="unit">Unit:</label>
                    <select
                        type="text"
                        value={unit}
                        onChange={e => setUnit(e.target.value)} 
                        id="unit" >
                        <option> </option>
                        <option>lbs</option>
                        <option>kgs</option>
                        <option>miles</option>
                        <option>minutes</option>
                    </select>


                    <label for="date">Date:</label>
                    <input
                        value={date}
                        onChange={e => setDate(e.target.value)} 
                        id="date" />


                    <label for="submit">
                    <button
                        onClick={editExercise}
                        id="submit"
                    >Save</button> updates to exercise list.</label>
                </fieldset>
                </form>
            </article>
        </>
    );
}
export default EditExercise;