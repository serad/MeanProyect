var mongoose = require('mongoose');
var Todo = require('../db/db').Todo;
var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
 
    Todo.find((err, results) => {
        if(err) {console.log(err);}
        res.send({todos: results});
    }) 
 })

router.post('/', (req,res) => {
    var todo = new Todo(req.body);
    todo.save( (err) => {
        if(err) {
            console.log(err);
        }
        console.log('SAVED!');
        res.send('Todo Saved')
    }) 
})

router.put('/:id', (req, res) => {
    var id = req.params.id;
    Todo.update({ _id: mongoose.Types.ObjectId(id)},{
        $set: {task: req.body.task}
    }, err => {
        if(err) {console.log(err)}
        res.send('ToDo updated');
    })
})

router.delete('/:id', (req, res) => {
    var id = req.params.id;
    Todo.remove({ _id: mongoose.Types.ObjectId(id)}, err => {
        if(err) {console.log(err);}
        
        res.send('ToDo Deleted');
        
    })
})

module.exports = router;