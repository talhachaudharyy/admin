// components/ChatMessage.js
import React from 'react';

const ChatMessage = ({ message, currentUser }) => {
  const isCurrentUser = message.senderId === currentUser._id;

  return (
    <div className={`flex ${isCurrentUser ? 'justify-end' : 'justify-start'} mb-4`}>
      {!isCurrentUser && (
        <div className="w-9 h-9 rounded-full flex items-center justify-center mr-2">
          <img src={message.senderProfileImage} alt="Avatar" className="w-8 h-8 rounded-full" />
        </div>
      )}
      <div className={`flex max-w-96 rounded-lg p-3 gap-3 ${isCurrentUser ? 'bg-white text-black' : 'bg-indigo-500 text-white'}`}>
        <p>{message.text}</p>
      </div>
      {isCurrentUser && (
        <div className="w-9 h-9 rounded-full flex items-center justify-center ml-2">
          <img src={currentUser.profileImage} alt="Avatar" className="w-8 h-8 rounded-full" />
        </div>
      )}
    </div>
  );
};

export default ChatMessage;
