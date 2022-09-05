import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import Counter from './components/Counter';
//import User from './components/User';
import Colors from './components/Colors';
import Form from './components/Form';
import Users from './components/Users';

function App() {
  const [isVisible, setisVisible] = useState(true); 


  return (
    <div className="App">
      {/*  <Form />*/}
      {/* {isVisible && <Counter />}
      <button onClick={()=> setisVisible(!isVisible)}>Göster/Gizle</button>
      */}

      {/*  <User /> */}
      {/*  <Colors /> */}
      <Users />
    </div>
  );
}

export default App;
