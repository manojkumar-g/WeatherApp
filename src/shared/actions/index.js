import axios from 'axios'


export const changeWeatherCode = (value) => ({
  value,
  type:'CHANGE_WEATHER_CODE'
});
export const changeNoOfDays = (value) => ({
  value,
  type:'CHANGE_NO_OF_DAYS'
});

export const addSelectedData = (data) => ({
  data,
  type:'ADD_SELECTED_DATA'
});


export const requestForReport = (query,type) =>
  dispatch =>{
    dispatch(waitingForRequest());
    return axios.post('/api/getReport',{query,type})
             .then(response => {
               response.status === 200 ? dispatch(successReport(response.data)) : dispatch(failureReport())
             })
             .catch(
               () => {
                 dispatch(failureReport())
               }
             )
  }

 const waitingForRequest = () => ({
    type:'WAITING_FOR_REQUEST'
  });

 const failureReport = () => ({
    type:'FAILURE_REPORT'
  });

 const successReport = (data) => ({
    data,
    type:'SUCCESS_REPORT'
  });
