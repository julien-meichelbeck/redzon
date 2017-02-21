import nameFormatter from './nameFormatter'

const REDDIT_QUESTIONS = [
  // (name) => `what did you think of ${name}`,
  (name) => `opinion on ${name}`,
  // (name) => `overated ${name}`,
  // (name) => `underrated ${name}`,
]

const search = (addResults) => (productTitle) => {
  const productName = nameFormatter(productTitle)
  REDDIT_QUESTIONS.forEach((keywordBuilder) => {
    const url = `https://www.reddit.com/r/movies/search.json?q=${encodeURIComponent(keywordBuilder(productName))}&restrict_sr=t`
    fetch(url)
      .then((res) => res.json())
      .then(({ data: { children } }) => {
        addResults(children)
      })
  })
}

export default (setResults) => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const tab = tabs[0]
    chrome.tabs.sendMessage(
      tab.id,
      { action: 'GET_TXT_IN_DOM', selector: '#productTitle' },
      search(setResults),
    )
  })
}
