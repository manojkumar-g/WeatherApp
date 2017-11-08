import weatherService from '../services/weatherService'
import RedisApp from '../RedisApp'

class WeatherController{
  static getCity(req,res){
    let query = req.params.query;
    weatherService.searchApi(query)
      .then((data) => {
        console.log('getting from api');
        RedisApp.getServer().set(query,JSON.stringify(data),60*60)
        res.json(data)
      })
      .catch((err)=> res.status(500).json({error:'internal Eroor'}))
  }
  static getReport(req,res){
    let {query,type} = req.body;
    console.log(req.body);
    weatherService.getReport(query,type)
        .then(data => {
          console.log('getting from api');
          RedisApp.getServer().set(query+':'+type,JSON.stringify(data),60*30)
          res.json(data)
        })
        .catch((err)=> res.status(500).json({error:err}))
  }

}

module.exports = WeatherController;
