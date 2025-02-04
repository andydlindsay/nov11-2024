import {useParams, useNavigate, Navigate} from 'react-router';
import { useEffect } from 'react';

const Car = (props) => {
  const params = useParams(); // req.params
  console.log('params', params);

  const navigate = useNavigate();

  // if (!props.userId) {
  //   return <Navigate to="/about" />;
  // }

  useEffect(() => {
    setTimeout(() => {
      // navigate(-1);
      navigate('/about');
    }, 3000);
  }, []);

  // useEffect(() => {
  //   fetch(`/api/cars/${params.id}`)
  // }, [params.id]);

  // const car = getCarInfo(params.id);

  return (
    <div>
      <h2>Details about one car #{params.id}</h2>
    </div>
  );
};

export default Car;
