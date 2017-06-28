const request = require('request');
const yargs = require('yargs');

const argv = yargs
    .options(
        {
            a: {
                demand: true,
                alias: 'address',
                describe: 'Address to fetch weather for',
                string: true //always parse the input as String not integer or others
            }
        }
    )
    .help() //this will add the help flag. Very useful
    .alias('help', 'h')
    .argv;

var address = argv.a;

const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather.js');
console.log(`Searching for ${address}`);
geocode.geocodeAddress(address, (errorMessage, results) => {
    if(errorMessage){
        console.log(errorMessage);
    }else{
        console.log(JSON.stringify(results, undefined, 2));
        console.log(`Address: ${results.formatted_address}`);
        console.log(`Lat: ${results.lat}`);
        console.log(`Lng: ${results.lng}`);
        weather.getWeatherInfo(results.lat, 
            results.lng, 
            (error, weatherRes) => {
                if(error){

                }else{
                    console.log(JSON.stringify(weatherRes, undefined, 2));
                }
            });
    }
});
console.log('PLEASE WAIT ........');