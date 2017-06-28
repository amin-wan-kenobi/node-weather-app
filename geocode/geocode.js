const request = require('request');

const geocodeAddress = (address, callback) => {
    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}`,
        json: true //that means we want the return data to be json so we do not have to parse it
    }, (error, response, body) => {
        if(error){
            callback(`Something went wrong. Check the message:${error}`)
        }else{
            var {status} = body;
            if(status === 'OK'){
                var {lat, lng} = body.results[0].geometry.location;
                var {formatted_address} = body.results[0];
                //console.log(JSON.stringify(body, undefined, 2));
                callback(undefined, {
                    formatted_address,
                    lat,
                    lng
                })
                //console.log(`Latitude= ${lat} and longitude= ${lng}`);
                //console.log(`Address: ${formatted_address}`);
                // console.log('error', error);
                // console.log('reponse', response);
            }else{
                callback('Result NOT FOUND!!!!')
            }    
        }
        
    })
}




module.exports = {
    geocodeAddress
}