import React from "react";
import { connect } from "react-redux";
import { setCurrent } from "../../actions/quoteActions";

const AddBtn = ({ isSignedIn }) => {
  const renderAddBtn = () => {
    if (isSignedIn) {
      return (
        <div className="fixed-action-btn">
          <a
            href="#add-quote-modal"
            className="btn-floating btn-large blue darken-2 modal-trigger"
          >
            <i className="large material-icons">add</i>
          </a>
        </div>
      );
    }
  };

  return <div>{renderAddBtn()}</div>;
};

const mapStateToProps = state => {
  return {
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(
  mapStateToProps,
  { setCurrent }
)(AddBtn);
