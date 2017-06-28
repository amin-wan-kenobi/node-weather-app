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

const geocode = require('./geocode/geocode-promise.js');
const weather = require('./weather/weather-promise.js');
console.log(`Searching for ${address}`);
geocode.geocodeAddress(address)
    .then( (results) => {
        return weather.getWeatherInfo(results.lat, results.lng);
            // .then( (results) => {
            //     console.log(JSON.stringify(results, undefined, 2));
            // })
            // .catch( (error) => {
            //     console.log(`Error in Weather: ${error}`)
            // })
    })
    .then( (results) => {
                console.log(JSON.stringify(results, undefined, 2));
            })
    .catch( (error) => console.log(`Error happened: ${error}`));

console.log('PLEASE WAIT ........');