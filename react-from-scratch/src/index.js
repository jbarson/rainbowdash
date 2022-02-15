import ReactDOM from 'react-dom'
import React from 'react'

const App = () => {
  return <h1> Hello World!!!</h1>
}
// is the same as
const App2 = () => {
  return React.createElement('h1', null, "Hello World")
}

ReactDOM.render(<App />, document.getElementById('app'))