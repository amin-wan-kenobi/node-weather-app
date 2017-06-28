var getUser = (id, callback) => {
    //get user from DB, API, etc
    var user = {
        id: 3000,
        name: 'Amin',
        email: 'ameri@myneighby.com'
    }
    //callback(user);
    setTimeout( ()=>{
        callback(user);
    }, 3000)
};

console.log('going to get the user');
getUser(3000, (user) => {
    console.log(user);
});
console.log('still waiting....');