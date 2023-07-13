import { useState } from 'react';
import './App.css';
import GetData from './GetData';
import Child from './Child';
// import GetData from './GetData';
import User from './User';

function App() {
  const [value, setValue] = useState(0)

  function increament() {
    setValue(value + 1)
  }

  return (
    <div className="App">
      <User />
      <GetData />
      <p>{`value is ${value}`}</p>
      <Child increament={increament} />
    </div>
  );

}

export default App;
