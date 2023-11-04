import React from 'react';
import './ScreenWithBackgroundColor.css';
import Button from '@mui/material/Button';
import NavBar from './NavBar';
import CardGrid from './CardGrid';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';


function ScreenWithBackgroundColor() {
  const buttonStyle = {
    backgroundColor: '#E50000',
    color: '#fff',
    padding: '10px 20px',
    borderRadius: '5px',
    bottom: '20px',
    right: '0px',
    left: '15px',
    zIndex: 2,
  };

  const overlayStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 1,
  };

  const bottomOverlayStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'absolute',
    bottom: '0',
    left: '0',
    width: '100%',
    height: '320px',
    zIndex: 2,
  };

  const topRightIconsStyle = {
    position: 'absolute',
    top: '50px',
    right: '200px',
    display: 'flex',
    gap: '30px',
    zIndex: 2,
  };

  const iconButtonStyle = {
    color: '#fff',
    cursor: 'pointer',
    transition: 'color 0s',
  };

  const handleIconHover = (e) => {
    e.target.style.color = '#E50000';
  };

  const handleIconLeave = (e) => {
    e.target.style.color = '#E50000';
  };

  const textOutsideOverlayStyle = {
    position: 'absolute',
    bottom: '250px',
    left: '50%',
    transform: 'translateX(-50%)',
    fontSize: '35px',
    color: '#fff',
    zIndex: 2,
  };

  const textOutsideOverlayStyle1 = {
    position: 'absolute',
    bottom: '220px',
    left: '50%',
    transform: 'translateX(-50%)',
    fontSize: '12px',
    color: '#83898b',
    zIndex: 2,
  };
  const textOutsideOverlayStyle2 = {
    position: 'absolute',
    bottom: '200px',
    left: '50%',
    transform: 'translateX(-50%)',
    fontSize: '12px',
    color: '#83898b',
    zIndex: 2,
  };
  const textOutsideOverlayStyle3 = {
    position: 'absolute',
    bottom: '180px',
    left: '50%',
    transform: 'translateX(-50%)',
    fontSize: '12px',
    color: '#83898b',
    zIndex: 2,
  };

  const vectorImageStyle = {
    position: 'absolute',
    top: '30px',
    left: '13%',
    transform: 'translateX(-50%)',
    zIndex: 2,
    width: '50px',
    height:'50px'

  };
  const playImageStyle = {
    position: 'absolute',
    top: '48px', 
    left: '13.05%',
    transform: 'translateX(-50%)',
    zIndex: 2,
    width: '13px',
    height:'13px'

  };
  const strImageStyle = {
    position: 'absolute',
    top: '45px', 
    left: '18.1%',
    transform: 'translateX(-50%)',
    zIndex: 2,
    width: '100px',
    height:'18px'

  };
  const bigImageStyle = {
    position: 'absolute',
    top: '130px', 
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 2,
    width: '270px',
    height:'270px'

  };
  const smallImageStyle = {
    position: 'absolute',
    top: '230px', 
    left: '50.5%',
    transform: 'translateX(-50%)',
    zIndex: 2,
    width: '65px',
    height:'65px'
  };
  return (
    <div className="screen">
      <CardGrid />
      <img
        src="/images/Vector.png"
        alt="Vector"
        style={vectorImageStyle}
      />
      <img
        src="/images/Play.png"
        alt="Vector"
        style={playImageStyle}
      />
      <img
        src="/images/StreamVibe.png"
        alt="Vector"
        style={strImageStyle}
      />
      <img
        src="/images/yo.png"
        alt="Vector"
        style={bigImageStyle}
      />
      <img
        src="/images/yo2.png"
        alt="Vector"
        style={smallImageStyle}
      />
      <div style={overlayStyle}></div>
      <div style={bottomOverlayStyle}></div>
      <div style={topRightIconsStyle}>
        <SearchIcon
          style={{ ...iconButtonStyle }}
          onMouseEnter={handleIconHover}
          onMouseLeave={handleIconLeave}
        />
        <NotificationsIcon
          style={{ ...iconButtonStyle }}
          onMouseEnter={handleIconHover}
          onMouseLeave={handleIconLeave}
        />
      </div>
      <div className="content">
        <NavBar />
      </div>
      <Button variant="contained" style={buttonStyle}>
      <PlayArrowIcon fontSize="medium" style={{ marginRight: '8px' }} />
        Start Watching Now
      </Button>
      <div style={textOutsideOverlayStyle}>The Best Streaming Experience</div>
      <div style={textOutsideOverlayStyle1}>
        StreamVibe is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere. With 
      </div>
      <div style={textOutsideOverlayStyle2}>
      StreamVibe, you can enjoy a wide variety of content, including the latest blockbusters, classic movies, popular TV shows, and more. 
      </div>
      <div style={textOutsideOverlayStyle3}>
      You can also create your own watchlists, so you can easily find the content you want to watch.
      </div>
    </div>
  );
}

export default ScreenWithBackgroundColor;
