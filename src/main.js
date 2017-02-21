import $ from 'jquery'

const displayResults = ({ data: { children } }) => {
  children.forEach(child => console.log(child.data.selftext))
}
const search = () => {
  const productTitle = $('#productTitle')
  if (!productTitle) {
    return
  }
  const encodedProductTitle = encodeURIComponent(productTitle.text())
  const url = `https://www.reddit.com/search.json?q=${encodedProductTitle}`
  fetch(url)
    .then((res) => res.json())
    .then(displayResults)
}

search()
