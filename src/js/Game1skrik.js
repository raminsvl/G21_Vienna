import React, { useState, useEffect } from 'react';
import '../css/Game1skrik.css';
import placeholderImage2 from '../bilder/MunchLogoSquare.png';
import { Link } from 'react-router-dom';

const Game1Skrik = () => {
  const [pieces, setPieces] = useState([]);
  const [randomPiece, setRandomPiece] = useState(null);
  const [showRandomPiece, setShowRandomPiece] = useState(false);
  const [isClickable, setIsClickable] = useState(false);
  const [selectedPiece, setSelectedPiece] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [score, setScore] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });
  const [gridItemWidth, setGridItemWidth] = useState(0);
  const [gridItemHeight, setGridItemHeight] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [isCorrectPieceClicked, setIsCorrectPieceClicked] = useState(false);
  const [playCount, setPlayCount] = useState(0);
  const [clicksLeft, setClicksLeft] = useState(5);
  const [isStartButtonDisabled, setIsStartButtonDisabled] = useState(false); // New state variable

  useEffect(() => {
    const image = new Image();
    //image.src = process.env.PUBLIC_URL + '../bilder/skrik.jpg';
    image.src = require('../bilder/munch3.jpg')
    image.onload = () => {
      setImageSize({ width: image.width, height: image.height });
      sliceImage(image);
    };
  }, [playCount]);

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

  useEffect(() => {
    if (!openModal) {
      setCurrentTime(0);
    }
  }, [openModal, totalTime]);

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

  const handleStartClick = () => {
    if (clicksLeft === 0 || isStartButtonDisabled) { // Check if the button is disabled
      return;
    }

    setShowRandomPiece(true);
    setIsClickable(true);
    setStartTime(Date.now());
    setCurrentTime(0);
    setClicksLeft((prevClicksLeft) => prevClicksLeft - 1);
    setPlayCount((prevPlayCount) => prevPlayCount + 1);
    setIsStartButtonDisabled(true); // Disable the start button
  };

  const handlePieceClick = (pieceIndex) => {
    if (!isClickable) return;

    setIsClickable(false); // Disable further clicking

    const endTime = Date.now();
    const timeElapsed = endTime - startTime;

    if (pieceIndex === selectedPiece) {
      const secondsElapsed = Math.floor(timeElapsed / 1000);
      const timePenalty = 0; // Additional penalty time for incorrect piece clicks

      const penalty = 0;
      const newTotalTime = totalTime + timeElapsed;
      const score = Math.max(0, 100000 - newTotalTime - penalty);

      setTotalTime(newTotalTime);
      setScore(score);
      setIsCorrectPieceClicked(true);
      setOpenModal(true);
    } else {
      const penalty = 5000; // Additional penalty time for incorrect piece clicks

      const newTotalTime = totalTime + timeElapsed;
      const score = Math.max(0, 100000 - newTotalTime - penalty);

      setTotalTime(newTotalTime);
      setScore(score);
      setIsCorrectPieceClicked(false);
      setOpenModal(true);
    }

    setIsStartButtonDisabled(false); // Enable the start button after a piece is selected
  };

  const closeModal = () => {
    setOpenModal(false);
    if (clicksLeft === 0) {
      setClicksLeft(5);
    }
  };

  return (
    <div>
      <div className="container">
        <div className="grid" style={{ width: imageSize.width / 2.5 }}>
          {pieces.map((piece, index) => {
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

        <div className="random-piece-container">
          <div
            className="random-piece-wrapper"
            style={{ width: imageSize.width / 3 / 2, height: imageSize.height / 3 / 2 }}
          >
            {showRandomPiece ? (
              <img src={randomPiece} alt="Random Piece" className="random-piece" />
            ) : (
              <img src={placeholderImage2} alt="Placeholder" className="placeholder" />
            )}
          </div>
        </div>

        <div className="button-container">
          <div className="timer-container">
            <div className="timer">Time:</div>
            <div className="time">{formatTime(currentTime)}</div>
          </div>

          {clicksLeft > 0 ? (
            <button onClick={handleStartClick} disabled={isStartButtonDisabled} className="BUTTON_START">
              Start ({clicksLeft} clicks left)
            </button>
          ) : (
            <Link to="/leaderboard" className="BUTTON_START">
              Go to Leaderboard
            </Link>
          )}

          <div className="score-container">
            <div className="scoreHeader">Total time:</div>
            <div className="score">{formatTime(totalTime)}</div>
          </div>
        </div>

        {openModal && (
          <div onClick={closeModal} className="overlayM">
            <div className="modalContainer">
              <div className="modalRight">
                <div className="content">
                  <div className="correctOrWrong">{isCorrectPieceClicked ? 'Correct!' : 'Wrong!'}</div>

                  <h1>{score}</h1>
                  <p>Score</p>

                  <br></br>
                  <br></br>

                  <h1>{formatTime(totalTime)}</h1>
                  <p>Your total time</p>
                </div>

                <div className="btnContainer">
                  <span className="BUTTON_CLOSE">Continue</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Game1Skrik;
