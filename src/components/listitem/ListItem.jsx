import "./listItem.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPlus } from '@fortawesome/free-solid-svg-icons'; 
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-regular-svg-icons'; 
import { useState } from "react";


const ListItem = ({index}) => {
  const [isHovered, setIsHovered] = useState(false);
  const trailer = "";

  return (
    <div className="listitem" style={{ left: isHovered && index * 225 - 50 + index * 2.5}} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <img src="https://upload.wikimedia.org/wikipedia/en/6/68/Young_Sheldon_title_card.png" alt="" />
      {/* Conditional rendering for the video: Video should render only when hovered over */}
      {
        isHovered && (

          <>
          <video src={trailer} autoPlay={true} loop></video>
        <div className="itemInfo">
          <div className="icons">
            <FontAwesomeIcon className="icon" icon={faPlay} />
            <FontAwesomeIcon className="icon"icon={faPlus} />
            <FontAwesomeIcon className="icon"icon={faThumbsUp} />
            <FontAwesomeIcon className="icon"icon={ faThumbsDown }/>
          </div>

          <div className="itemInfoTop">
            <span>1 hour 14 mins</span>
            <span className="limit">+16</span>
            <span>2017</span>
          </div>

          <div className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum dignissimos accusamus doloremque, facilis aperiam autem qui. Amet dolor minima iste.
          </div>
          <div className="genre">
            Comedy
          </div>
        </div>
        </>   
        )
      }
    </div>  
  )
}

export default ListItem