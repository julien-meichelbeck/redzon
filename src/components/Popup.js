import React, { Component } from 'react'
import Text from 'material-ui/Text'
import { CircularProgress } from 'material-ui/Progress'
import Results from './Results'
import Message from './Message'
import lookupOnReddit from '../lookupOnReddit'
import getProductInfo from '../getProductInfo'

export default class Popup extends Component {
  state = {
    noProductName: false,
    fetched: false,
    results: [],
  }

  componentWillMount() {
    this.fetchResults()
  }

  fetchResults = () => {
    getProductInfo({
      onSuccess: (productName, productCategory) => (
        lookupOnReddit(
          productName,
          productCategory,
          (results) => this.setState({ results: results.concat(results), fetched: true }),
        )
      ),
      onFailure: () => (this.setState({ noProductName: true })),
    })
  }

  render() {
    const results = this.state && this.state.results
    return (
      <div>
        <div style={{ textAlign: 'center', position: 'relative', top: '10px', marginBottom: '30px' }}>
          <img
            style={{ width: '50px', display: 'inline-block' }}
            src="./logo.png"
          />
          <Text
            colorInherit
            type="title"
            align="center"
            style={{
              fontFamily: "'Poiret One', cursive",
              fontSize: '50px',
              color: '#ff5252',
              display: 'inline-block',
            }}
          >
            redzon
          </Text>
        </div>
        {
          this.state && this.state.noProductName
            ? <Message>You must be on an Amazon product page to use this extension.</Message>
            :
            <div>
              {
                this.state && this.state.fetched
                  ? <Results results={results} />
                  : <div style={{ textAlign: 'center', marginTop: '50px' }}>
                    <CircularProgress size={100} />
                  </div>
              }
            </div>
        }
      </div>
    )
  }
}
