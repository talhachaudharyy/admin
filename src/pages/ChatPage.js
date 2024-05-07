import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';

// Chat component
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
  
// Chat list component
const ChatList = ({ chats, onChatClick }) => {
    return (
      <div className="w-full overflow-hidden bg-customYellow bg-opacity-40 rounded-lg my-3 space-y-4">
        {chats.map((chat, index) => (
          <Chat key={index} user={chat} onClick={() => onChatClick(chat)} />
        ))}
      </div>
    );
  };
  

// Chat window component
const ChatWindow = ({ user }) => {
    return (
      <div className="w-full h-full flex flex-col">
        <div className="w-full bg-gray-200 flex items-center justify-between border-b p-4">
          <div className="flex items-center">
            <img src={user.avatar} alt={user.name} className="w-12 h-12 rounded-full mr-4" />
            <p className="font-semibold">{user.name}</p>
          </div>
        </div>
        <div className="flex-grow p-4 overflow-y-auto">
          <div className="bg-gray-100 p-4 rounded-lg mb-4">
            <p>{user.name} : {user.lastMessage}</p>
            {/* More chat messages */}
          </div>
          {/* More chat messages */}
        </div>
        <div className="w-full bg-gray-200 flex items-center justify-between border-t p-4">
          <input type="text" className="px-4 py-2 mr-2 border rounded-full focus:outline-none flex-grow" placeholder="Type your message" />
          <button className="px-4 py-2 bg-blue-500 text-white rounded-full focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </button>
        </div>
      </div>
    );
  };
  
  
  
  const ChatPage = () => {
    // Dummy data
    const [chats, setChats] = useState([
      { id: 1, name: 'John Doe', avatar: 'https://randomuser.me/api/portraits/men/1.jpg', lastMessage: 'Hello, how are you?' },
      { id: 2, name: 'Jane Doe', avatar: 'https://randomuser.me/api/portraits/women/2.jpg', lastMessage: 'Hey there!' },
      { id: 3, name: 'Alice', avatar: 'https://randomuser.me/api/portraits/women/3.jpg', lastMessage: 'What are you up to?' },
      { id: 4, name: 'Bob', avatar: 'https://randomuser.me/api/portraits/men/4.jpg', lastMessage: 'See you later!' },
      // Dummy chat data for testing scroll
      ...Array.from({ length: 50 }, (_, index) => ({
        id: index + 5,
        name: 'User ' + (index + 5),
        avatar: 'https://via.placeholder.com/150',
        lastMessage: 'Dummy message ' + (index + 1),
      })),
    ]);
  
    const [selectedChat, setSelectedChat] = useState(null);
  
    // Function to handle chat click
    const handleChatClick = (chat) => {
      setSelectedChat(chat);
    };
  
    return (
      <>
          <Sidebar/>
          <div className="bg-white flex flex-col h-screen overflow-hidden">
        <div className="flex justify-center items-center bg-white border-b p-4">
          <h1 className="text-xl font-semibold">Chats</h1>
        </div>
        <div className="flex w-auto flex-grow overflow-y-auto">
          <div className="min-w-max p-10 bg-white overflow-y-auto hide-scrollbar">
            <ChatList chats={chats} onChatClick={handleChatClick} />
          </div>
          <div className="w-3/4 bg-white overflow-y-auto hide-scrollbar">
            {selectedChat && <ChatWindow user={selectedChat} />}
          </div>
        </div>
      </div>

      </>
        
    );
  };
  
  

export default ChatPage;
