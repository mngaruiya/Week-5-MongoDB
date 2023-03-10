const express = require('express');
const router = express.Router();

module.exports = router;


//CRUD routes
//C - Create
router.post('/patients', (req, res) => {
    res.send('POST');
});
//R - Read
router.get('/patients', (req, res) => {
    res.send('GET');
});

//U - Update
router.patch('/patients/:id', (req, res) => {
    res.send('UPDATE');
});

//D - Delete
router.delete('/patients/:id', (req, res) => {
    res.send('DELETE');
});