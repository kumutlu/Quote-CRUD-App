import React, { Fragment, useEffect } from "react";
import SearchBar from "./components/layout/SearchBar";
import Quotes from "./components/quotes/Quotes";
import AddBtn from "./components/layout/AddBtn";
import AddQuoteModal from "./components/quotes/AddQuoteModal";
import EditQuoteModal from "./components/quotes/EditQuoteModal";
import { Provider } from "react-redux";
import store from "./store";

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./App.css";

const App = () => {
  useEffect(() => {
    M.AutoInit();
  });
  return (
    <Provider store={store}>
      <Fragment>
        <SearchBar />
        <div className="container">
          <AddBtn />
          <AddQuoteModal />
          <EditQuoteModal />
          <Quotes />
        </div>
      </Fragment>
      </Provider>
  );
};

export default App;