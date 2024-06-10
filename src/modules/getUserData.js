import axios from 'axios';

const getUserData = async (token) => {
  try {
    const response = await axios.get('http://3.111.55.38:4000/api/admin/users', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};

export default getUserData;
