import   { useState } from 'react';
// import './App.css';
import ChatWindow from './ChatWindow';
import MessageForm from './MessageForm';

function App() {
  const [messages, setMessages] = useState([]);

  const sendMessage = (message) => {
    setMessages([...messages, { text: message, isUser: true }]);
    // Simulate a response from the other side
    setTimeout(() => {
      setMessages([...messages, { text: "I'm a bot! 🤖", isUser: false }]);
    }, 1000);
  };

  return (
    <div className="App">
      <ChatWindow messages={messages} />
      <MessageForm onSendMessage={sendMessage} />
    </div>
  );
}

export default App;
