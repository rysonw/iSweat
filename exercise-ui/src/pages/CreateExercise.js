import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

export const CreateExercise = () => {

    const [name, setName] = useState('');
    const [reps, setReps] = useState('');
    const [weight, setWeight] = useState('');
    const [unit, setUnit] = useState('');
    const [date, setDate] = useState('');
    
    const history = useHistory();

    const addExercise = async () => {
        const newExercise = { name, reps, weight, unit, date };
        const response = await fetch('/exercises', {
            method: 'post',
            body: JSON.stringify(newExercise),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert("Successfully added!");
        } else {
            alert(`Failure, status code = ${response.status}`);
        }
        history.push("/");
    };



    return (
        <>
        <article>
            <h2>Add exercises here:</h2>
            <p>Add a name, weight, date, reps and unit for eaxh exercise for best tracking accuracy!</p>
            <form onSubmit={(e) => { e.preventDefault(); }}>
                <fieldset>
                    <legend>What exercise are you adding?</legend>
                    <label for="name">Name:</label>
                    <input
                        type="text"
                        placeholder="Name of Exercise"
                        value={name}
                        onChange={e => setName(e.target.value)} 
                        id="name" />
                    
                    <label for="reps">Reps:</label>
                    <input
                        type="number"
                        value={reps}
                        placeholder="Reps performed"
                        onChange={e => setReps(e.target.value)} 
                        id="reps" />

                    <label for="weight">Weight:</label>
                    <input
                        type="number"
                        placeholder="Weight lifted"
                        value={weight}
                        onChange={e => setWeight(e.target.value)} 
                        id="weight" />

                    <label for="unit">Unit:</label>
                    <select
                        type="text"
                        placeholder="Units of Weight (kg, lbs)"
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
                        placeholder="Date performed"
                        value={date}
                        onChange={e => setDate(e.target.value)} 
                        id="date" />


                    <label for="submit">
                    <button
                        type="submit"
                        onClick={addExercise}
                        id="submit"
                    >Add </button> to the List</label>
                </fieldset>
                </form>
            </article>
        </>
    );
}

export default CreateExercise;