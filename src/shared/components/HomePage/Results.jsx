import React from 'react'
import {connect} from 'react-redux'
import LinearProgress from 'material-ui/LinearProgress';
import Tile from './Tile.jsx'


const Result = (props) => {
  let {report,noOfDays} = props;
  console.log('report',report)

  return(
  <div className = 'results-container'>
    {
      props.isWaiting &&
    <LinearProgress mode="indeterminate" />
  }

  <div className = 'gallary'>
  {
    props.isSuccess && props.report &&
      <section className = 'summary'>
        <h3>Results</h3>
        <div>
        {
          report.data.weather.map(
            day => <Tile key = {day.date} day = {day} type = {props.selectedObj.type}/>
          )
        }
      </div>
      </section>
  }
</div>
  </div>
)
}

export default connect(
  (state) => ({...state}),
  {}
)(Result)
