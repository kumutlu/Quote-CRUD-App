import React from "react";
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { deleteQuote, setCurrent } from '../../actions/quoteActions';

import M from "materialize-css/dist/js/materialize.min.js";

const QuoteItem = ({ quote, deleteQuote, setCurrent }) => {
  const onDelete = () => {
    deleteQuote(quote.id);
    M.toast({ html: "Quote Deleted" });
  };

  return (
    <li className="collection-item">
      <div>
        <a
          href="#edit-quote-modal"
          className= "modal-trigger"
          onClick={() => setCurrent(quote)}
        >
          "{quote.quoteText}"
        </a>
        <br />
        <span className="grey-text">
          <span className="black-text">{quote.quoteAuthor}</span>
        </span>
        <a href="#!" onClick={onDelete} className="secondary-content">
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

QuoteItem.propTypes = {
  quote: PropTypes.object.isRequired,
  deleteQuote: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired
};


export default connect(
  null,
  { deleteQuote, setCurrent }
)(QuoteItem);
