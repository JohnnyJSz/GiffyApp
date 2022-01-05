import { Route, Link } from "wouter";
import Home from "pages/home";
import Detail from "pages/details";
import SearchResults from "pages/searchResults";
import { HOME, DETAILS, SEARCH_RESULTS } from "config/paths";
import StaticContext from "context/StaticContext";
import { GifsContextProvider } from "context/GifsContext";

import classes from "./App.module.css";

function App() {
  return (
    <StaticContext.Provider value={{ name: "jonathan", isProgrammer: true }}>
      <div className={classes.App}>
        <Link to={HOME}>
          <div className={classes.AppTitle}>
            <h1 className={classes.AppTitleText}>Giffy</h1>
          </div>
        </Link>
        <GifsContextProvider>
          <Route path={HOME} component={Home} />
          <Route path={SEARCH_RESULTS} component={SearchResults} />
          <Route path={DETAILS} component={Detail} />
        </GifsContextProvider>
      </div>
    </StaticContext.Provider>
  );
}

export default App;
