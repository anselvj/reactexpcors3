import logo from './logo.svg';
import './App.css';
import React, {useState,useEffect} from "react";

function App() {

  //const [data,setData] = React.useState(null);
  const [userData, setUserData] = useState(null);

  /*React.useEffect(() => {
    fetch('/users')
      .then((res) => res.json())
      .then((res) => setData(res.data))
      .catch(err => console.log(err));
  },[]); */

  useEffect(() => {
      const urlParams = new URLSearchParams(window.location.search);
      const id = urlParams.get('id');
      
      if (id) {
          fetch(`/users?id=${id}`)
              .then(response => {
                  if (!response.ok) {
                      throw new Error('User not found');
                  }
                  return response.json();
              })
              .then(data => setUserData(data))
              .catch(error => console.error('Error fetching user:', error));
      }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {userData ? (
                <div>
                    <h2>User Details</h2>
                    <p>Name: {userData.name}</p>
                    <p>Email: {userData.email}</p>
                    {/* Add more user details as needed */}
                </div>
            ) : (
                <p>Loading user data...</p>
          )}        
      </header>
    </div>
  );
}

export default App;
