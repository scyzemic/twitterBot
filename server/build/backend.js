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

	eval("/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require(\"/Users/Gabriel2mD/Documents/Development/Projects/twitterBot/node_modules/react-hot-api/modules/index.js\"), RootInstanceProvider = require(\"/Users/Gabriel2mD/Documents/Development/Projects/twitterBot/node_modules/react-hot-loader/RootInstanceProvider.js\"), ReactMount = require(\"react/lib/ReactMount\"), React = require(\"react\"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {\n\n'use strict';\n\nvar _twitter = __webpack_require__(1);\n\nvar _twitter2 = _interopRequireDefault(_twitter);\n\nvar _express = __webpack_require__(2);\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _config = __webpack_require__(3);\n\nvar _config2 = _interopRequireDefault(_config);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar app = (0, _express2.default)();\nvar port = process.env.port || 8300;\n\nvar twit = new _twitter2.default({\n  consumer_key: _config2.default.TWITTER_CONSUMER_KEY,\n  consumer_secret: _config2.default.TWITTER_CONSUMER_SECRET,\n  access_token_key: _config2.default.TWITTER_ACCESS_TOKEN_KEY,\n  access_token_secret: _config2.default.TWITTER_ACCESS_TOKEN_SECRET\n});\n\nvar latestMentions = [];\nvar idStrings = {};\n\napp.get('/*', function (req, res) {\n  res.send('Hello World');\n});\n\nvar server = app.listen(port, function () {\n  console.log('Basic server listening on ' + port);\n});\n\nvar tweetForJs = function tweetForJs() {\n  twit.stream('statuses/filter', { track: 'TGA' }, function (stream) {\n    stream.on('data', function (tweet) {\n      var target = tweet.user.screen_name;\n      twit.post('statuses/update', { status: '@' + target + ' you need some friends man' }, function (error, tweet) {\n        if (error) {\n          console.error(error);\n        } else {\n          console.log(tweet);\n        }\n      });\n    });\n\n    stream.on('error', function (error) {\n      console.log(error);\n    });\n  });\n};\n\ntweetForJs();\n\n// const getMentions = () => {\n//   twit.get('/statuses/mentions_timeline.json', { count: 10 },\n//   (error, data) => {\n//     if (error) {\n//       console.error(error);\n//     }\n//\n//     data.forEach(tweet => {\n//       if (!idStrings[tweet.id_str]) {\n//         idStrings[tweet.id_str] = true;\n//         let tweetObj = {\n//           user: tweet.user.screen_name,\n//           text: tweet.text,\n//         };\n//         latestMentions.push(tweetObj);\n//       }\n//     });\n//     replyToMentions();\n//   });\n// };\n//\n// const replyToMentions = () => {\n//   latestMentions.forEach(mention => {\n//     let response = `Hello @${mention.user}, what's poppin in the streets?!`;\n//     twit.post('statuses/update', { status: response }, (error, tweet) => {\n//       if (error) {\n//         console.error(error);\n//       } else {\n//         console.log(tweet);\n//       }\n//     });\n//   });\n// };\n\n// getMentions();\n\n/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require(\"/Users/Gabriel2mD/Documents/Development/Projects/twitterBot/node_modules/react-hot-loader/makeExportsHot.js\"); if (makeExportsHot(module, require(\"react\"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error(\"Cannot not apply hot update to \" + \"server.js\" + \": \" + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvc2VydmVyLmpzPzI2OGQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0EsSUFBTSxNQUFNLHdCQUFOO0FBQ04sSUFBTSxPQUFPLFFBQVEsR0FBUixDQUFZLElBQVosSUFBb0IsSUFBcEI7O0FBRWIsSUFBTSxPQUFPLHNCQUFZO0FBQ3ZCLGdCQUFjLGlCQUFLLG9CQUFMO0FBQ2QsbUJBQWlCLGlCQUFLLHVCQUFMO0FBQ2pCLG9CQUFrQixpQkFBSyx3QkFBTDtBQUNsQix1QkFBcUIsaUJBQUssMkJBQUw7Q0FKVixDQUFQOztBQU9OLElBQU0saUJBQWlCLEVBQWpCO0FBQ04sSUFBTSxZQUFZLEVBQVo7O0FBRU4sSUFBSSxHQUFKLENBQVEsSUFBUixFQUFjLFVBQUMsR0FBRCxFQUFNLEdBQU4sRUFBYztBQUMxQixNQUFJLElBQUosQ0FBUyxhQUFULEVBRDBCO0NBQWQsQ0FBZDs7QUFJQSxJQUFNLFNBQVMsSUFBSSxNQUFKLENBQVcsSUFBWCxFQUFpQixZQUFNO0FBQ3BDLFVBQVEsR0FBUixnQ0FBeUMsSUFBekMsRUFEb0M7Q0FBTixDQUExQjs7QUFJTixJQUFNLGFBQWEsU0FBYixVQUFhLEdBQU07QUFDdkIsT0FBSyxNQUFMLENBQVksaUJBQVosRUFBK0IsRUFBRSxPQUFPLEtBQVAsRUFBakMsRUFBaUQsVUFBQyxNQUFELEVBQVk7QUFDM0QsV0FBTyxFQUFQLENBQVUsTUFBVixFQUFrQixVQUFDLEtBQUQsRUFBVztBQUMzQixVQUFNLFNBQVMsTUFBTSxJQUFOLENBQVcsV0FBWCxDQURZO0FBRTNCLFdBQUssSUFBTCxDQUFVLGlCQUFWLEVBQTZCLEVBQUUsY0FBWSxxQ0FBWixFQUEvQixFQUFpRixVQUFDLEtBQUQsRUFBUSxLQUFSLEVBQWtCO0FBQ2pHLFlBQUksS0FBSixFQUFXO0FBQ1Qsa0JBQVEsS0FBUixDQUFjLEtBQWQsRUFEUztTQUFYLE1BRU87QUFDTCxrQkFBUSxHQUFSLENBQVksS0FBWixFQURLO1NBRlA7T0FEK0UsQ0FBakYsQ0FGMkI7S0FBWCxDQUFsQixDQUQyRDs7QUFZM0QsV0FBTyxFQUFQLENBQVUsT0FBVixFQUFtQixVQUFDLEtBQUQsRUFBVztBQUM1QixjQUFRLEdBQVIsQ0FBWSxLQUFaLEVBRDRCO0tBQVgsQ0FBbkIsQ0FaMkQ7R0FBWixDQUFqRCxDQUR1QjtDQUFOOztBQW1CbkIiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUd2l0dGVyIGZyb20gJ3R3aXR0ZXInO1xuaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQga2V5cyBmcm9tICcuLi9jb25maWcuanMnO1xuY29uc3QgYXBwID0gZXhwcmVzcygpO1xuY29uc3QgcG9ydCA9IHByb2Nlc3MuZW52LnBvcnQgfHwgODMwMDtcblxuY29uc3QgdHdpdCA9IG5ldyBUd2l0dGVyKHtcbiAgY29uc3VtZXJfa2V5OiBrZXlzLlRXSVRURVJfQ09OU1VNRVJfS0VZLFxuICBjb25zdW1lcl9zZWNyZXQ6IGtleXMuVFdJVFRFUl9DT05TVU1FUl9TRUNSRVQsXG4gIGFjY2Vzc190b2tlbl9rZXk6IGtleXMuVFdJVFRFUl9BQ0NFU1NfVE9LRU5fS0VZLFxuICBhY2Nlc3NfdG9rZW5fc2VjcmV0OiBrZXlzLlRXSVRURVJfQUNDRVNTX1RPS0VOX1NFQ1JFVCxcbn0pO1xuXG5jb25zdCBsYXRlc3RNZW50aW9ucyA9IFtdO1xuY29uc3QgaWRTdHJpbmdzID0ge307XG5cbmFwcC5nZXQoJy8qJywgKHJlcSwgcmVzKSA9PiB7XG4gIHJlcy5zZW5kKCdIZWxsbyBXb3JsZCcpO1xufSk7XG5cbmNvbnN0IHNlcnZlciA9IGFwcC5saXN0ZW4ocG9ydCwgKCkgPT4ge1xuICBjb25zb2xlLmxvZyhgQmFzaWMgc2VydmVyIGxpc3RlbmluZyBvbiAke3BvcnR9YCk7XG59KTtcblxuY29uc3QgdHdlZXRGb3JKcyA9ICgpID0+IHtcbiAgdHdpdC5zdHJlYW0oJ3N0YXR1c2VzL2ZpbHRlcicsIHsgdHJhY2s6ICdUR0EnIH0sIChzdHJlYW0pID0+IHtcbiAgICBzdHJlYW0ub24oJ2RhdGEnLCAodHdlZXQpID0+IHtcbiAgICAgIGNvbnN0IHRhcmdldCA9IHR3ZWV0LnVzZXIuc2NyZWVuX25hbWU7XG4gICAgICB0d2l0LnBvc3QoJ3N0YXR1c2VzL3VwZGF0ZScsIHsgc3RhdHVzOiBgQCR7dGFyZ2V0fSB5b3UgbmVlZCBzb21lIGZyaWVuZHMgbWFuYCB9LCAoZXJyb3IsIHR3ZWV0KSA9PiB7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUubG9nKHR3ZWV0KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBzdHJlYW0ub24oJ2Vycm9yJywgKGVycm9yKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfSk7XG4gIH0pO1xufTtcblxudHdlZXRGb3JKcygpO1xuXG4vLyBjb25zdCBnZXRNZW50aW9ucyA9ICgpID0+IHtcbi8vICAgdHdpdC5nZXQoJy9zdGF0dXNlcy9tZW50aW9uc190aW1lbGluZS5qc29uJywgeyBjb3VudDogMTAgfSxcbi8vICAgKGVycm9yLCBkYXRhKSA9PiB7XG4vLyAgICAgaWYgKGVycm9yKSB7XG4vLyAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbi8vICAgICB9XG4vL1xuLy8gICAgIGRhdGEuZm9yRWFjaCh0d2VldCA9PiB7XG4vLyAgICAgICBpZiAoIWlkU3RyaW5nc1t0d2VldC5pZF9zdHJdKSB7XG4vLyAgICAgICAgIGlkU3RyaW5nc1t0d2VldC5pZF9zdHJdID0gdHJ1ZTtcbi8vICAgICAgICAgbGV0IHR3ZWV0T2JqID0ge1xuLy8gICAgICAgICAgIHVzZXI6IHR3ZWV0LnVzZXIuc2NyZWVuX25hbWUsXG4vLyAgICAgICAgICAgdGV4dDogdHdlZXQudGV4dCxcbi8vICAgICAgICAgfTtcbi8vICAgICAgICAgbGF0ZXN0TWVudGlvbnMucHVzaCh0d2VldE9iaik7XG4vLyAgICAgICB9XG4vLyAgICAgfSk7XG4vLyAgICAgcmVwbHlUb01lbnRpb25zKCk7XG4vLyAgIH0pO1xuLy8gfTtcbi8vXG4vLyBjb25zdCByZXBseVRvTWVudGlvbnMgPSAoKSA9PiB7XG4vLyAgIGxhdGVzdE1lbnRpb25zLmZvckVhY2gobWVudGlvbiA9PiB7XG4vLyAgICAgbGV0IHJlc3BvbnNlID0gYEhlbGxvIEAke21lbnRpb24udXNlcn0sIHdoYXQncyBwb3BwaW4gaW4gdGhlIHN0cmVldHM/IWA7XG4vLyAgICAgdHdpdC5wb3N0KCdzdGF0dXNlcy91cGRhdGUnLCB7IHN0YXR1czogcmVzcG9uc2UgfSwgKGVycm9yLCB0d2VldCkgPT4ge1xuLy8gICAgICAgaWYgKGVycm9yKSB7XG4vLyAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuLy8gICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgY29uc29sZS5sb2codHdlZXQpO1xuLy8gICAgICAgfVxuLy8gICAgIH0pO1xuLy8gICB9KTtcbi8vIH07XG5cbi8vIGdldE1lbnRpb25zKCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NlcnZlci9zZXJ2ZXIuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9");

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
/***/ function(module, exports, __webpack_require__) {

	eval("/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require(\"/Users/Gabriel2mD/Documents/Development/Projects/twitterBot/node_modules/react-hot-api/modules/index.js\"), RootInstanceProvider = require(\"/Users/Gabriel2mD/Documents/Development/Projects/twitterBot/node_modules/react-hot-loader/RootInstanceProvider.js\"), ReactMount = require(\"react/lib/ReactMount\"), React = require(\"react\"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {\n\n'use strict';\n\nmodule.exports = {\n  TWITTER_CONSUMER_KEY: 'GPu2qgS5H2Yg9klZDnHIu9FHF',\n  TWITTER_CONSUMER_SECRET: 'sMJel22d8m4CCZ8wpjoLchtxn1JyaJriR5SKdpdXKnqkFmSUHV',\n  TWITTER_ACCESS_TOKEN_KEY: '4880241673-OZQqmRvJcawVeDBSDLUxsUossYNw25CsHx6ImmZ',\n  TWITTER_ACCESS_TOKEN_SECRET: 'QRu1JEOXw3yu6GQDdH8tA36guleCoXsgA6j1kjbXLWJcH'\n};\n\n/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require(\"/Users/Gabriel2mD/Documents/Development/Projects/twitterBot/node_modules/react-hot-loader/makeExportsHot.js\"); if (makeExportsHot(module, require(\"react\"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error(\"Cannot not apply hot update to \" + \"config.js\" + \": \" + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb25maWcuanM/NjkyNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxPQUFQLEdBQWlCO0FBQ2Ysd0JBQXNCLDJCQUF0QjtBQUNBLDJCQUF5QixvREFBekI7QUFDQSw0QkFBMEIsb0RBQTFCO0FBQ0EsK0JBQTZCLCtDQUE3QjtDQUpGLEMiLCJmaWxlIjoiMy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0ge1xuICBUV0lUVEVSX0NPTlNVTUVSX0tFWTogJ0dQdTJxZ1M1SDJZZzlrbFpEbkhJdTlGSEYnLFxuICBUV0lUVEVSX0NPTlNVTUVSX1NFQ1JFVDogJ3NNSmVsMjJkOG00Q0NaOHdwam9MY2h0eG4xSnlhSnJpUjVTS2RwZFhLbnFrRm1TVUhWJyxcbiAgVFdJVFRFUl9BQ0NFU1NfVE9LRU5fS0VZOiAnNDg4MDI0MTY3My1PWlFxbVJ2SmNhd1ZlREJTRExVeHNVb3NzWU53MjVDc0h4NkltbVonLFxuICBUV0lUVEVSX0FDQ0VTU19UT0tFTl9TRUNSRVQ6ICdRUnUxSkVPWHczeXU2R1FEZEg4dEEzNmd1bGVDb1hzZ0E2ajFramJYTFdKY0gnLFxufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vY29uZmlnLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }
/******/ ]);