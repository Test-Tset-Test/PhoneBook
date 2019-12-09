const express = require('express');
const cors = require('cors');
const app = express();

// require('dotenv/config');
const bodyParser = require('body-parser');

const postsRoute = require('./routes/PostsUser')

app.use(bodyParser.json());
app.use(cors());
app.use('/api', postsRoute);

app.listen(80, function () {
});

app.listen(3000);

/*app.get('/', (request, response) => {
    throw new Error('oops')
});

app.use((err, request, response, next) => {
    response.status(500).send('Something broke!')
});

app.listen(3000);*/
