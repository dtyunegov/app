import { IBrowser } from "../IBrowser"

export default class Chrome implements IBrowser {
  openBrowser(url: string) {
    chrome.tabs.query({active: true, currentWindow:true}, () => {
      chrome.windows.create({
        url: url,
        incognito: true
      })
    })  
  }
} 

