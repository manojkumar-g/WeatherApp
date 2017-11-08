import React from 'react'
const Planner = (props) => {
  let codesByDay = []
  let {report,noOfDays} = props
  // console.log('reee',report)
  if(props.type !=='skiing'){
    codesByDay = report.data.weather.map(
      ({date,hourly}) => ({date,code:hourly[0].weatherCode})
    )
  }
  else{
    codesByDay = report.data.weather.map(
      ({date,hourly}) => ({date,code:hourly[0].bottom[0].weatherCode})
    )
  }
  let solutions = [];
  if(!codesByDay || noOfDays > codesByDay.length || noOfDays <=0){
    solutions.push('No Plans Possible To Show :(')
  }

  else{
    // solutions.push('May Be some Plans :)')

    for(let i =0 ;i< codesByDay.length;i++){
      if(codesByDay[i].code == props.code){
        if(noOfDays == 1)
          solutions.push('On '+codesByDay[i].date)
        else{
          let count =1;
          let j = i+1;
          while(j<codesByDay.length){
            if(codesByDay[j].code == props.code && count < noOfDays)
              count ++;
            else
              break;
            j++;
          }
          if(j<codesByDay.length)
          solutions.push(`${codesByDay[i].date} to ${codesByDay[j].date}`)
        }
      }
    }
  }

  console.log('codes',codesByDay);
  console.log('solutions',solutions);
  if(solutions.length <=0){
    solutions.push('No Plans Possible To Show :(')
  }
  return(
    <span className = 'plans'>
    <h1>
      Possible Plans for {props.noOfDays} Days with
      {' '+props.weatherCodes[props.code]+' '} Weather
    </h1>
    <ul>
      {
        solutions.map(
        (x,i) => <li key = {i}>{x}</li>
      )
    }
    </ul>
  </span>
  )
}

export default Planner;
