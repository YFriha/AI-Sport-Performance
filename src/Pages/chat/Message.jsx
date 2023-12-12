// import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ message, isUser }) => {
  return (
    <div className={`message ${isUser ? 'user-message' : 'other-message'}`}>
      {message}
    </div>
  );
};

Message.propTypes = {
    message: PropTypes.string.isRequired,
    isUser: PropTypes.bool.isRequired,
  };

export default Message;
