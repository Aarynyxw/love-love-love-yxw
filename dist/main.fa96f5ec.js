// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"epB2":[function(require,module,exports) {
var html = document.querySelector('#html');
var style = document.querySelector("#style");

var string = "\n/* hi\uFF0C\u81ED\u72D7\u2665\n * \u63A5\u4E0B\u6765\u6211\u8981\u9001\u4F60\u4E00\u4E2A\u5C0F\u5FC3\u5FC3\n * \u9996\u5148\u6211\u8981\u51C6\u5907\u4E00\u4E2A\u770B\u4E0D\u89C1\u7684\u5927\u76D2\u5B50\u6765\u88C5\u201C\u5C0F\u5FC3\u5FC3\u201D\n **/\n#heart {\n    width: 200px;\n    height: 170px;\n    \n}\n/* \u7136\u540E\u6211\u51C6\u5907\u4E00\u4E2A\u5FC3\u5FC3\u7684\u5DE6\u4E0A\u89D2 */\n#left {\n    background:red;\n    width: 100px;\n    height: 100px;\n    border-radius: 50%;\n    transform: rotate(45deg) translateX(21px)\n}\n/* \u63A5\u4E0B\u6765 \u51C6\u5907\u5FC3\u5FC3\u7684\u53F3\u4E0A\u89D2 */\n#right {\n    width: 100px;\n    height: 100px;\n    background:red;\n    border-radius: 50%;\n    transform: rotate(45deg) translateY(21px)\n}\n/* \u7136\u540E\u5728\u4E0B\u9762\u753B\u4E00\u4E2A\u6B63\u65B9\u5F62*/\n#bottom {\n    width: 100px;\n    height: 100px;\n    background:red;\n    transform: rotate(45deg);\n}\n/* \u7136\u540E\u6211\u8BA9\u8FD9\u4E2A\u201C\u5FC3\u52A8\u201D\u8D77\u6765 */\n#heart {\n    animation:heart 800ms infinite alternate;\n}\n@keyframes heart {\n    0% {\n        transform: scale(1.0);\n    }\n    100% {\n        transform: scale(1.3);\n    }\n}\n/*\n *okk\n *\u73B0\u5728\uFF0C\u4E00\u4E2A\u5C5E\u4E8E\u4F60\u7684\u5C0F\u5FC3\u5FC3\u5C31\u505A\u597D\u5566\n *\u2665\u7231\u4F60\u54E6\uFF01\u2665\n**/\n";
var string2 = "";
var n = 0;

var step = function step() {
    setTimeout(function () {
        if (string[n] === "\n") {
            string2 += "<br>";
        } else if (string[n] === " ") {
            string2 += "&nbsp;";
        } else {
            string2 += string[n];
        }
        html.innerHTML = string2;
        style.innerHTML = string.substring(0, n);
        window.scrollTo(0, 99999);
        html.scrollTo(0, 999);
        if (n < string.length - 1) {
            n += 1;
            step();
        }
    }, 50);
};
step();
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.fa96f5ec.map