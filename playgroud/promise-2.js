const request = require('request');
var geocodeAddress = (address) => {
    return new Promise((resolve, reject) =>{
        request({
            url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}`,
            json: true
        }, (error, response, body) => {
            if(error){
                reject(`Something went wrong. Check the message:${error}`)
            }else{
                var {status} = body;
                if(status === 'OK'){
                    var {lat, lng} = body.results[0].geometry.location;
                    var {formatted_address} = body.results[0];
                    resolve({
                        formatted_address,
                        lat,
                        lng
                    })
                }else{
                    reject('Result NOT FOUND!!!!')
                }    
            }
        });
    });
};

geocodeAddress('pantai Panorama')
    .then((location) => {
        console.log('IT WORKED:', JSON.stringify(location, undefined, 2));
    }, (error) => {console.log('ERROR', error)});
    //.catch((error) => {console.log('ERROR AGAIN', error)});