import React from 'react';

const AddBtn = () => {
  return (
    <div className='fixed-action-btn'>
      <a
        href='#!'
        className='btn-floating btn-large blue darken-2 modal-trigger'
      >
        <i className='large material-icons'>add</i>
      </a>
      <ul>
        <li>
          <a
            href='#add-quote-modal'
            className='btn-floating green modal-trigger'
          >
            <i className='material-icons'>format_quote</i>
          </a>
        </li>
        
      </ul>
    </div>
  );
};

export default AddBtn;
