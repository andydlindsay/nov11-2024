import {useEffect, useState} from 'react';
import axios from 'axios';

const useApplicationData = () => {
  const [videogames, setVideogames] = useState([]);

  useEffect(() => {
    axios.get('/api/videogames')
      .then((response) => {
        console.log(response.data);
        setVideogames(response.data);
      });
  }, []);

  return {
    videogames,
  };
};

export default useApplicationData;

// useEffect(() => {
//   fetch('/api/videogames')
//     .then((response) => response.json()) // convert the response to JS
//     .then((videogames) => {
//       console.log(videogames);
//       setVideogames(videogames);
//     });
// }, []);
