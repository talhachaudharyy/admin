// messageService.js

const fetchMessages = async (token, receiverId) => {

    try {
      const requestOptions = {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "receiverId": receiverId
        })
      };
  
      const response = await fetch("http://3.111.55.38:4000/api/message/getMessages", requestOptions);
      const data = await response.json();
  
      if (data.status === "success") {
        return data.messages;
      } else {
        throw new Error(data.err);
      }
    } catch (error) {
      throw new Error('Error fetching messages:', error);
    }
  };
  
  export default fetchMessages;
  