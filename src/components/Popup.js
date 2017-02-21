import React, { Component } from 'react'
import Text from 'material-ui/Text'
import { CircularProgress } from 'material-ui/Progress'
import nameFormatter from '../nameFormatter'
import Results from './Results'

export default class Popup extends Component {
  componentWillMount() {
    this.fetchResults()
  }

  fetchResults = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const tab = tabs[0]
      chrome.tabs.sendMessage(
        tab.id,
        { action: 'GET_TXT_IN_DOM', selector: '#productTitle' },
        (productTitle) => {
          const url = `https://www.reddit.com/search.json?q=${nameFormatter(productTitle)}`
          fetch(url)
            .then((res) => res.json())
            .then(({ data: { children } }) => {
              this.setState({ results: children })
            })
        },
      )
    })
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
