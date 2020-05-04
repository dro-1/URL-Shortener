const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const urlController = require('./urlController')


const app = express();
const PORT = process.env.PORT || 3000;
db.connector();
app.use(bodyParser.urlencoded({ extended:true }))
app.use(bodyParser.json());
app.use(express.static('public'));
app.get('/:uniqueName',urlController.openLink)
app.post('/',urlController.createLink)
app.listen(PORT,()=>{
    console.log(`The server is running on port ${PORT}`);
})