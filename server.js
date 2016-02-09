var Twitter = require('twitter');
var express = require('express');
var keys = require('./config');
var app = express();
var port = process.env.port || 8300;

var twit = new Twitter({
  consumer_key: keys.TWITTER_CONSUMER_KEY,
  consumer_secret: keys.TWITTER_CONSUMER_SECRET,
  access_token_key: keys.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: keys.TWITTER_ACCESS_TOKEN_SECRET,
});

var latestMentions = [];
var idStrings = {};

app.get('/*', function (req, res) {
  res.send('Hello World');
});

var server = app.listen(port, function () {
  console.log('Basic server listening on ' + port);
});

var tweetForJs = function () {
  twit.stream('statuses/filter', { track: 'TGA' }, function (stream) {
    stream.on('data', function (tweet) {
      var target = tweet.user.screen_name;
      twit.post('statuses/update', { status: '@' + target + ' I like talking about how awesome TGA is too!' }, function (error, tweet) {
        if (error) {
          console.error(error);
        } else {
          console.log(tweet);
        }
      });
    });

    stream.on('error', function (error) {
      console.log(error);
    });
  });
};

tweetForJs();

// var getMentions = function () {
//   twit.get('/statuses/mentions_timeline.json', { count: 10 },
//   function (error, data) {
//     if (error) {
//       console.error(error);
//     }
//
//     for (var i = 0; i < data.length; i++) {
//       var currentTweet = data[i];
//       if (!idStrings[currentTweet.id_str]) {
//         idStrings[currentTweet.id_str] = true;
//         var tweetObj = {
//           user: currentTweet.user.screen_name,
//           text: currentTweet.text,
//         };
//         latestMentions.push(tweetObj);
//       }
//     }
//
//     replyToMentions();

    // console.log(idStrings);
    // console.log(latestMentions);
  // });

// };

// var replyToMentions = function () {
//   for (var i = 0; i < latestMentions.length; i++) {
//     var currentMention = latestMentions[i];
//     var responseTweet = 'Hello @';
//     responseTweet += currentMention.user;
//     responseTweet += "\n what's poppin in the streets? \n-actual User...";
//     twit.post('statuses/update', { status: responseTweet }, function (error, tweet) {
//       if (error) {
//         console.error(error);
//       } else {
//         console.log(tweet);
//       }
//     });
//   }
// };

// getMentions();
