import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import ChatWindow from '../components/ChatWindow';
import ChatModel from '../modules/chatModel';

const Chat = ({ user, onClick }) => {
    return (
        <div className="w-full flex items-center py-4 px-6 border-b cursor-pointer hover:text-slate-800 hover:bg-customOrange hover:bg-opacity-30" onClick={onClick}>
            <img src={user.profileImage} alt={`${user.fname} ${user.lname}`} className="w-12 h-12 rounded-full mr-4" />
            <div className="flex-grow">
                <p className="font-semibold">{`${user.fname} ${user.lname}`}</p>
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

const ChatPage = () => {
    const [chats, setChats] = useState([]);
    const [selectedChat, setSelectedChat] = useState(null);
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await ChatModel.fetchData();
            setChats(data);
        };

        fetchData();
    }, []);

    useEffect(() => {
        const fetchMessages = async () => {
            if (selectedChat) {
                try {
                    const token = localStorage.getItem('token');
                    const receiverId = selectedChat._id;
                    const response = await fetch("http://3.111.35.219/api/message/getMessages", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": `Bearer ${token}`,
                        },
                        body: JSON.stringify({ receiverId })
                    });
                    const data = await response.json();
                    if (data.status === "success") {
                        setMessages(data.messages);
                    }
                } catch (error) {
                    console.error('Error fetching messages:', error);
                }
            }
        };

        fetchMessages();
    }, [selectedChat]);

    return (
        <>
            <Sidebar />
            <div className="bg-white flex flex-col h-screen overflow-hidden">
                <div className="flex justify-center items-center bg-white border-b p-4">
                    <h1 className="text-xl font-semibold">Chats</h1>
                </div>
                <div className="flex w-auto flex-grow overflow-y-auto border-t">
                    <div className="min-w-max p-10 bg-white overflow-y-auto hide-scrollbar border-r">
                        <ChatList chats={chats} onChatClick={setSelectedChat} />
                    </div>
                    <div className="w-3/4 bg-white overflow-y-auto hide-scrollbar">
                        {selectedChat && <ChatWindow user={selectedChat} messages={messages} />}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChatPage;
