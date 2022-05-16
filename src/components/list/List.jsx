import "./list.scss";
import ListItem from "../listitem/ListItem"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'; 
import { useRef, useState } from "react";

const List = () => {
    
    //Create a state that stops the sliding when you reach the last item on either side
    const [slideNumber, setSlideNumber] = useState(0)
    const [isMoved, setIsMoved] = useState(false);

    
   
    // We'll use the useRef hook to select the arrows so as to determine direction

    const listRef = useRef()

    const handleClick = (direction) => {
        setIsMoved(true);
        let distance = listRef.current.getBoundingClientRect().x - 50
        if (direction === 'left' && slideNumber > 0) {
            setSlideNumber(slideNumber - 1)
            listRef.current.style.transform = `translateX(${230 + distance}px)`;
        }
        if (direction === 'right' && slideNumber < 5) {
            setSlideNumber(slideNumber + 1)
            listRef.current.style.transform = `translateX(${-230 + distance}px)`;
        }
        console.log(distance);
    }
  return (
      <div className="list">
          <span className="listTitle">Continue to watch</span>
          <div className="wrapper">
              <FontAwesomeIcon style={{display: !isMoved && "none"}} className="sliderArrow left" icon={faChevronLeft} onClick={() => handleClick('left')} />
              <div className="container" ref={listRef}>
                  <ListItem index={0}/>
                  <ListItem index={1} />
                  <ListItem index={2}/>
                  <ListItem index={3} />
                  <ListItem index={4}/>
                  <ListItem index={5}/>
                  <ListItem index={6}/>
                  <ListItem index={7}/>
                  <ListItem index={8}/>
                  <ListItem index={9}/>
              </div>
              <FontAwesomeIcon className="sliderArrow right" icon={faChevronRight} onClick={() => handleClick('right')} />
            </div>
      </div>
  )
}
export default List;