import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { setCurrent } from "../../actions/quoteActions";

const QuoteItem = ({ quote, setCurrent, currentUserId }) => {
  const renderAdmin = quote => {
    if (quote.userId === currentUserId) {
      return (
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
      );
    }
  };

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

        {renderAdmin(quote)}
      </div>
    </li>
  );
};

QuoteItem.propTypes = {
  quote: PropTypes.object.isRequired,
  setCurrent: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    quotes: state.quotes,
    currentUserId: state.auth.userId
  };
};
export default connect(
  mapStateToProps,
  { setCurrent }
)(QuoteItem);
