'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();

app.set('views', './views');
app.set('view engine', 'pug');
app.get('/pug/', function (req, res) {
	  res.render('index', { title: 'Hey', message: 'Hello there!' })
	})

app.get('/', (req, res) => {
	let headers = req.headers;
	let body = 'Hej det här är Node/Express som talar.<br>';
    body += "All headers:<br><code>"+JSON.stringify(headers)+"</code>";
    body += "<br><code>user-agent: '"+req.get('user-agent')+"'</code>";
    res.send(body);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

