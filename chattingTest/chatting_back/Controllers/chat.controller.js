const Chat = require("../Models/chat");

const chatController = {};

chatController.saveChat = async (message, user) => {
  const newMessage = new Chat({
    chat: message,
    user: {
      id: user._id,
      name: user.name,
    },
  });
  return newMessage;
};
module.exports = chatController;
