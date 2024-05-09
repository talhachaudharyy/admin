import React, { useState } from 'react';
import { SendOutlined } from '@ant-design/icons';

const ChatInput = () => {
  const [inputText, setInputText] = useState('');

  const sendMessage = async () => {
    try {
      const token = localStorage.getItem('token');
      const recieverId = localStorage.getItem('chatID');
      const senderId = JSON.parse(localStorage.getItem('userData'))._id;
      
      const requestOptions = {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "recieverId": recieverId,
          "senderId": senderId,
          "text": inputText
        })
      };

      const response = await fetch("http://3.111.35.219/api/message/addMessage", requestOptions);
      const data = await response.json();
      console.log(data)
      
      if (data.status === "success") {
        console.log("Message sent successfully:", inputText);
        setInputText('');
      } else {
        console.error('Failed to send message:', data.err);
      }
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div className="w-full bg-transparent flex items-center justify-between border-t p-4">
      <input 
        type="text" 
        className="px-4 py-2 mr-2 border rounded-full focus:outline-none flex-grow" 
        placeholder="Type your message" 
        value={inputText} 
        onChange={(e) => setInputText(e.target.value)} 
      />
      <button 
        className="px-4 py-2 bg-customOrange bg-opacity-70 text-white rounded-full flex items-center justify-center focus:outline-none"
        onClick={sendMessage}
      >
        <SendOutlined style={{fontSize : '18px'}}/>
      </button>
    </div>
  );
};

export default ChatInput;
