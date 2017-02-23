import nameFormatter from './nameFormatter'

const BASE_URL = 'https://www.reddit.com'
const REDDIT_QUESTIONS = [
  (name) => name,
  // (name) => `what did you think of ${name}`,
  // (name) => `opinion on ${name}`,
  // (name) => `overated ${name}`,
  // (name) => `underrated ${name}`,
]

const SUBREDDIT_MAPPING = {
  Livres: '/r/books',
  'Movies & TV': '/r/movies',
}

export default (productTitle, productCategory, addResults) => {
  const productName = nameFormatter(productTitle)
  let subreddit = ''
  let params = ''
  if (productCategory) {
    subreddit = SUBREDDIT_MAPPING[productCategory] || ''
  }
  if (subreddit) {
    params = '&restrict_sr=t'
  }
  REDDIT_QUESTIONS.forEach((keywordBuilder) => {
    const url = `${BASE_URL}${subreddit}/search.json?q=${encodeURIComponent(keywordBuilder(productName))}${params}`
    fetch(url)
      .then((res) => res.json())
      .then(({ data: { children } }) => {
        addResults(children)
      })
  })
}
