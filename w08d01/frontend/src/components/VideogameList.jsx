import Videogame from "./Videogame";

const VideogameList = (props) => {
  const videogamesMap = props.videogames.map((videogame) => {
    return (
      <Videogame 
        key={videogame.id}
        title={videogame.title}
        releaseYear={videogame.releaseYear}
        genre={videogame.genre}
      />
    );
  });

  return (
    <div>
      { videogamesMap }
    </div>
  );
};

export default VideogameList;
