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
        height: '90vh',
        padding: '30px',
        maxWidth: '210px',
        margin: '0 auto',
      }}
    >
      <button type="button" onClick={handleClick}>{buttonText}</button>
      <p>{laughter.setup}</p>
      <p>{showPunchline && laughter.delivery}</p>
    </div>
  );
};

export default Joke;
