import React, { Fragment, useEffect } from "react";
import GoogleAuth from "./components/layout/GoogleAuth";
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
import DeleteQuoteModal from "./components/quotes/DeleteQuoteModal";

const App = () => {
  useEffect(() => {
    M.AutoInit();
  });
  return (
    <Provider store={store}>
      <Fragment>
        <SearchBar />
        <div className="right">
          <GoogleAuth />
        </div>
        <div className="container">
          <div>
            {" "}
            <AddBtn />{" "}
          </div>
          <div>
            <DeleteQuoteModal />
            <AddQuoteModal />
            <EditQuoteModal />
            <Quotes />
          </div>
        </div>
      </Fragment>
    </Provider>
  );
};

export default App;
