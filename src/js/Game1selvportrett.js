import React, { useState, useEffect } from 'react';
import '../css/Game1selvportrett.css';
import placeholderImage2 from '../bilder/MunchLogoSquare.png';

const Game1selvportrett = () => {
  const [pieces, setPieces] = useState([]);
  const [randomPiece, setRandomPiece] = useState(null);
  const [showRandomPiece, setShowRandomPiece] = useState(false);
  const [isClickable, setIsClickable] = useState(false);
  const [selectedPiece, setSelectedPiece] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [score, setScore] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });
  const [gridItemWidth, setGridItemWidth] = useState(0);
  const [gridItemHeight, setGridItemHeight] = useState(0);

  useEffect(() => {
    const image = new Image();
   // image.src = process.env.PUBLIC_URL + '/skrik.jpg';
    image.src = require('../bilder/munch1.jpg');
    image.onload = () => {
      setImageSize({ width: image.width, height: image.height });
      sliceImage(image);
    };
  }, []);

  useEffect(() => {
    let intervalId;
    if (startTime && isClickable) {
      intervalId = setInterval(() => {
        const elapsedTime = Date.now() - startTime;
        setCurrentTime(elapsedTime);
      }, 10);
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [startTime, isClickable]);

  const formatTime = (time) => {
    const milliseconds = time % 1000;
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / 1000 / 60) % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}.${milliseconds.toString().padStart(3, '0')}`;
  };

  const sliceImage = (image) => {
    const aspectRatio = image.width / image.height;
    const totalPieces = 9;
    const rows = 3;
    const cols = 3;
    
    const containerWidth = Math.floor(image.width);
    const containerHeight = Math.floor(image.height);
    
    const pieceWidth = Math.floor(containerWidth / cols);
    const pieceHeight = Math.floor(containerHeight / rows);
  
    const slicedPieces = [];
  
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
  
        canvas.width = pieceWidth;
        canvas.height = pieceHeight;
  
        context.drawImage(
          image,
          j * pieceWidth,
          i * pieceHeight,
          pieceWidth,
          pieceHeight,
          0,
          0,
          pieceWidth,
          pieceHeight
        );
  
        const dataURL = canvas.toDataURL('image/jpeg');
        slicedPieces.push(dataURL);
      }
    }
  
    setPieces(slicedPieces);
    const randomIndex = Math.floor(Math.random() * slicedPieces.length);
    setRandomPiece(slicedPieces[randomIndex]);
    setSelectedPiece(randomIndex);
    setGridItemWidth(pieceWidth);
    setGridItemHeight(pieceHeight);
  };
  

  const handleStartClick = (event) => {
    event.preventDefault();
    setShowRandomPiece(true);
    setIsClickable(true);
    setStartTime(Date.now());
    setCurrentTime(0);
  };

  const handlePieceClick = (pieceIndex) => {
    if (!isClickable) return;

    setIsClickable(false); // Disables further clicking
    if (pieceIndex === selectedPiece) {
      const endTime = Date.now();
      const timeElapsed = endTime - startTime;
      const secondsElapsed = Math.floor(timeElapsed / 1000);
      const score = 10 - secondsElapsed;
      setScore(score > 0 ? score : 0);
      alert(`CONGRATS! Your score: ${score}`);
    } else {
      setScore(0);
      alert('Wrong');
    }
  };

  return (
    <div>
      <div className="container">
        <div className="grid" style={{ width: imageSize.width }}>
          {pieces.map((piece, index) => {
            const aspectRatio = imageSize.width / imageSize.height;
            return (
              <div
                key={index}
                className={`grid-item ${selectedPiece === index ? 'selected' : ''}`}
                onClick={() => handlePieceClick(index)}
                
              >
                <img src={piece} alt={`Piece ${index}`} />
              </div>
            );
          })}
          
          <div className="overlay"></div>
        </div>

        
       
      
        
        
        <div className="random-piece-container" 
        // style={{ width: imageSize.width }}
        >
  <div className="random-piece-wrapper"
  
 style={{ width: imageSize.width/3/2, height: imageSize.height/3/2}}
  >
    {showRandomPiece ? (
      <img
        src={randomPiece} 
        alt="Random Piece"
        className="random-piece"
       
      />
    ) : (
      <img
        src={placeholderImage2}
        alt="Placeholder"
        className="placeholder"
        //style={{ width: '100%', height: gridItemHeight }}
        //style={{ width: gridItemWidth, height: gridItemHeight }}
      />
    )}
  </div>
</div>
          
        
        <div className="button-container">
        <div className="timer-container">
            <div className="timer">Time:</div>
            <div className="time">{formatTime(currentTime)}</div>
          </div>
          <a href="#" onClick={handleStartClick} className="BUTTON_START">
            Start
          </a>
          
          <div className="score-container">
            <div className="scoreHeader">Score:</div>
            <div className="score">{score}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game1selvportrett;
