const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connection = require('./db');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('input');
})

app.post('/', (req, res) => {
    const ADD_QUERY = `INSERT INTO test_schema.input (input) VALUES ('${req.body.task}')`;
    connection.query(ADD_QUERY, (err) => {
        if (err) console.log(err)
        else res.send('input has been added')
    })
    console.log(req.body);
})

app.listen(4000, () => {
    console.log('running on port 4000');
})