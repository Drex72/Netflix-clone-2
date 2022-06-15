import "./watch.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'; 
import { Link, useLocation } from "react-router-dom";

const Watch = () => {
    const location = useLocation();
    const movie = location.movie;
    return (
     <div className="watch">
        <Link to="/">
            <div className="back">
                <FontAwesomeIcon icon={faArrowLeft} />
                    Home
            </div>
        </Link>
            <video className="video" autoPlay progress controls src={movie.video} />
      </div>      
            
            
  )
}

export default Watch