import { urls } from "../../constants/Urls"
import { PersonForm } from "../../components/PersonForm/PersonForm"
import { Provider } from "react-redux"
import store from "../../store/index"
export const Main = () => {

  const openBrowser = (url: string) => {
    chrome.tabs.query({active: true, currentWindow:true}, () => {
      chrome.windows.create({
        url: url,
        incognito: true
      })
    })  
  }
      return (
        <Provider store={store}>
          <main>
            <PersonForm/>
            <div className="button__inner">
              <button className="open" onClick={() => openBrowser(urls)}>Открыть браузер</button>
            </div>
          </main>
      </Provider>
    )
  }