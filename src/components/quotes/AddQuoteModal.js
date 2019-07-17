import React, { useState } from "react";
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { addQuote } from '../../actions/quoteActions';
import M from "materialize-css/dist/js/materialize.min.js";

const AddQuoteModal = ({ addQuote }) => {
  const [quoteText, setQuoteText] = useState("");
  const [quoteAuthor, setQuoteAuthor] = useState("");

  const onSubmit = () => {
    if (quoteText === "" || quoteAuthor === "") {
      M.toast({ html: "Please enter a Quote and Author" });
    } else {
      console.log(quoteText, quoteAuthor);
      const newQuote = {
        quoteText,
        quoteAuthor
      };

      addQuote(newQuote);

      M.toast({ html: "Quote added" });

      // Clear Fields
      setQuoteText("");
      setQuoteAuthor("");
    }
  };

  return (
    <div id="add-quote-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>Enter Quote</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="Quote"
              value={quoteText}
              onChange={e => setQuoteText(e.target.value)}
            />
            <label htmlFor="quoteText" className="active">
              Quote Text
            </label>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="Author"
              value={quoteAuthor}
              onChange={e => setQuoteAuthor(e.target.value)}
            />
            <label htmlFor="quoteAuthor" className="active">
              Quote Author
            </label>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a
          href="#!"
          onClick={onSubmit}
          className="modal-close waves-effect blue waves-light btn"
        >
          Enter
        </a>
      </div>
    </div>
  );
};

AddQuoteModal.propTypes = {
    addQuote: PropTypes.func.isRequired
  };

const modalStyle = {
  width: "75%",
  height: "75%"
};


export default connect(
    null,
    { addQuote }
  )(AddQuoteModal);
  
