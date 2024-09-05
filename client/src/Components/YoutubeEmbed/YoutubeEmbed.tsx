import React from 'react'
import './YoutubeEmbed.css';
interface Props {
    videoId:string
}

const YoutubeEmbed = (props: Props) => {
  const videoSrc = `https://www.youtube.com/embed/${props.videoId}`;

  return (
    <div className="video-responsive">
      <iframe
        src={videoSrc}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded YouTube Video"
      ></iframe>
    </div>
  );
}

export default YoutubeEmbed