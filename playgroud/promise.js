// var somePromise = new Promise((resolve, reject) => {
//     setTimeout( ()=>{
//         //resolve('I finished after 3 seconds');
//         reject('I messed up');
//     }, 1500);
// });

// somePromise.then((response)=>{
//     console.log(response);
// }, (error) =>{
//     console.log(error);
// });

addSync = (a, b) => {
    return new Promise((resolve, reject) => {
        if(typeof a === 'number' && typeof b === 'number'){
            resolve(a + b);
        }else {
            reject('Not number');
        }
    });
}
// addSync(10, 5).then(
//     (result) => {
//         console.log(result);
//         return addSync(result, 10);
//     }, 
//     (error) => console.log(error)
// )
// .then( (result) => {
//     console.log(`Second Result ${result}`);
// }, (error) => {
//     console.log(`second Error: ${error}`);
// });
addSync(10, '5').then(
    (result) => {
        console.log(result);
        return addSync(result, 10);
    }
)
.then( (result) => {
    console.log(`Second Result ${result}`);
})
.catch((error) => console.log(error));