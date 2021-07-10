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

// async function fetchUsers(){

    //find, findOne, findById
    //QUERY API - SELECT
    // const users = await User.find({isMarried: true}).select('name age'); 
    // const users = await User.find({isMarried: true}).select('-name -sallary -isMarried'); 

    //QUERY API - SORT
    // const users = await User.find({isMarried: true}).select('name sallary').sort('sallary');

    //QUERY API - LIMIT 
    // const users = await User.find({isMarried: true}).select('name sallary').sort('sallary').limit(2);
    
    //QUERY API - LIMIT 
    // const users = await User.find({isMarried: true}).select('name sallary').countDocuments(); 

    /*Comparison Operator
    =====================
    eq
    ne
    gt
    gte
    lt
    lte
    in
    nin
    */


    // const users = await User.find({ sallary: { $in:[8000] } });
    // const users = await User.find({ age: { $lt: 24 } });

    //Complex Query - AND , OR Operators

    //OR
    // const users = await User.find().or([{age: 21}, {isMarried: true}]);
    
    //AND
    // const users = await User.find().and([{age: 27}, {isMarried: true}]);

    /* A Problem
        1-FIND THOSE USERS WHOS AGE IS GREATER THAN 25 OR THEY ARE UNMARRIED
        2-SHOW ONLY NAME
        3-SORTED BY NAME 
    */
//     const users = await User.find().or([{age: {$gt: 25}}, {isMarried: false}])
//         .select('name')
//         .sort('name')
//     ;

//     console.log(users);
// };

// fetchUsers();

//Logical Update a Document
async function db (){
    const user = await User.findById('60e874d117b7161334266d35');
    user.name = 'Meghla Nur';
    await user.save();
    console.log(user);
}
db();


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