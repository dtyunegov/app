import { Provider } from "react-redux"
import { IBrowser } from "../../browser/IBrowser"
import { Main } from "./pages/Main/Main"
import { store } from "./store"

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