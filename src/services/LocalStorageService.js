const LocalStorageService = {
    setItem: (key, value) => {
      try {
        localStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
        console.error("Error setting item in local storage:", error);
      }
    },
    getItem: (key) => {
      try {
        const value = localStorage.getItem(key);
        return value ? JSON.parse(value) : null;
      } catch (error) {
        console.error("Error getting item from local storage:", error);
        return null;
      }
    },
    removeItem: (key) => {
      try {
        localStorage.removeItem(key);
      } catch (error) {
        console.error("Error removing item from local storage:", error);
      }
    },
  };
  
  export default LocalStorageService;
  