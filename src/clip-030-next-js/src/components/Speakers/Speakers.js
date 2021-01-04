import React from "react";
import withData from "./withData";

const Speakers = ({ speakers }) => {
  return (
    <div>
      {speakers.map(({ imageSrc, name }) => {
        return (
          <img src={`/images/${imageSrc}.png`} alt={name} key={imageSrc}></img>
        );
      })}
    </div>
  );
};

const maxSpeakersToshow = 2;
export default withData(maxSpeakersToshow)(Speakers);
