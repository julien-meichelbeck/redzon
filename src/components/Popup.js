import React, { Component } from 'react'
import Text from 'material-ui/Text'
import { CircularProgress } from 'material-ui/Progress'
import Results from './Results'
import lookupOnReddit from '../lookupOnReddit'

export default class Popup extends Component {
  componentWillMount() {
    this.fetchResults()
  }

  fetchResults = () => {
    lookupOnReddit((results) => this.setState({ results: (results || []).concat(results) }))
  }

  render() {
    const results = this.state && this.state.results
    return (
      <div>
        <Text colorInherit type="title" align="center">Amazon + Reddit = 🚀</Text>
        {
          results
          ? <Results results={results} />
          : <div style={{ textAlign: 'center', marginTop: '50px' }}><CircularProgress size={100} /></div>
        }
      </div>
    )
  }
}
