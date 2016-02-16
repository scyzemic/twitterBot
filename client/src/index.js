import React from 'react';
import ReactDOM from 'react-dom';
import TweetInput from './components/tweet_Input.js';

const App = () => {
  return (
    <TweetInput />
  );
};

ReactDOM.render(<App />, document.querySelector('.container'));
