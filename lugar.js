axios = require('axios');

const getLongLat = async(address) => {
    let encodedUrl = encodeURI(address);

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyDyJPPlnIMOLp20Ef1LlTong8rYdTnaTXM`);
    if (resp.data.status === 'ZERO RESULTS') {
        throw new Error(`No results for given city ${argv.direccion}`);
    }
    location = resp.data.results[0].geometry.location;

    return {
        direccion: resp.data.results[0].formatted_address,
        lat: location.lat,
        lng: location.lng
    }
}

module.exports = {
    getLongLat
}