import { useState } from 'react';
import getJoke from '../api/jokeData';

const Joke = () => {
  const [buttonText, setButtonText] = useState('Get A Joke');

  const handleClick = () => {
    getJoke();
    if (buttonText === 'Get A Joke') {
      setButtonText('Get Punchline');
    } else if (buttonText === 'Get Punchline') {
      setButtonText('Get Another Joke');
    } else if (buttonText === 'Get Another Joke') {
      setButtonText('Get A Joke');
    }
  };

  return (
    <div
      className="text-center d-flex flex-column"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '210px',
        margin: '0 auto',
      }}
    >
      <button type="button" onClick={handleClick}>{buttonText}</button>
    </div>
  );
};

export default Joke;
