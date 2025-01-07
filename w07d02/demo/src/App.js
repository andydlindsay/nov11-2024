import './App.css';

import {useState} from 'react';

// import Header from './components/Header';
// import Counter from './components/Counter';
import Display from './components/Display';
import Button from './components/Button';

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
    console.log('state updated');
  };

  return (
    <div className="App">
      <h2>React State</h2>
      {/* <Header something="About Us" age="42" isLoggedIn={true}></Header> */}
      {/* <Counter /> */}
      <Display count={count} />
      <Button onClick={increment} label="Add One" />
      <Button onClick={() => alert('hello world')} label="Show Alert" />
    </div>
  );
};

export default App;
