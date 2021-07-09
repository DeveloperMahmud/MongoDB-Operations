const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('Database is Connected!'))
    .catch((err) => console.error(err));

// schema = shape of a document

const userSchema = new mongoose.Schema({
    name : String,
    age : Number,
    isMarried : Boolean,
    gender : String,
    sallary : Number 
});

const User = mongoose.model('User', userSchema);

async function storeInformation(){

    const user = new User({
        name : 'Prince',
        age : 20,
        isMarried : true,
        gender : 'male',
        sallary : 5000,
    });

    await user.save();
    
    console.log(user);
}

storeInformation();