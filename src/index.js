const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');
const app = express();

try {
    mongoose.connect('mongodb+srv://gustavo:63AANTX3PwQcJgr@gustavobases-ql7qk.mongodb.net/bank-api?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
} catch (error) {
    console.log(error);
}

app.use(cors());
app.use(express.json())
app.use(routes)

app.listen(3333);