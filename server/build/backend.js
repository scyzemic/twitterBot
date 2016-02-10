require("source-map-support").install();
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

	eval("'use strict';\n\nvar _twitter = __webpack_require__(1);\n\nvar _twitter2 = _interopRequireDefault(_twitter);\n\nvar _express = __webpack_require__(2);\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _config = __webpack_require__(3);\n\nvar _config2 = _interopRequireDefault(_config);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar app = (0, _express2.default)();\nvar port = process.env.port || 8300;\n\nvar twit = new _twitter2.default({\n  consumer_key: _config2.default.TWITTER_CONSUMER_KEY,\n  consumer_secret: _config2.default.TWITTER_CONSUMER_SECRET,\n  access_token_key: _config2.default.TWITTER_ACCESS_TOKEN_KEY,\n  access_token_secret: _config2.default.TWITTER_ACCESS_TOKEN_SECRET\n});\n\nvar latestMentions = [];\nvar idStrings = {};\n\napp.get('/*', function (req, res) {\n  res.send('Hello World');\n});\n\nvar server = app.listen(port, function () {\n  console.log('Basic server listening on ' + port);\n});\n\nvar tweetForJs = function tweetForJs() {\n  twit.stream('statuses/filter', { track: 'TGA' }, function (stream) {\n    stream.on('data', function (tweet) {\n      var target = tweet.user.screen_name;\n      twit.post('statuses/update', { status: '@' + target + ' you need some friends man' }, function (error, tweet) {\n        if (error) {\n          console.error(error);\n        } else {\n          console.log(tweet);\n        }\n      });\n    });\n\n    stream.on('error', function (error) {\n      console.log(error);\n    });\n  });\n};\n\ntweetForJs();\n\n// const getMentions = () => {\n//   twit.get('/statuses/mentions_timeline.json', { count: 10 },\n//   (error, data) => {\n//     if (error) {\n//       console.error(error);\n//     }\n//\n//     data.forEach(tweet => {\n//       if (!idStrings[tweet.id_str]) {\n//         idStrings[tweet.id_str] = true;\n//         let tweetObj = {\n//           user: tweet.user.screen_name,\n//           text: tweet.text,\n//         };\n//         latestMentions.push(tweetObj);\n//       }\n//     });\n//     replyToMentions();\n//   });\n// };\n//\n// const replyToMentions = () => {\n//   latestMentions.forEach(mention => {\n//     let response = `Hello @${mention.user}, what's poppin in the streets?!`;\n//     twit.post('statuses/update', { status: response }, (error, tweet) => {\n//       if (error) {\n//         console.error(error);\n//       } else {\n//         console.log(tweet);\n//       }\n//     });\n//   });\n// };\n\n// getMentions();\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvc2VydmVyLmpzPzI2OGQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUdBLElBQU0sTUFBTSx3QkFBTjtBQUNOLElBQU0sT0FBTyxRQUFRLEdBQVIsQ0FBWSxJQUFaLElBQW9CLElBQXBCOztBQUViLElBQU0sT0FBTyxzQkFBWTtBQUN2QixnQkFBYyxpQkFBSyxvQkFBTDtBQUNkLG1CQUFpQixpQkFBSyx1QkFBTDtBQUNqQixvQkFBa0IsaUJBQUssd0JBQUw7QUFDbEIsdUJBQXFCLGlCQUFLLDJCQUFMO0NBSlYsQ0FBUDs7QUFPTixJQUFNLGlCQUFpQixFQUFqQjtBQUNOLElBQU0sWUFBWSxFQUFaOztBQUVOLElBQUksR0FBSixDQUFRLElBQVIsRUFBYyxVQUFDLEdBQUQsRUFBTSxHQUFOLEVBQWM7QUFDMUIsTUFBSSxJQUFKLENBQVMsYUFBVCxFQUQwQjtDQUFkLENBQWQ7O0FBSUEsSUFBTSxTQUFTLElBQUksTUFBSixDQUFXLElBQVgsRUFBaUIsWUFBTTtBQUNwQyxVQUFRLEdBQVIsZ0NBQXlDLElBQXpDLEVBRG9DO0NBQU4sQ0FBMUI7O0FBSU4sSUFBTSxhQUFhLFNBQWIsVUFBYSxHQUFNO0FBQ3ZCLE9BQUssTUFBTCxDQUFZLGlCQUFaLEVBQStCLEVBQUUsT0FBTyxLQUFQLEVBQWpDLEVBQWlELFVBQUMsTUFBRCxFQUFZO0FBQzNELFdBQU8sRUFBUCxDQUFVLE1BQVYsRUFBa0IsVUFBQyxLQUFELEVBQVc7QUFDM0IsVUFBTSxTQUFTLE1BQU0sSUFBTixDQUFXLFdBQVgsQ0FEWTtBQUUzQixXQUFLLElBQUwsQ0FBVSxpQkFBVixFQUE2QixFQUFFLGNBQVkscUNBQVosRUFBL0IsRUFBaUYsVUFBQyxLQUFELEVBQVEsS0FBUixFQUFrQjtBQUNqRyxZQUFJLEtBQUosRUFBVztBQUNULGtCQUFRLEtBQVIsQ0FBYyxLQUFkLEVBRFM7U0FBWCxNQUVPO0FBQ0wsa0JBQVEsR0FBUixDQUFZLEtBQVosRUFESztTQUZQO09BRCtFLENBQWpGLENBRjJCO0tBQVgsQ0FBbEIsQ0FEMkQ7O0FBWTNELFdBQU8sRUFBUCxDQUFVLE9BQVYsRUFBbUIsVUFBQyxLQUFELEVBQVc7QUFDNUIsY0FBUSxHQUFSLENBQVksS0FBWixFQUQ0QjtLQUFYLENBQW5CLENBWjJEO0dBQVosQ0FBakQsQ0FEdUI7Q0FBTjs7QUFtQm5CIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHdpdHRlciBmcm9tICd0d2l0dGVyJztcbmltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IGtleXMgZnJvbSAnLi4vY29uZmlnLmpzJztcbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcbmNvbnN0IHBvcnQgPSBwcm9jZXNzLmVudi5wb3J0IHx8IDgzMDA7XG5cbmNvbnN0IHR3aXQgPSBuZXcgVHdpdHRlcih7XG4gIGNvbnN1bWVyX2tleToga2V5cy5UV0lUVEVSX0NPTlNVTUVSX0tFWSxcbiAgY29uc3VtZXJfc2VjcmV0OiBrZXlzLlRXSVRURVJfQ09OU1VNRVJfU0VDUkVULFxuICBhY2Nlc3NfdG9rZW5fa2V5OiBrZXlzLlRXSVRURVJfQUNDRVNTX1RPS0VOX0tFWSxcbiAgYWNjZXNzX3Rva2VuX3NlY3JldDoga2V5cy5UV0lUVEVSX0FDQ0VTU19UT0tFTl9TRUNSRVQsXG59KTtcblxuY29uc3QgbGF0ZXN0TWVudGlvbnMgPSBbXTtcbmNvbnN0IGlkU3RyaW5ncyA9IHt9O1xuXG5hcHAuZ2V0KCcvKicsIChyZXEsIHJlcykgPT4ge1xuICByZXMuc2VuZCgnSGVsbG8gV29ybGQnKTtcbn0pO1xuXG5jb25zdCBzZXJ2ZXIgPSBhcHAubGlzdGVuKHBvcnQsICgpID0+IHtcbiAgY29uc29sZS5sb2coYEJhc2ljIHNlcnZlciBsaXN0ZW5pbmcgb24gJHtwb3J0fWApO1xufSk7XG5cbmNvbnN0IHR3ZWV0Rm9ySnMgPSAoKSA9PiB7XG4gIHR3aXQuc3RyZWFtKCdzdGF0dXNlcy9maWx0ZXInLCB7IHRyYWNrOiAnVEdBJyB9LCAoc3RyZWFtKSA9PiB7XG4gICAgc3RyZWFtLm9uKCdkYXRhJywgKHR3ZWV0KSA9PiB7XG4gICAgICBjb25zdCB0YXJnZXQgPSB0d2VldC51c2VyLnNjcmVlbl9uYW1lO1xuICAgICAgdHdpdC5wb3N0KCdzdGF0dXNlcy91cGRhdGUnLCB7IHN0YXR1czogYEAke3RhcmdldH0geW91IG5lZWQgc29tZSBmcmllbmRzIG1hbmAgfSwgKGVycm9yLCB0d2VldCkgPT4ge1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyh0d2VldCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgc3RyZWFtLm9uKCdlcnJvcicsIChlcnJvcikgPT4ge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbnR3ZWV0Rm9ySnMoKTtcblxuLy8gY29uc3QgZ2V0TWVudGlvbnMgPSAoKSA9PiB7XG4vLyAgIHR3aXQuZ2V0KCcvc3RhdHVzZXMvbWVudGlvbnNfdGltZWxpbmUuanNvbicsIHsgY291bnQ6IDEwIH0sXG4vLyAgIChlcnJvciwgZGF0YSkgPT4ge1xuLy8gICAgIGlmIChlcnJvcikge1xuLy8gICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4vLyAgICAgfVxuLy9cbi8vICAgICBkYXRhLmZvckVhY2godHdlZXQgPT4ge1xuLy8gICAgICAgaWYgKCFpZFN0cmluZ3NbdHdlZXQuaWRfc3RyXSkge1xuLy8gICAgICAgICBpZFN0cmluZ3NbdHdlZXQuaWRfc3RyXSA9IHRydWU7XG4vLyAgICAgICAgIGxldCB0d2VldE9iaiA9IHtcbi8vICAgICAgICAgICB1c2VyOiB0d2VldC51c2VyLnNjcmVlbl9uYW1lLFxuLy8gICAgICAgICAgIHRleHQ6IHR3ZWV0LnRleHQsXG4vLyAgICAgICAgIH07XG4vLyAgICAgICAgIGxhdGVzdE1lbnRpb25zLnB1c2godHdlZXRPYmopO1xuLy8gICAgICAgfVxuLy8gICAgIH0pO1xuLy8gICAgIHJlcGx5VG9NZW50aW9ucygpO1xuLy8gICB9KTtcbi8vIH07XG4vL1xuLy8gY29uc3QgcmVwbHlUb01lbnRpb25zID0gKCkgPT4ge1xuLy8gICBsYXRlc3RNZW50aW9ucy5mb3JFYWNoKG1lbnRpb24gPT4ge1xuLy8gICAgIGxldCByZXNwb25zZSA9IGBIZWxsbyBAJHttZW50aW9uLnVzZXJ9LCB3aGF0J3MgcG9wcGluIGluIHRoZSBzdHJlZXRzPyFgO1xuLy8gICAgIHR3aXQucG9zdCgnc3RhdHVzZXMvdXBkYXRlJywgeyBzdGF0dXM6IHJlc3BvbnNlIH0sIChlcnJvciwgdHdlZXQpID0+IHtcbi8vICAgICAgIGlmIChlcnJvcikge1xuLy8gICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbi8vICAgICAgIH0gZWxzZSB7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKHR3ZWV0KTtcbi8vICAgICAgIH1cbi8vICAgICB9KTtcbi8vICAgfSk7XG4vLyB9O1xuXG4vLyBnZXRNZW50aW9ucygpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zZXJ2ZXIvc2VydmVyLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ },
/* 1 */
/***/ function(module, exports) {

	eval("module.exports = require(\"twitter\");\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0d2l0dGVyXCI/ZDIwMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiIxLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidHdpdHRlclwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwidHdpdHRlclwiXG4gKiogbW9kdWxlIGlkID0gMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ },
/* 2 */
/***/ function(module, exports) {

	eval("module.exports = require(\"express\");\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzXCI/ZDJkMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiIyLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiZXhwcmVzc1wiXG4gKiogbW9kdWxlIGlkID0gMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ },
/* 3 */
/***/ function(module, exports) {

	eval("'use strict';\n\nmodule.exports = {\n  TWITTER_CONSUMER_KEY: 'GPu2qgS5H2Yg9klZDnHIu9FHF',\n  TWITTER_CONSUMER_SECRET: 'sMJel22d8m4CCZ8wpjoLchtxn1JyaJriR5SKdpdXKnqkFmSUHV',\n  TWITTER_ACCESS_TOKEN_KEY: '4880241673-OZQqmRvJcawVeDBSDLUxsUossYNw25CsHx6ImmZ',\n  TWITTER_ACCESS_TOKEN_SECRET: 'QRu1JEOXw3yu6GQDdH8tA36guleCoXsgA6j1kjbXLWJcH'\n};\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb25maWcuanM/NjkyNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sT0FBUCxHQUFpQjtBQUNmLHdCQUFzQiwyQkFBdEI7QUFDQSwyQkFBeUIsb0RBQXpCO0FBQ0EsNEJBQTBCLG9EQUExQjtBQUNBLCtCQUE2QiwrQ0FBN0I7Q0FKRiIsImZpbGUiOiIzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFRXSVRURVJfQ09OU1VNRVJfS0VZOiAnR1B1MnFnUzVIMllnOWtsWkRuSEl1OUZIRicsXG4gIFRXSVRURVJfQ09OU1VNRVJfU0VDUkVUOiAnc01KZWwyMmQ4bTRDQ1o4d3Bqb0xjaHR4bjFKeWFKcmlSNVNLZHBkWEtucWtGbVNVSFYnLFxuICBUV0lUVEVSX0FDQ0VTU19UT0tFTl9LRVk6ICc0ODgwMjQxNjczLU9aUXFtUnZKY2F3VmVEQlNETFV4c1Vvc3NZTncyNUNzSHg2SW1tWicsXG4gIFRXSVRURVJfQUNDRVNTX1RPS0VOX1NFQ1JFVDogJ1FSdTFKRU9YdzN5dTZHUURkSDh0QTM2Z3VsZUNvWHNnQTZqMWtqYlhMV0pjSCcsXG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9jb25maWcuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9");

/***/ }
/******/ ]);