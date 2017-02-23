import React, { Component } from 'react'
import Text from 'material-ui/Text'
import { CircularProgress } from 'material-ui/Progress'
import Results from './Results'
import NoProduct from './NoProduct'
import lookupOnReddit from '../lookupOnReddit'
import getProductName from '../getProductName'

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
    getProductName({
      onSuccess: (productName) => (
        lookupOnReddit(
          productName,
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
        <Text colorInherit type="title" align="center">Amazon + Reddit = 🚀</Text>
        {
          this.state && this.state.noProductName
            ? <NoProduct />
            :
            <div>
              {
                this.state && this.state.fetched
                  ? <Results results={results} />
                  : <div style={{ textAlign: 'center', marginTop: '50px' }}><CircularProgress size={100} /></div>
              }
            </div>
        }
      </div>
    )
  }
}
