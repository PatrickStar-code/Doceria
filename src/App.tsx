import {HashRouter} from "react-router-dom"
import { Router } from "./DefaultLayout/Routes"

export function App() {

  return (
    <HashRouter basename="/">
      <Router />
    </HashRouter>
  )
}

