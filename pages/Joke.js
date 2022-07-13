import { useState } from 'react';
import getJoke from '../api/jokeData';

const Joke = () => {
  const [buttonText, setButtonText] = useState('Get A Joke');

  const [laughter, setLaughter] = useState('');

  const [showPunchline, setShowPunchline] = useState(false);

  const handleClick = async () => {
    if (buttonText === 'Get A Joke') {
      const jokeResponse = await getJoke();
      setLaughter(jokeResponse);
      setButtonText('Get Punchline');
    } else if (buttonText === 'Get Punchline') {
      setShowPunchline(true);
      setButtonText('Get Another Joke');
    } else if (buttonText === 'Get Another Joke') {
      setLaughter('');
      setShowPunchline(false);
      setButtonText('Get A Joke');
    }
  };

  return (
    <div
      className="text-center d-flex flex-column"
      style={{
        padding: '30px',
        margin: '0 auto',
      }}
    >
      <button type="button" className="jokeButton" onClick={handleClick}>{buttonText}</button>
      <p className="setup">{laughter.setup}</p>
      <p className="punchline">{showPunchline && laughter.delivery}</p>
    </div>
  );
};

export default Joke;
