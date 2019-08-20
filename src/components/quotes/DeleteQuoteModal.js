import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteQuote, setCurrent } from "../../actions/quoteActions";
import M from "materialize-css/dist/js/materialize.min.js";

const DeleteQuoteModal = ({ current, quote, deleteQuote }) => {
  useEffect(() => {
    if (current) {
      setCurrent(current.quote);
    }
  }, [current]);

  const onDelete = () => {
    deleteQuote(quote.id);
    M.toast({ html: "Quote Deleted" });
  };

  return (
    <div id="delete-quote-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <div
          style={{
            marginRight: "10px",
            marginLeft: "10px",
            alignContent: "center"
          }}
        >
          <h5>Do You Want to Remove This Quote? </h5>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <div
          style={{
            marginRight: "30px",
            marginLeft: "30px",
            alignContent: "center"
          }}
        >
          <a
            href="#!"
            onClick={null}
            className="modal-close waves-effect blue waves-light btn"
          >
            Cancel
          </a>
          <span className="right">
            <a
              href="#!"
              onClick={onDelete}
              className="modal-close waves-effect red waves-light btn"
            >
              Delete
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

const modalStyle = {
  width: "25%",
  height: "18%"
};

DeleteQuoteModal.propTypes = {
  quote: PropTypes.object,
  deleteQuote: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    quote: state.quote.current
  };
};

export default connect(
  mapStateToProps,
  { deleteQuote }
)(DeleteQuoteModal);
