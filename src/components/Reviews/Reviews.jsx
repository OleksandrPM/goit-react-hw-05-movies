import { useParams } from 'react-router-dom';

export default Reviews;

function Reviews() {
  const { id } = useParams();
  console.log(id); //
  return <p>It`s Reviews</p>;
}
