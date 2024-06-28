// components/ChatWindow.js
import React, { useState, useEffect } from 'react';
import ChatInput from './ChatInput';
import ChatMessage from './ChatMessage';

const ChatWindow = ({ user }) => {
  const [messages, setMessages] = useState([]);
  const chatId = localStorage.getItem('chatID');

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const token = localStorage.getItem('token');

        const requestOptions = {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            "recieverId": chatId
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
  }, [chatId]);

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
          <ChatMessage key={index} message={message} currentUser={user} />
        ))}
      </div>
      <ChatInput />
    </div>
  );
};

export default ChatWindow;
