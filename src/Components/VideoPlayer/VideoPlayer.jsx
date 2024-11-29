import { useRef } from "react";
import video from "../../assets/about.png";

const VideoPlayer = ({ platState, setPlatState }) => {
  const player = useRef(null);

  const closePlayer = (e) => {
    if(e.target === player.current){
        setPlatState(false)
    } 
  }

  return (
    <div ref={player} className={`video-player ${platState ? "" : "hide"}`}
    onClick={closePlayer}>
      <video src={video} autoPlay muted controls></video>
    </div>
  );
};

export default VideoPlayer;
