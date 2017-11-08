import React from 'react'
import Form from './Form'
import Results from './Results'

const Content = () =>
    <article className = 'app-content'>
      <main>
        <Form/>
        <div >
        <Results/>
        </div>
      </main>
    </article>

export default Content;
