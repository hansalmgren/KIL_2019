'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
	let headers = req.headers;
	let body = 'Hej det här är Node/Express som talar.<br>';
    body += "<code>"+JSON.stringify(headers)+"</code>";
    res.send(body);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

