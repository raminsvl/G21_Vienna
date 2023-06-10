import React from 'react';

const YourScoreInfo = (props) => {
  const { totalTime, score } = props.location.state;

  return (
    <div>
      <h1>Your Score Info</h1>
      <p>Total Time: {totalTime}</p>
      <p>Score: {score}</p>
      {/* Display other score information */}
    </div>
  );
};

export default YourScoreInfo;
