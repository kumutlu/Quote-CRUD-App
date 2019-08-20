import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import M from "materialize-css/dist/js/materialize.min.js";
import { updateQuote } from "../../actions/quoteActions";

const EditQuoteModal = ({ current, updateQuote }) => {
  const [quoteText, setQuoteText] = useState("");
  const [quoteAuthor, setQuoteAuthor] = useState("");

  useEffect(() => {
    if (current) {
      setQuoteText(current.quoteText);
      setQuoteAuthor(current.quoteAuthor);
    }
  }, [current]);

  const onSubmit = () => {
    if (quoteText === "" || quoteAuthor === "") {
      M.toast({ html: "Please enter a Quote and Author" });
    } else {
      const updQuote = {
        id: current.id,
        quoteText,
        quoteAuthor
      };

      updateQuote(updQuote);
      M.toast({ html: "Quote Updated" });

      // Clear Fields
      setQuoteText("");
      setQuoteAuthor("");
    }
  };

  return (
    <div id="edit-quote-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>Enter Quote</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="quoteText"
              value={quoteText}
              onChange={e => setQuoteText(e.target.value)}
            />
          </div>
        </div>

        <h4>Enter Author</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="authorText"
              value={quoteAuthor}
              onChange={e => setQuoteAuthor(e.target.value)}
            />
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

const modalStyle = {
  width: "75%",
  height: "75%"
};

EditQuoteModal.propTypes = {
  current: PropTypes.object,
  updateQuote: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    current: state.quote.current
  };
};

export default connect(
  mapStateToProps,
  { updateQuote }
)(EditQuoteModal);
