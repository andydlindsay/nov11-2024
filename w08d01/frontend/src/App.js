import './App.css';

import VideogameList from './components/VideogameList';

import useApplicationData from './hooks/useApplicationData';

const App = () => {
  const { videogames } = useApplicationData();

  return (
    <div className="App">
      <h1>Does this work????</h1>
      <h2>Videogames</h2>
      <VideogameList videogames={videogames} />
    </div>
  );
};

export default App;
