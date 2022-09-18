import React from 'react';
import ExerciseList from '../components/ExerciseList';
import CreateExercise from './CreateExercise';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {Header,Intro,Footer} from '../components/helpers';
import back from '../assets/back.png'
import EditExercise from './EditExercise'

function ListExercise({ setExercise }) {
    // Use the history for updating
    const history = useHistory();

    // Use state to bring in the data
    const [exercises, setExercises ] = useState([]);

    // edit state 
    const [toggle,setToggle]=useState('list')

    const loadExercises = async () => {
        const response = await fetch('/exercises');
        const exercises = await response.json();
        setExercises(exercises);
    } 
    

    const onEditExercise = async  exercise=> {
        setToggle(exercise);
        
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

    return (  <>
        <Header/>
        {toggle=='list'? 
        <Table exerciselist={exercises} 
               onEditExercise={onEditExercise}
               onDeleteExercise={onDeleteExercise}

        />:<EditExercise exercise={toggle} />

        }
        
        <Footer/>
      
        </>
    );
}

export default ListExercise;

function Table(exerciselist,onEditExercise,onDeleteExercise){
    return(
        
        <>

        {
            exerciselist.exerciselist.length ?
            <>
                           <article className="headcenter">
                <h2>List of Exercises</h2>
                <p>Below is a list of all created exercises.</p>
                <ExerciseList 
                    exercises={exerciselist}
                    onEdit={onEditExercise} 
                    onDelete={onDeleteExercise} 
                />
            </article>
            </>
            :
            <>
            <div className="headcenter">
      <h1>No Exercises Created</h1>
      <a href='/create' className='addbtn'> Create Excercise Here</a>
      <img src={back} width='20%' height='20%' padding='20px' />
    </div>
            </>
        }
        </>
    )
}