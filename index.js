"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App() {
  return _react.default.createElement("div", null, "Hello World");
};

var _default = App;
exports.default = _default;
"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _App = _interopRequireDefault(require("./App"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

it('renders without crashing', function () {
  var div = document.createElement('div');

  _reactDom.default.render(_react.default.createElement(_App.default, null), div);

  _reactDom.default.unmountComponentAtNode(div);
});
"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

require("./index.css");

var _App = _interopRequireDefault(require("./App"));

var serviceWorker = _interopRequireWildcard(require("./serviceWorker"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom.default.render(_react.default.createElement(_App.default, null), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA


serviceWorker.unregister();
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.register = register;
exports.unregister = unregister;
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
var isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));

function register(config) {
  if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    // The URL constructor is available in all browsers that support SW.
    var publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);

    if (publicUrl.origin !== window.location.origin) {
      // Our service worker won't work if PUBLIC_URL is on a different origin
      // from what our page is served on. This might happen if a CDN is used to
      // serve assets; see https://github.com/facebook/create-react-app/issues/2374
      return;
    }

    window.addEventListener('load', function () {
      var swUrl = "".concat(process.env.PUBLIC_URL, "/service-worker.js");

      if (isLocalhost) {
        // This is running on localhost. Let's check if a service worker still exists or not.
        checkValidServiceWorker(swUrl, config); // Add some additional logging to localhost, pointing developers to the
        // service worker/PWA documentation.

        navigator.serviceWorker.ready.then(function () {
          console.log('This web app is being served cache-first by a service ' + 'worker. To learn more, visit https://bit.ly/CRA-PWA');
        });
      } else {
        // Is not localhost. Just register service worker
        registerValidSW(swUrl, config);
      }
    });
  }
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(function (registration) {
    registration.onupdatefound = function () {
      var installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = function () {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(function (error) {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl).then(function (response) {
    // Ensure service worker exists, and that we really are getting a JS file.
    var contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(function (registration) {
        registration.unregister().then(function () {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(function () {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(function (registration) {
      registration.unregister();
    });
  }
}
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var colorLookup = {
  get: function get(target, attr) {
    if (_typeof(target[attr]) === 'object' && target[attr] !== null) {
      return new Proxy(target[attr], colorLookup);
    } else if (attr in target) {
      return target[attr];
    } else {
      return attr;
    }
  }
};
var ColorSchemes = {
  base: {
    white: 'white',
    transparentWhite: 'rgba(256, 256, 256, 0)',
    transparentBlack: 'rgba(0, 0, 0, 1)'
  },
  atlanta: {
    primary: '#C4C4C4',
    secondary: '#910F1B',
    tertiary: '#323232'
  },
  boston: {
    primary: '#174B97',
    secondary: '#EFDF00',
    tertiary: '#000000'
  },
  chengdue: {
    primary: '#FFA000',
    secondary: '#BF926A',
    tertiary: '#161823'
  },
  dallas: {
    primary: '#032340',
    secondary: '#0072CE',
    tertiary: '#9EA2A2'
  },
  miami: {
    primary: '#FEDB00',
    secondary: '#AF272F',
    tertiary: '#000000'
  },
  lagladiators: {
    primary: '#3C1053',
    secondary: '#000000',
    tertiary: '#FFFFFF'
  },
  guangzhou: {
    primary: '#122C42',
    secondary: '#67A2B2',
    tertiary: '#0FEFD9'
  },
  houston: {
    primary: '#97DD00',
    secondary: '#000000',
    tertiary: '#FFFFFF'
  },
  hanzhou: {
    primary: '#FB7299',
    secondary: '#5788CE',
    tertiary: '#FFFFFF'
  },
  london: {
    primary: '#59CBE8',
    secondary: '#FF8200',
    tertiary: '#1C2B39'
  },
  newyork: {
    primary: '#171C38',
    secondary: '#0F57EA',
    tertiary: '#FF1C26'
  },
  paris: {
    primary: '#303D56',
    secondary: '#8D042D',
    tertiary: '#FFAA1D'
  },
  philidelphia: {
    primary: '#FF9E1B',
    secondary: '#000000',
    tertiary: '#FFFFFF'
  },
  seoul: {
    primary: '#000000',
    secondary: '#AA8A00',
    tertiary: '#FFFFFF'
  },
  sanfransisco: {
    primary: '#FC4C02',
    secondary: '#75787B',
    tertiary: '#CAB64B'
  },
  shanghai: {
    primary: '#D22630',
    secondary: '#000000',
    tertiary: '#FCE300'
  },
  toronto: {
    primary: '#000000',
    secondary: '#C10021',
    tertiary: '#91A1AF'
  },
  losangeles: {
    primary: '#4A7729',
    secondary: '#000000',
    tertiary: '#D9C756'
  },
  vancouver: {
    primary: '#09226B',
    secondary: '#2FB228',
    tertiary: '#FFFFFF'
  },
  washington: {
    primary: '#990034',
    secondary: '#003768',
    tertiary: '#FFFFFF'
  }
};

var _default = new Proxy(ColorSchemes, colorLookup);

exports.default = _default;
