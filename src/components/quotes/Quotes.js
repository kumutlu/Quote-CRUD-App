import React, { useEffect } from "react";
import { connect } from "react-redux";
import QuoteItem from "./QuoteItem";
import Preloader from "../layout/Preloader";
import PropTypes from "prop-types";
import { getQuotes } from "../../actions/quoteActions";

const Quotes = ({ quote: { quotes, loading }, getQuotes }) => {
  useEffect(() => {
    getQuotes();
  }, [getQuotes]);

  if (loading || quotes === null) {
    return <Preloader />;
  }

  return (
    <div>
      <ul className="collection with-header">
        <li className="collection-header">
          <h4 className="center">Quotes</h4>
        </li>
        {!loading && quotes.length === 0 ? (
          <p className="center">No quotes to show...</p>
        ) : (
          quotes.map(quote => <QuoteItem quote={quote} key={quote.id} />)
        )}
      </ul>
    </div>
  );
};

Quotes.propTypes = {
  quote: PropTypes.object.isRequired,
  getQuotes: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  quote: state.quote,
  currentUserId: state.auth.userId
});

export default connect(
  mapStateToProps,
  { getQuotes }
)(Quotes);
