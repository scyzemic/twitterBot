import Twitter from 'twitter';
import express from 'express';
import keys from '../config.js';
const app = express();
const port = process.env.port || 8300;

const twit = new Twitter({
  consumer_key: keys.TWITTER_CONSUMER_KEY,
  consumer_secret: keys.TWITTER_CONSUMER_SECRET,
  access_token_key: keys.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: keys.TWITTER_ACCESS_TOKEN_SECRET
});

const latestMentions = [];
const idStrings = {};

app.get('/*', (req, res) => {
  res.send('Hello World');
});

const server = app.listen(port, () => {
  console.log(`Basic server listening on ${port}`);
});

const tweetForJs = () => {
  twit.stream('statuses/filter', {
    track: 'TGA'
  }, (stream) => {
    stream.on('data', (tweet) => {
      const target = tweet.user.screen_name;
      twit.post('statuses/update', {
        status: `@${target} yeah yeah yeah!`
      }, (error, tweet) => {
        if (error) {
          console.error(error);
        } else {
          console.log(tweet);
        }
      });
    });

    stream.on('error', (error) => {
      console.log(error);
    });
  });
};

tweetForJs();

// const getMentions = () => {
//   twit.get('/statuses/mentions_timeline.json', { count: 10 },
//   (error, data) => {
//     if (error) {
//       console.error(error);
//     }
//
//     data.forEach(tweet => {
//       if (!idStrings[tweet.id_str]) {
//         idStrings[tweet.id_str] = true;
//         let tweetObj = {
//           user: tweet.user.screen_name,
//           text: tweet.text,
//         };
//         latestMentions.push(tweetObj);
//       }
//     });
//     replyToMentions();
//   });
// };
//
// const replyToMentions = () => {
//   latestMentions.forEach(mention => {
//     let response = `Hello @${mention.user}, what's poppin in the streets?!`;
//     twit.post('statuses/update', { status: response }, (error, tweet) => {
//       if (error) {
//         console.error(error);
//       } else {
//         console.log(tweet);
//       }
//     });
//   });
// };

// getMentions();
