import './Videogame.css';

const Videogame = (props) => {
  return (
    <div className="videogame">
      <h2>Title: { props.title }</h2>
      <footer>
        <h3>Release Year: { props.releaseYear }</h3>
        <h3>Genre: { props.genre }</h3>
      </footer>
    </div>
  );
};

export default Videogame;
