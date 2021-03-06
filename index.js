const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', 
{
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useFindAndModify:false
})
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
// async function db (){
//     const user = await User.findById('60e874d117b7161334266d35');
//     user.name = 'Meghla Nur';
//     await user.save();
//     console.log(user);
// }
// db();

//Update a Document (Mongoos Method)
// async function db (){
//     const user = await User.findByIdAndUpdate('60e875af14d745119800bfbe',
//     {
//         isMarried: true,
//         age:55,
//     },
//     {
//         new: true,
//         runValidators: true,
//     }
//     );
//     console.log(user);
// };
// db();

/* Delete Documents in 3 ways
===========================

1-DeleteOne
2-DeleteMany
3-FindByIdAndDelete
*/
async function db (){
    // await User.deleteOne({_id: '60e875af14d745119800bfbe'});
    // await User.deleteMany({isMarried: false});
    await User.findByIdAndDelete('60e87674e4451ded761000a3');
};
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