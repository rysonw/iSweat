import 'dotenv/config';
import express from 'express';
import * as exercises from './exercise-model.mjs';

const PORT = '8000';
const app = express();
app.use(express.json());


// CREATE controller ******************************************
app.post ('/exercises', (req,res) => { 
    console.log('me chala hoon ik jaga ')
    exercises.createExercise(
        req.body.name, 
        req.body.reps, 
        req.body.weight,
        req.body.unit,
        req.body.date
        )
        .then(exercise => {
            res.status(201).json(exercise);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ error: 'Request has failed' });
        });
});


// RETRIEVE controller ****************************************************
app.get('/exercises/:_id', (req, res) => {
    const exerciseId = req.params._id;
    exercises.findExercise(exerciseId)
        .then(exercise => {res.json(exercise)})
        .catch(error => {
            res.status(400).json({ Error: 'Request to retrieve document failed' });
        });

});

app.get('/exercises', (req, res) => {
    const filter = {};
    exercises.findExercise()
        .then(exercises => {
            res.send(exercises);
        })
        .catch(error => {
            console.error(error);
            res.send({ Error: 'Request to retrieve exercises failed' });
        });

});


// DELETE Controller ******************************
app.delete('/exercises/:_id', (req, res) => {
    exercises.deleteById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                res.status(204).send();
            } else {
                res.status(404).json({ Error: 'Document not found' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ error: 'Request to delete a document failed' });
        });
});

// UPDATE controller ************************************
app.put('/exercises/:_id', (req, res) => {
    console.log("IN PUT WITH req.body",req.body)
    exercises.replaceExercise(
        req.params._id, 
        req.body.name, 
        req.body.reps, 
        req.body.weight,
        req.body.unit, 
        req.body.date
    )

    .then(numUpdated => {
        if (numUpdated === 1) {
            res.json({ 
                _id: req.params._id, 
                name: req.body.name,
                reps: req.body.reps,
                weight: req.body.weight,
                unit: req.body.unit,
                date: req.body.date      
            })
        } else {
            res.status(404).json({ Error: 'Document not found' });
        }
    })
    .catch(error => {
        console.error(error);
        res.status(400).json({ Error: 'Request to update a document failed' });
    });
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});