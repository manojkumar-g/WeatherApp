import weatherService from '../services/weatherService'

class WeatherController{
  static getCity(req,res){
    let query = req.params.query;
    weatherService.searchApi(query)
      .then((data) => res.json(data))
      .catch((err)=> res.status(500).json({error:'internal Eroor'}))
  }
  static getReport(req,res){
    let {query,type} = req.body;
    console.log(req.body);
    weatherService.getReport(query,type)
        .then(data => res.json(data))
        .catch((err)=> res.status(500).json({error:err}))
  }

}

module.exports = WeatherController;
