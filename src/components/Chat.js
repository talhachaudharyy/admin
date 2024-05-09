import React from 'react';

const Chat = ({ user, onClick }) => {
  return (
    <div className="w-full flex items-center py-4 px-6 border-b cursor-pointer hover:text-slate-800 hover:bg-customOrange hover:bg-opacity-30" onClick={onClick}>
      <img src={user.avatar} alt={user.name} className="w-12 h-12 rounded-full mr-4" />
      <div className="flex-grow">
        <p className="font-semibold">{user.name}</p>
        <p className="text-sm text-gray-600 truncate">{user.lastMessage}</p>
      </div>
    </div>
  );
};

const ChatList = ({ chats, onChatClick }) => {
  return (
    <div className="w-full overflow-hidden bg-customYellow bg-opacity-40 rounded-lg my-3 space-y-4">
      {chats.map((chat, index) => (
        <Chat key={index} user={chat} onClick={() => onChatClick(chat)} />
      ))}
    </div>
  );
};

export { Chat, ChatList };
