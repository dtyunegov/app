import { Provider } from "react-redux"
import { IBrowser } from "../../browser/IBrowser"
import store from "./store"
import { Main } from "./pages/Main/Main"

type MainProps = {
  browser: IBrowser
}

export const RBO = ({browser}: MainProps) => {
      return (
        <Provider store={store}>
          <Main browser={browser}/>
      </Provider>
    )
  }