// Import dependencies
// Import dependencies
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useState } from 'react';



// Define the function that renders the content in routes using State.
import AppRouter from './Router/index'
import HomePage from './pages/HomePage';
import AddExc from './pages/AddExercise';
import EditExercise from './pages/EditExercise';
import ListExercise from './pages/ListExercise'
function App() {

  const [exercise, setExercise] = useState([]);
  return (
    <>
      {/* <AppRouter /> */}
      <Router>

      
         
            <Route path="/" exact>
              <HomePage setExercise={setExercise} />
            </Route>

            <Route path="/create">
              <AddExc />
            </Route>
            
            <Route path="/edit">
              <EditExercise exercise={exercise} />
            </Route>

            <Route path="/list">
              <ListExercise />
            </Route>


      </Router>
   
    </>
  );
}

export default App;