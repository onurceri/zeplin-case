const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config()

const requestController = require('./controller/request.controller')
const businessController = require('./controller/business.controller')

const app = express();
const port = process.env.PORT || 3081;

app.use(bodyParser.json());

app.listen(port, () => {
    console.log(`Server listening on the port  ${port}`);
})

app.get('/', (_, res) => {
    res.send(`<h1>API Works !!!</h1>`)
});

/* Requests */
app.get('/api/requests', (_, res) => {
    requestController.getRequests().then(data => res.json(data));
});

app.post('/api/request', (req, res) => {
    console.log(req.body);
    requestController.createRequest(req.body).then(data => res.json(data));
});

app.put('/api/request', (req, res) => {
    requestController.updateRequest(req.body).then(data => res.json(data));
});

app.delete('/api/request/:id', (req, res) => {
    requestController.updateRequest(req.params.id).then(data => res.json(data));
});

/* Business */
app.post('/api/business/save-request', (req, res) => {
    businessController.saveRequest(req, res).then(data => res.json(data));
});