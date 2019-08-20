import React  from 'react'

const QuoteForm = {

    render() {
        return (
            <div id={this.props.id} className="modal" style={modalStyle}>
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
        )
    }
}

const modalStyle = {
    width: "75%",
    height: "75%"
  };

export default QuoteForm