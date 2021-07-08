const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('Database is Connected!'))
    .catch((err) => console.error(err));

