const formatNewMessage = (user, message) => {
  const timeStamp = Date.now();
  return {
    userId: user.id,
    username: user.username,
    text: message,
    timeStamp,
  };
};

module.exports = {
  formatNewMessage,
};