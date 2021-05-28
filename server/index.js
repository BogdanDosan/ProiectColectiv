const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const postRoutes = require('./routes/posts.js');



const app = express();

app.use(cors());

app.use('/posts', postRoutes);


const CONNECTION_URL='mongodb+srv://admin:admin@pc.zoymx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = process.env.PORT || 3000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Serverul pe port ${PORT}`)))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);    