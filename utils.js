// Save data to localStorage
function saveData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }
  
  // Retrieve data from localStorage
  function getData(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
  }
  