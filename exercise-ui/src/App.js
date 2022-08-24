// Import dependencies
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useState } from 'react';

// Import Components, styles, media
import Nav from './components/Navigation';
import './App.css';

// Import Pages
import HomePage from './pages/HomePage';
import CreateExercise from './pages/CreateExercise';
import EditExercise from './pages/EditExercise';

// Define the function that renders the content in routes using State.
function App() {

  const [exercise, setExercise] = useState([]);

  return (
    <>
      <Router>

          <header>
            <h1>iSweat</h1>
            <p>The Best Exercise Tracker on the Market!</p>
          </header>

          <Nav />

          <main>
            <Route path="/" exact>
              <HomePage setExercise={setExercise} />
            </Route>

            <Route path="/create">
              <CreateExercise />
            </Route>
            
            <Route path="/edit">
              <EditExercise exercise={exercise} />
            </Route>
          </main>

          <footer>
            <p>© Ryson Wong 2022</p>
          </footer>

      </Router>
    </>
  );
}

export default App;