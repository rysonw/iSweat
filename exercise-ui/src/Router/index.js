import React from 'react'
import {BrowserRouter as Router ,Route,Switch} from 'react-router-dom';
import HomePage from '../pages/HomePage';
import CreateExercise from '../pages/CreateExercise'
import AddExc from '../pages/AddExercise';

function AppRouter (){
    let exercise=[]
    let setExercise={}
    return(
        <>
        <Router>
               
            <Switch path="/" exact>
            <HomePage setExercise={setExercise} />
            </Switch>

            <Switch path="/create">
            <AddExc/>
            </Switch>

            </Router>
        </>
    )
}

export default AppRouter;