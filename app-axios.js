const yargs = require('yargs');
const axios = require('axios');

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
const geocodeURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}`;

axios.get(geocodeURL)
    .then( (response) => {
        if(response.data.status === 'ZERO_RESULTS'){
            throw new Error('Address NOT FOUND');
        }
        var {lat, lng} = response.data.results[0].geometry.location;
        var {formatted_address} = response.data.results[0];
        console.log(lat, lng, formatted_address);
        const weatherURL = `https://api.darksky.net/forecast/14d3a9219e068125e4b509ee88f2f449/${lat},${lng}`;
        return axios.get(weatherURL);
    })
    .then((response) => {
        console.log(response.data.currently);
    })
    .catch( (error) => {
        console.log(error.message);
    })