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

	var _twitter = __webpack_require__(1);

	var _twitter2 = _interopRequireDefault(_twitter);

	var _express = __webpack_require__(2);

	var _express2 = _interopRequireDefault(_express);

	var _config = __webpack_require__(3);

	var _config2 = _interopRequireDefault(_config);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var app = (0, _express2.default)();
	var port = process.env.port || 8300;

	var twit = new _twitter2.default({
	  consumer_key: _config2.default.TWITTER_CONSUMER_KEY,
	  consumer_secret: _config2.default.TWITTER_CONSUMER_SECRET,
	  access_token_key: _config2.default.TWITTER_ACCESS_TOKEN_KEY,
	  access_token_secret: _config2.default.TWITTER_ACCESS_TOKEN_SECRET
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
	      twit.post('statuses/update', { status: '@' + target + ' you need some friends man' }, function (error, tweet) {
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

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("twitter");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("express");

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