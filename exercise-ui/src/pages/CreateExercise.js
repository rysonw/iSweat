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
        if (response.status === 201) {
            alert("Successfully added!");
        } else {
            alert(`Failure, status code = ${response.status}`);
        }
        history.push("/");
    };



    return (
        <>
            <article className='headcenter'>
                <h2>Add an Exercise:</h2>
                <p>Add a name, weight, date, reps and unit for each exercise for best tracking accuracy!</p>
                <form onSubmit={(e) => { e.preventDefault(); }}>
                    <fieldset className='centeralign'>
                        <legend>What exercise are you adding?</legend>
                        <div>
                            <label style={{ fontSize: '18px',display:'block' }} for="name"  >Name:</label>
                            <input
                                type="text"
                                placeholder="Name of Exercise"
                                value={name}
                                className='input'
                                onChange={e => setName(e.target.value)}
                                id="name" />
                        </div>
                        <div>
                            <label style={{ fontSize: '18px',display:'block' }} for="reps">Reps:</label>
                            <input
                                type="number"
                                value={reps}
                                className='input'
                                placeholder="Reps"
                                onChange={e => setReps(e.target.value)}
                                id="reps" />
                        </div>
                        <div>
                            <label style={{ fontSize: '18px',display:'block' }} for="weight">Weight:</label>
                            <input
                                type="number"
                                placeholder="Weight lifted"
                                value={weight}
                                className='input'
                                onChange={e => setWeight(e.target.value)}
                                id="weight" />
                        </div>
                        <div>
                        <label style={{ fontSize: '18px',display:'block' }} for="unit">Unit:</label>
                        <select
                            type="text"
                            placeholder="Units of Weight (kg, lbs)"
                            value={unit}
                            style={{color:'black'}}
                            className='input'
                            onChange={e => setUnit(e.target.value)}
                            id="unit" >
                            <option> </option>
                            <option>lbs</option>
                            <option>kgs</option>
                            <option>miles</option>
                            <option>minutes</option>
                        </select>
                    </div>

                    <div>
                        <label style={{ fontSize: '18px',display:'block' }} for="date">Date:</label>
                        <input
                        type='date'
                            placeholder="Date performed"
                            value={date}
                            className='input'
                            onChange={e => setDate(e.target.value)}
                            id="date" />
                    </div>

                    <div>
                        <label style={{ fontSize: '18px',display:'block', padding:'10px' }} for="submit">
                            <button
                                type="submit"
                                onClick={addExercise}
                                id="submit"
                                className='addbtn'
                            >Add to the List </button> </label>
                    </div>
                </fieldset>
            </form>
        </article>
        </>
    );
}

export default CreateExercise;