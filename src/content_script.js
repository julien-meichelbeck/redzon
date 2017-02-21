import $ from 'jquery'

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log('Message received', request)
  switch (request.action) {
    case 'GET_TXT_IN_DOM':
      sendResponse($(request.selector).text())
      break
    default:
  }
})
