import { useEffect, useState } from "react";
import { useData } from "../../contexts/DataContext";
import { getMonth } from "../../helpers/Date";

import "./style.scss";

const Slider = () => {
  const { data } = useData();
  const [index, setIndex] = useState(0);
  const byDateDesc = data?.focus.sort((evtA, evtB) =>
  // changing < to > to display the last element first
    new Date(evtA.date) > new Date(evtB.date) ? -1 : 1
  );
  // const nextCard = () => {
  //   setTimeout(
  //     () => setIndex(index < byDateDesc.length ? index + 1 : 0),
  //     5000
  //   );
  // };
  // useEffect(() => {
  //   nextCard();
  // });
  const nextCard = () => {
    // last element of the array at a length index -1
    setIndex (index < byDateDesc.length - 1 ? index + 1 : 0);
  };
  
  useEffect(() => {
    // modification of useEffect to reset the effect on each manual slide change
    const interval = setTimeout(nextCard, 5000);
    return () => clearTimeout(interval);
  }, [nextCard]); 

  return (
    // removal of <> to have a main loop map and that radio button is associated with the slide
    <div className="SlideCardList">
      {byDateDesc?.map((event, idx) => (
        <div
          key={event.title}
          className={`SlideCard SlideCard--${
            index === idx ? "display" : "hide"
          }`}
        >
          <img src={event.cover} alt="forum" />
          <div className="SlideCard__descriptionContainer">
            <div className="SlideCard__description">
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              <div>{getMonth(new Date(event.date))}</div>
            </div>
          </div>
        </div>
      ))}
      <div className="SlideCard__paginationContainer">
        <div className="SlideCard__pagination">
          {byDateDesc?.map((eventBullet, radioIdx) => (
            <input
            // changing the key to a unique key
              key={`${eventBullet.title}`}
              type="radio"
              name="radio-button"
              data-testid="radio-button"
              checked={index === radioIdx}
              // added onchange to change the index value and display corresponding slide
              onChange={() => setIndex(radioIdx)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
