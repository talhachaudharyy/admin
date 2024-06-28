// loginService.js

const handleLogin = async (email, password) => {
  try {
    const response = await fetch('http://3.111.55.38:4000/api/user/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    if (data.status === "success" && data.data) {
      const newToken = data.data.token;
      const userData = data.data; // Assuming user data is available in the response
      const userId = userData._id; // Extract the user _id
      
      localStorage.setItem('token', newToken);
      localStorage.setItem('userData', JSON.stringify(userData)); // Store user data in local storage
      localStorage.setItem('userId', userId); // Store user _id separately
      
      return { token: newToken, userData, userId };
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error logging in:', error);
    return null;
  }
};

export default handleLogin;
