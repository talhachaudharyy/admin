import React, { useState, useEffect } from 'react';
import ChatInput from './ChatInput';

const ChatWindow = ({ user }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const token = localStorage.getItem('token');
        const recieverId = localStorage.getItem('chatID');

        const requestOptions = {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            "recieverId": recieverId
          })
        };

        const response = await fetch("http://3.111.55.38:4000/api/message/getMessages", requestOptions);
        const data = await response.json();
        if (data.status === "success") {
          setMessages(data.messages);
        }
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };

    fetchMessages();
  }, []);

  return (
    <div className="w-full h-full flex flex-col">
      <div className="w-full bg-gray-200 flex items-center justify-between border-b p-4">
        <div className="flex items-center">
          <img src={user.profileImage} alt={user.fname} className="w-12 h-12 rounded-full mr-4" />
          <div>
            <p className="font-semibold">{user.fname} {user.lname}</p>
            <p className="text-gray-500 text-sm ml-2">{user.userType}</p>
          </div>
        </div>
      </div>
      <div className="h-screen overflow-y-auto p-4 pb-36 bg-gray-100">
        {messages.map((message, index) => (
          <div key={index} className={`flex ${message.senderId === user._id ? 'justify-start' : 'justify-end'} mb-4`}>
          {message.senderId === user._id && (
              <>
                <div className="w-9 h-9 rounded-full flex items-center justify-center mr-2">
                  <img src={user.profileImage} alt="Avatar" className="w-8 h-8 rounded-full" />
                </div>
                <div className="flex max-w-96 bg-white text-black rounded-lg p-3 gap-3">
                  <p>{message.text}</p>
                </div>
              </>
            )}
            {message.senderId !== user._id && (
              <>
                <div className="flex max-w-96 bg-indigo-500 text-white rounded-lg p-3 gap-3">
                  <p>{message.text}</p>
                </div>
                <div className="w-9 h-9 rounded-full flex items-center justify-center ml-2">
                  <img src="https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato" alt="Avatar" className="w-8 h-8 rounded-full" />
                </div>
              </>
            )}
          </div>
        ))}
      </div>
      <ChatInput />
    </div>
  );
};

export default ChatWindow;
