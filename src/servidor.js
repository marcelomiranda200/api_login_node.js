const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

//APP

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());
app.use('/pages', express.static(__dirname + '/pages'));

//DATABASE

const Database = require('./Database')



//PAGES

app.get('/', (req, res) => res.sendFile(__dirname + '/pages/index/index.html'));
app.get('/privado', (req, res) => res.send('Somente usuarios logados podem ver isso.'));

// PORT.

app.listen(3030, () => {
    console.log('Servidor online...')
});
