import { HashRouter } from "react-router-dom";
import { Router } from "./DefaultLayout/Routes";
import { ContextProvider } from "./Context/ContextProvider";

export function App() {
  return (
    <ContextProvider>
      <HashRouter basename="/">
        <Router />
      </HashRouter>
    </ContextProvider>
  );
}
