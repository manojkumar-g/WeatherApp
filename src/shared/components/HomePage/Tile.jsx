import React from 'react'

const Tile = ({day,type}) => {
  let properties = {};
  properties.img = type !=='skiing' ?
        day.hourly[0].weatherIconUrl[0].value
        :
        day.hourly[0].bottom[0].weatherIconUrl[0].value;
  if(type =='roaming'){
    properties['date'] = day.date
    properties.map = [
      {name:'Min.Temp: ',value:day.mintempC+'C'},
      {name:'Max.Temp: ',value:day.maxtempC+'C'},
      {name:'Humidity: ',value:day.hourly[0].humidity}

    ]
  }
  if(type =='surfing'){
    properties['date'] = day.date
    properties.map = day.tides[0].tide_data.map(
      x => ({
        name : x.tideTime+':',
        value: x.tide_type+' tides'
      })
    )
  }
  if(type == 'skiing'){
    properties['date'] = day.date
    properties.map = [
      {name:'freezeLevel: ',value:day.hourly[0].freezeLevel},
      {name:'snowfall: ',value:day.hourly[0].snowfall_cm+'cm'},
      {name:'visibility: ',value:day.hourly[0].visibility}

    ]
  }
  return(
    <span className = 'tile-container'>
      <div>
        <img src = {properties.img}/>
      </div>
      <h5 style = {{textAlign:'center'}}>{properties.date}</h5>
      {
        properties.map.map(
          (n,i) => <h4 key ={i} style = {{textAlign:'center'}}>{n.name}{n.value}</h4>
      )
      }
    </span>
  )
}

export default Tile;
