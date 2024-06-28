// components/MessageBubble.js
import React from 'react';

const MessageBubble = ({ message, currentUser }) => {
  const isSentByCurrentUser = message.senderId === currentUser._id;

  return (
    <div className={`flex ${isSentByCurrentUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div className={isSentByCurrentUser ? 'ml-2' : 'mr-2'}>
        <div className={`flex max-w-96 ${isSentByCurrentUser ? 'bg-white text-black' : 'bg-indigo-500 text-white'} rounded-lg p-3 gap-3`}>
          <p>{message.text}</p>
        </div>
        <div className="w-9 h-9 rounded-full flex items-center justify-center mt-1">
          <img src={isSentByCurrentUser ? currentUser.profileImage : 'https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato'} 
               alt="Avatar" 
               className="w-8 h-8 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default MessageBubble;
