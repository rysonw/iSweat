import React from 'react';
import ExerciseList from '../components/ExerciseList';
import CreateExercise from './CreateExercise';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {Header,Intro,Footer} from '../components/helpers';

function HomePage({ setExercise }) {
    // Use the history for updating
    const history = useHistory();

    // Use state to bring in the data
    const [exercises, setExercises ] = useState([]);

    const loadExercises = async () => {
        const response = await fetch('/exercises');
        const exercises = await response.json();
        console.log(exercises,"hh")
        setExercises(exercises);
    } 
    

    const onEditExercise = async exercise => {
        setExercise(exercise);
        history.push("/edit");
    }


    const onDeleteExercise = async _id => {
        const response = await fetch(`/exercises/${_id}`, { method: 'DELETE' });
        if (response.status === 204) {
            const getResponse = await fetch('/exercises');
            const exercises = await getResponse.json();
            setExercises(exercises);
        } else {
            console.error(`Failed to delete exercise with _id = ${_id}, status code = ${response.status}`)
        }
    }

    useEffect(() => {
        loadExercises();
    }, []);

    return (
        <>
        <Header/>
        <Intro/>
        <Footer/>
      
        </>
    );
}

export default HomePage;