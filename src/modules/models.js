// loginService.js

const handleLogin = async (email, password) => {
  try {
    const response = await fetch('http://3.111.35.219/api/user/login', {
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
      localStorage.setItem('token', newToken);
      localStorage.setItem('userData', JSON.stringify(userData)); // Store user data in local storage
      return { token: newToken, userData };
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error logging in:', error);
    return null;
  }
};

export default handleLogin;
