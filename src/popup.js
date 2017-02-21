import React from 'react'
import ReactDOM from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Popup from './components/Popup'

const App = () => (
  <MuiThemeProvider>
    <Popup />
  </MuiThemeProvider>
)

ReactDOM.render(<App />, document.getElementById('main'))
