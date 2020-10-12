import React, {useState} from 'react';
import './App.css';
import UserInput from './components/UserInput';
import UserOutput from './components/UserOutput';

function App() {
  const [username, setUsername] = useState("");

  function checkUsernameLength(username) {
    if ( username.length <= 50 ) {
      setUsername(username)
    }
  }

  return (
    <div className="App">
      <UserInput placeholder="Type Username..." value={username} onChange={({target}) => checkUsernameLength(target.value)}/>
      <UserOutput username={username}/>
    </div>
  );
}

export default App;
