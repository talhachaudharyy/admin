const ChatModel = {
    fetchData: async () => {
        try {
            const token = localStorage.getItem('token');
            const headersList = {
                "Accept": "*/*",
                "User-Agent": "Thunder Client (https://www.thunderclient.com)",
                "Authorization": `Bearer ${token}`
            };

            const response = await fetch("http://3.111.35.219/api/chat/userChats", {
                method: "GET",
                headers: headersList
            });

            const data = await response.json();
            // console.log(data)
            if (data.status === 'success') {
                const chats = data.populatedParticipants;

                // Save data in local storage
                localStorage.setItem('chats', JSON.stringify(chats));
                
                // Save only _id separately
                chats.forEach(chat => {
                    localStorage.setItem(`chatID`, chat._id);
                });

                return chats;
            }
            return [];
        } catch (error) {
            console.error('Error fetching chats:', error);
            return [];
        }
    }
};

export default ChatModel;
