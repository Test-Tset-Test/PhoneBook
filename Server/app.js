const express = require('express');
const cors = require('cors');
const app = express();

const bodyParser = require('body-parser');

const postsRoute = require('./routes/PostsUser')

app.use(bodyParser.json());
app.use(cors());
app.use('/api', postsRoute);

app.listen(80);
