export default ({ onSuccess, onFailure }) => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const tab = tabs[0]
    chrome.tabs.sendMessage(
      tab.id,
      { action: 'GET_TXT_IN_DOM', selectors: ['#productTitle', '#nav-subnav .nav-a-content:first'] },
      ([productName, productCategory]) => (
        productName
          ? onSuccess(productName, productCategory)
          : onFailure()
      ),
    )
  })
}
