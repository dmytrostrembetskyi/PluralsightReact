import React, { useContext } from "react";
// import withData from "./withData";
//import SpeakerRenderProps from "./SpeakersRenderProps";
import SpeakerContext from './SpeakerContext';

const Speakers = () => {
  const speakers = useContext(SpeakerContext);
  return (
    <div>
      {speakers.map(({ imageSrc, name }) => (
        <img src={`/images/${imageSrc}.png`} alt={name} key={imageSrc}></img>
      ))}
    </div>
  );
};

// const Speakers = () => {
//   return (
//     <SpeakerRenderProps>
//       {({ speakers }) => {
//         return (
//           <div>
//             {speakers.map(({ imageSrc, name }) => {
//               return (
//                 <img
//                   src={`/images/${imageSrc}.png`}
//                   alt={name}
//                   key={imageSrc}
//                 ></img>
//               );
//             })}
//           </div>
//         );
//       }}
//     </SpeakerRenderProps>
//   );
// };

// const maxSpeakersToshow = 2;
// export default withData(maxSpeakersToshow)(Speakers);

export default Speakers;
