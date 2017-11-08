import axios from 'axios'
import {apiKey} from './../../../config/api'

class WeatherService{
  static searchApi(query){
    let url = `https://api.worldweatheronline.com/premium/v1/search.ashx?key=${apiKey}&query=${query}&format=json&num_of_results=5`
    // console.log(url)
    return axios.get(url).then(({data}) =>
      data.search_api.result.map(({areaName,country,latitude,longitude}) =>
          ({name:areaName[0].value,country:country[0].value,latitude,longitude}) ))
  }
  static getUrlForReport(query,type){
    switch (type) {
      case 'roaming':
        return `https://api.worldweatheronline.com/premium/v1/weather.ashx?key=${apiKey}&q=${query}&format=json&num_of_days=15&mca=no&tp=24`
        break;
      case 'surfing':
        return `https://api.worldweatheronline.com/premium/v1/marine.ashx?key=${apiKey}&q=${query}&format=json&num_of_days=15&mca=no&tp=24&tide=yes`
        break;
      case 'skiing':
        return `https://api.worldweatheronline.com/premium/v1/ski.ashx?key=${apiKey}&q=${query}&format=json&num_of_days=15&mca=no&tp=24&tide=yes`
        break;
    }
  }
  static getReport(query,type){
    let url = this.getUrlForReport(query, type)

    return axios.get(url).then(
      ({data}) => {
        // console.log(data);
        return data;
      }
    )
  }
}

module.exports = WeatherService;
