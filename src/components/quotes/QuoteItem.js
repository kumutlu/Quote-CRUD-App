import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteQuote, setCurrent } from "../../actions/quoteActions";

import M from "materialize-css/dist/js/materialize.min.js";

const QuoteItem = ({ quote, deleteQuote, setCurrent }) => {
  

  return (
    <li className="collection-item">
      <div>
        <span className="grey-text">
          <span className="blue-text">"{quote.quoteText}"</span>
        </span>
        <br />
        <span className="grey-text">
          <span className="black-text">-{quote.quoteAuthor}</span>
        </span>
        <div className="right">
          <a
            href="#edit-quote-modal"
            onClick={() => setCurrent(quote)}
            className="modal-trigger"
          >
            <i className="material-icons grey-text">edit </i>
          </a>
          <a
            href="#delete-quote-modal"
            onClick={() => setCurrent(quote)}
            className="modal-trigger"
          >
            <i className="material-icons grey-text">delete </i>
          </a>

        
        </div>
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
