import {Link} from 'react-router';

const Cars = () => {
  return (
    <div>
      <h2>All the cars</h2>

      <Link to="/cars/1">Car #1</Link><br/>
      <Link to="/cars/2">Car #2</Link><br/>
      <Link to="/cars/3">Car #3</Link><br/>
      <Link to="/cars/4">Car #4</Link><br/>
    </div>
  );
};

export default Cars;
