// import React from 'react';
import Message from './Message';
import PropTypes from 'prop-types';

const ChatWindow = ({ messages }) => {
  return (
    <div className="chat-window">
      {messages.map((message, index) => (
        <Message
          key={index}
          message={message.text}
          isUser={message.isUser}
        />
      ))}
    </div>
  );
};
ChatWindow.propTypes = {
    messages: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string.isRequired,
        isUser: PropTypes.bool.isRequired,
      })
    ).isRequired,
  };

export default ChatWindow;
