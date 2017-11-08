import React from 'react'
import AutoComplete from 'material-ui/AutoComplete';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Slider from 'material-ui/Slider';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios';
import {connect} from 'react-redux'
import {changeNoOfDays,addSelectedData,requestForReport,changeWeatherCode} from '../../actions'
import weatherCodes from '../../../../config/UI/weatherCodes'
import Planner from './Planner.jsx'

let codes = Object.keys(weatherCodes);
class Form extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    searchText: '',
    dataSource: [],
    selectedValue:-1,
    plannedFor:'roaming',
  };

  handleUpdateInput = (searchText) => {
    if(searchText.length > 2){
      axios.get('/api/city/'+searchText)
            .then(({data}) => this.setState(
              {dataSource:data}
            ))
            .catch(() => this.setState({dataSource:[]}))

    }
      this.setState({searchText})

  };
  onNewRequest = (value,ind) =>{
    this.setState({
      selectedValue: ind
    })
  }
  onSubmit = () => {
    let {dataSource,selectedValue,plannedFor} = this.state
    let selectedData = this.state.dataSource[selectedValue]
    let query = selectedData.name;
    let type = plannedFor
    this.props.addSelectedData({...selectedData,type})
    if(type =='surfing')
      query = selectedData.longitude+','+selectedData.latitude
    this.props.requestForReport(query,type)
  }

  render(){
    console.log('props',this.state)
    let data = this.state.dataSource.map(({name}) => name)
    return(
      <article className = 'content-form'>

        <main>
          <AutoComplete
          searchText={this.state.searchText}
          hintText="Enter City/Place"
          dataSource={data}
          onUpdateInput={this.handleUpdateInput}
          onNewRequest={this.onNewRequest}
          filter={AutoComplete.caseInsensitiveFilter}
          fullWidth={true}
        />
        <SelectField
          floatingLabelText= "plannedFor"
          value={this.state.plannedFor}
          onChange={(e,i,plannedFor) => this.setState({plannedFor})}
          fullWidth={true}

        >
          <MenuItem value={'roaming'} primaryText="Roaming" />
          <MenuItem value={'surfing'} primaryText="Surfing" />
          <MenuItem value={'skiing'} primaryText="Skiing" />

        </SelectField>

        <RaisedButton label="Let's Go" fullWidth={true} primary={true} onClick = {this.onSubmit} />
        {
          this.props.isSuccess
        &&
        <div>

      <SelectField
        floatingLabelText= "Type of Weather you are Look for?"
        value={this.props.weatherCode || 113}
        onChange={(e,i,code) => this.props.changeWeatherCode(code)}
        fullWidth={true}
      >
        {
          codes.map(
            (key,i) => <MenuItem value={key} key={i} primaryText={weatherCodes[key]} />
          )
        }


      </SelectField>
      <p>No of Days : {this.props.noOfDays}</p>
      <Slider
        min={0}
        max={7}
        value = {this.props.noOfDays}
        step={1}
        onChange = {(e,noOfDays) => this.props.changeNoOfDays(noOfDays)}
        name = 'No. Of Days'/>
        </div>
      }

      {
        this.props.isSuccess &&
        <Planner
          code = {this.props.weatherCode}
          weatherCodes = {weatherCodes}
          report = {this.props.report}
          type = {this.state.plannedFor}
          noOfDays = {this.props.noOfDays}
        />
      }
        </main>
      </article>
    )
  }
}

export default connect(
  ({noOfDays,isSuccess,weatherCode,report}) => ({noOfDays,isSuccess,weatherCode,report}),
  {changeNoOfDays,addSelectedData,requestForReport,changeWeatherCode}
)(Form)
