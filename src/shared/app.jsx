import React from 'react';
import Content from './components/HomePage/Content.jsx'
import style from './style.styl'

export default class WeatherApplication extends React.Component  {
  constructor(props) {
    super(props)
  }
  render(){
    return(
      <main className = 'container'>
        <header className = 'app-header'>
          <div>
            <h2>
              Plan With Weather
            </h2>
          </div>
        </header>
        <section className = 'content'>
          <Content/>
        </section>
      </main>
    )
  }
}
