import { Link } from 'react-router-dom';
import '../SinglePage/singlePage.scss';

const SingleCharLayout = ({ name, description, img }) => {
  return (
    <div className="single-comic">
      <img src={img} alt="img"  className="single-comic__img" />
      <div className="single-comic__info">
        <h2 className="single-comic__name">{name}</h2>
        <p className="single-comic__descr">{description}</p>
      </div>
      <Link to="/marvel-app" className="single-comic__back">
        Back to all
      </Link>
    </div>
  );
};




export default SingleCharLayout;
