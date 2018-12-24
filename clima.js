axios = require('axios');


const getClima = async(lon, lat) => {
    // http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=4d9967cbd18b89c0f048939622ea09d0&units=metric
    let apikey = "4d9967cbd18b89c0f048939622ea09d0";

    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}&units=metric`);

    return {
        temp: resp.data.main.temp
    }

}



module.exports = {
    getClima
}