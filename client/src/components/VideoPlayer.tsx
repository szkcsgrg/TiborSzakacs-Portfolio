import React, { useState, useRef, useEffect } from "react";
// import { Timeout } from "timers";
import videoSrc from "../assets/landing/Sunbabiez-Mulholland.mp4"; // This will be imported from the API Side.
import {Link} from "react-router-dom";

interface VideoPlayerProps {
  src: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [volume, setVolume] = useState<number>(0); // Default volume
  // const DEFAULT_VOLUME = 0.2; // Define your default volume here
//   let previousVolume = DEFAULT_VOLUME; // Initialize previousVolume with default volume
//   const [mutedVolume, setMutedVolume] = useState<number | null>(null); // Store volume before muting
//   const [showVolumeControls, setShowVolumeControls] = useState(false);
//   const [hideVolumeControlsTimeout, setHideVolumeControlsTimeout] = useState<ReturnType<typeof setTimeout> | null>(null); // Timeout for hiding volume controls
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;

    const handlePlay = () => {
      setIsPlaying(true);
    };

    const handlePause = () => {
      setIsPlaying(false);
    };

    if (video) {
      video.addEventListener("play", handlePlay);
      video.addEventListener("pause", handlePause);
      video.muted = true;
    }

    return () => {
      if (video) {
        video.removeEventListener("play", handlePlay);
        video.removeEventListener("pause", handlePause);
      }
    };
  }, []);

//   const togglePlayPause = () => {
//     const video = videoRef.current;
//     if (video) {
//       if (video.paused) {
//         video.play();
//         setIsPlaying(true);
//       } else {
//         video.pause();
//         setIsPlaying(false);
//       }
//     }
//   };

//   const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     event.stopPropagation();
//     const video = videoRef.current;
//     const newVolume = parseFloat(event.target.value);
//     if (video) {
//       video.volume = newVolume;
//       setVolume(newVolume);
//       previousVolume = newVolume;
//     }
//   };

//   const handleVolumeMute = (event: React.MouseEvent<HTMLButtonElement>) => {
//     event.stopPropagation();
//     const video = videoRef.current;
//     if (video) {
//       if (video.volume === 0) {
//         // Unmute
//         const newVolume = mutedVolume !== null ? mutedVolume : DEFAULT_VOLUME;
//         video.volume = newVolume;
//         setVolume(newVolume);
//         setMutedVolume(null);
//       } else {
//         // Mute
//         setMutedVolume(video.volume); // Store current volume before muting
//         video.volume = 0;
//         setVolume(0);
//       }
//     }
//   };

//   const handleVolumeControlsClick = (event: React.MouseEvent<HTMLDivElement>) => {
//     event.stopPropagation(); // Prevent click event from propagating to the parent video element
//   };

//   const handleMouseEnter = () => {
//     setShowVolumeControls(true);
//     if (hideVolumeControlsTimeout) {
//       clearTimeout(hideVolumeControlsTimeout);
//     }
//   };

//   const handleMouseLeave = () => {
//     setHideVolumeControlsTimeout(
//       setTimeout(() => setShowVolumeControls(false), 10000) // Delay hiding volume controls by 500 milliseconds
//     );
//   };

  return (
    <div
      className="fix-ios-17-vid-scroll position-relative"
    //   onMouseEnter={handleMouseEnter} // Show volume controls on mouse enter
    //   onMouseLeave={handleMouseLeave} // Hide volume controls on mouse leave
    //   onTouchStart={handleMouseEnter}
    //   onTouchEnd={handleMouseLeave}
    //   onClick={togglePlayPause}
    >
      <video
        className="video-container"
        ref={videoRef}
        src={videoSrc}
        autoPlay
        loop
        muted={volume === 0}
        playsInline // IOS requirements
      >
        Your browser does not support the video tag.
      </video>
      <Link className="youtube position-absolute bottom-0 end-0 m-5 text-end" target="_BLANK" to="https://www.youtube.com/watch?v=A5x3XJ8aI58">
        Sunbabiez - Mulholland drive <br /> drawing by Tibor Szakács
      </Link>
      {/* {showVolumeControls && (
        <div className="volume-controls d-flex flex-column position-absolute" onClick={handleVolumeControlsClick}>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={(event) => {
                event.stopPropagation();
                handleVolumeChange(event);
            }}
          />
          <button className="volume-icon" onClick={handleVolumeMute}>
            {volume === 0 ? (
                <i className="bi bi-volume-mute-fill"></i>
            ) : (
                <i className="bi bi-volume-up-fill"></i>
            )}
          </button>
        </div>
      )} */}
    </div>
  );
};

export default VideoPlayer;
