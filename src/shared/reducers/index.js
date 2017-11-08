const initialState = {
  report:{},
  selectedObj:{},
  noOfDays:2,
  isWaiting:false,
  isError:false,
  isSuccess:false,
  weatherCode:113,
}

const reducer = (state = initialState,action) =>{
  switch (action.type) {
    case 'CHANGE_NO_OF_DAYS':
      return {
        ...state,
        noOfDays:action.value
      }
      break;
    case 'CHANGE_WEATHER_CODE':
      return {
        ...state,
        weatherCode:action.value
      }
      case 'ADD_SELECTED_DATA':
      return {
        ...state,
        selectedObj:action.data
      }
        break;
      case 'WAITING_FOR_REQUEST':
        return {
          ...state,
          isError:false,
          isWaiting:true
        }
        break;
      case 'SUCCESS_REPORT':
        return {
          ...state,
          isError:false,
          report:action.data,
          isSuccess:true,
          isWaiting:false
        }
        break;
      case 'FAILURE_REPORT':
        return {
          ...state,
          isError:true,
          isWaiting:false
        }
        break;
      break;
      default:
        return state
  }
}

export default reducer
