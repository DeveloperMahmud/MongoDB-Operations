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

async function fetchUsers(){
    //find, findOne, findById
    //QUERY API - SELECT
    // const users = await User.find({isMarried: true}).select('name age'); 
    // const users = await User.find({isMarried: true}).select('-name -sallary -isMarried'); 

    //QUERY API - SORT
    // const users = await User.find({isMarried: true}).select('name sallary').sort('sallary');

    //QUERY API - LIMIT 
    // const users = await User.find({isMarried: true}).select('name sallary').sort('sallary').limit(2);
    
    //QUERY API - LIMIT 
    const users = await User.find({isMarried: true}).select('name sallary').countDocuments(); 
    console.log(users);
};
fetchUsers();
// async function storeInformation(){

//     const user = new User(
//         {
//         name : 'Candlina',
//         age : 26,
//         isMarried : false,
//         gender : 'female',
//         sallary : 11000,
//         }
//     );

//     await user.save();
    
//     console.log(user);
// }
// storeInformation();