const request = require('request');
const getWeatherInfo = (lat, lng) => {
    return new Promise((resolve, reject) => {
        request({
            url: `https://api.darksky.net/forecast/14d3a9219e068125e4b509ee88f2f449/${lat},${lng}`,
            json: true
        }, (error, response, body) => {
            if(error){
                reject(`Something went wrongon Forcast.io: ${error}`);
            }else{
                var {latitude,longitude,timezone,currently} = body;
                resolve({
                    latitude,
                    longitude,
                    timezone,
                    currently
                })
            }
        })
    });
    
}
module.exports.getWeatherInfo = getWeatherInfo;