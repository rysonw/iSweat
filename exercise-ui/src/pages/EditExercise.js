import React from 'react';
import { useHistory } from "react-router-dom";
import { useState } from 'react';
import {Header,Footer} from '../components/helpers'
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
        <article className='headcenter'>
            <h2>Edit Exercise:</h2>
            <p>Use this page to edit an existing exercise!</p>
            <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset  className='centeralign'>
                    <legend>What exercise are you changing?</legend>
                <label style={{ fontSize: '18px',display:'block' }} for="name">Name:</label>
                    <input
                        type="text"
                        value={name}
                        className='input'
                        onChange={e => setName(e.target.value)} 
                        id="name" />
                    
                <label style={{ fontSize: '18px',display:'block' }} for="reps">Reps:</label>
                    <input
                        type="number"
                        value={reps}
                        className='input'
                        onChange={e => setReps(e.target.value)} 
                        id="reps" />

                <label style={{ fontSize: '18px',display:'block' }} for="weight">Weight:</label>  
                    <input
                        type="number"
                        value={weight}
                        className='input'
                        onChange={e => setWeight(e.target.value)} 
                        id="weight" />

                <label style={{ fontSize: '18px',display:'block' }} for="unit">Unit:</label>
                    <select
                        type="text"
                        value={unit}
                        className='input'
                        style={{color:'black'}}
                        onChange={e => setUnit(e.target.value)} 
                        id="unit" >
                        <option> </option>
                        <option>lbs</option>
                        <option>kgs</option>
                        <option>miles</option>
                        <option>minutes</option>
                    </select>


                <label style={{ fontSize: '18px',display:'block' }} for="date">Date:</label>
                    <input
                        value={date}
                        type='date'
                        onChange={e => setDate(e.target.value)} 
                        className='input'
                        id="date" />
                        


                <label style={{ fontSize: '18px',display:'block' }} for="submit">
                    <button
                        onClick={editExercise}
                        id="submit"
                        className='addbtn'
                    >Save updates to exercise list.</button> </label>
                </fieldset>
                </form>
            </article>
        </>
    );
}
export default EditExercise;