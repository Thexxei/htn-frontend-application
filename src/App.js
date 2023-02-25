import React, { useState } from "react";
import PhotoContextProvider from "./context/PhotoContext";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Header from "./components/Header";
import Item from "./components/Item";
import Search from "./components/Search";
import NotFound from "./components/NotFound";
import AuthContext from "./context/AuthContext";

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);
  // Prevent page reload, clear input, set URL and push history on submit
  const handleSubmit = (e, history, searchInput) => {
    e.preventDefault();
    e.currentTarget.reset();
    let url = `/search/${searchInput}`;
    history.push(url);
  };

  return (
    <AuthContext.Provider value={{ authenticated, setAuthenticated}}>
      <PhotoContextProvider>
        <BrowserRouter>
          <div className="container">
            <Route
              render={props => (
                <Header
                  handleSubmit={handleSubmit}
                  history={props.history}
                />
              )}
            />
            <Switch>
              <Route exact path="/" render={() => <Item searchTerm = "All"/>}/>
              <Route path="/workshop" render={() => <Item searchTerm="workshop" />}/>
              <Route path="/activity" render={() => <Item searchTerm="activity" />} />
              <Route path="/tech_talk" render={() => <Item searchTerm="tech_talk" />} />
              <Route
                path="/search/:searchInput"
                render={props => (
                  <Search searchTerm={props.match.params.searchInput} />
                )}
              />
              <Route component={NotFound} />
            </Switch>
          </div>
        </BrowserRouter>
      </PhotoContextProvider>
    </AuthContext.Provider>
  );
}

export default App;
