const bodyParser = require('body-parser');
const morganBody = require('morgan-body');
const express = require('express');
const favicon = require('serve-favicon');
const helmet = require('helmet');
const fetch = require('node-fetch');
const path = require('path');

const app = express();

app.set('json spaces', 4);

app.use(favicon(path.join(__dirname, 'public', 'img', 'favicon.ico')));
app.use('/css', express.static(path.join(__dirname, 'public', 'css')));
app.use('/img', express.static(path.join(__dirname, 'public', 'img')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(helmet());
morganBody(app);

app.get('/', (req, res) => {
        res.status(200).send('Hello, World! oWo uWu');
});

app.listen(3000, () => {
        console.log(
                `Server started at ${new Date().toDateString()} and at port 3000.`
        );
});

setInterval(() => fetch('https://website.1chi.repl.co'), 360000);
