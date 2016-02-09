/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Twitter = __webpack_require__(1);
	var express = __webpack_require__(2);
	var keys = __webpack_require__(3);
	var app = express();
	var port = process.env.port || 8300;

	var twit = new Twitter({
	  consumer_key: keys.TWITTER_CONSUMER_KEY,
	  consumer_secret: keys.TWITTER_CONSUMER_SECRET,
	  access_token_key: keys.TWITTER_ACCESS_TOKEN_KEY,
	  access_token_secret: keys.TWITTER_ACCESS_TOKEN_SECRET
	});

	var latestMentions = [];
	var idStrings = {};

	app.get('/*', function (req, res) {
	  res.send('Hello World');
	});

	var server = app.listen(port, function () {
	  console.log('Basic server listening on ' + port);
	});

	var tweetForJs = function tweetForJs() {
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

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = commonjstwitter;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = commonjsexpress;

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	module.exports = {
	  TWITTER_CONSUMER_KEY: 'GPu2qgS5H2Yg9klZDnHIu9FHF',
	  TWITTER_CONSUMER_SECRET: 'sMJel22d8m4CCZ8wpjoLchtxn1JyaJriR5SKdpdXKnqkFmSUHV',
	  TWITTER_ACCESS_TOKEN_KEY: '4880241673-OZQqmRvJcawVeDBSDLUxsUossYNw25CsHx6ImmZ',
	  TWITTER_ACCESS_TOKEN_SECRET: 'QRu1JEOXw3yu6GQDdH8tA36guleCoXsgA6j1kjbXLWJcH'
	};

/***/ }
/******/ ]);