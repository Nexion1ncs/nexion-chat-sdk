const ChatComponent = ({ apiKey, theme = 'light' }) => {
  return {
    init: () => {
      console.log('Nexion Chat initialized with key:', apiKey);
      return 'Chat initialized successfully';
    }
  };
};

module.exports = { ChatComponent };