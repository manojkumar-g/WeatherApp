import React from 'react'
import ReactDOM from 'react-dom'
import App from'../shared/app.jsx'
import { AppContainer } from 'react-hot-loader'
import { BrowserRouter } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Provider} from 'react-redux'
import store from '../shared/configureStore'


// injectTapEventPlugin()

const render = (Component) => {
  ReactDOM.render(
    wrapApp(App),
    document.getElementById('root')
  )
}

const wrapApp = (AppComponent) =>
      <AppContainer>
        <Provider store = {store}>
          <MuiThemeProvider muiTheme={getMuiTheme()}>
            <AppComponent />
          </MuiThemeProvider>
        </Provider>
      </AppContainer>


render(App);

if (module.hot) {
  module.hot.accept('../shared/app.jsx', () => {
    render(App)
  });
}
