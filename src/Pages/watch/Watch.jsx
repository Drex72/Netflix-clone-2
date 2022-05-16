import "./watch.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'; 

const Watch = () => {
  return (
      <div className="watch">
          <div className="back">
              <FontAwesomeIcon icon={faArrowLeft} />
              Home
          </div>
          <video className="video" autoPlay progress controls src="http://player.vimeo.com/external/85569724.sd.mp4?s=43df5df0d733011263687d20a47557e4"></video>
      </div>
  )
}

export default Watch