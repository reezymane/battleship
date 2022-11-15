"use strict";
(self["webpackChunkbattleship"] = self["webpackChunkbattleship"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/background.jpeg */ "./src/img/background.jpeg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*Removes padding and margin from all elements*/\n* {\n  padding: 0;\n  margin: 0;\n}\n\n/*Set page size and backround image*/\nhtml {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n/*Set page layout direction*/\nbody {\n  display: flex;\n  flex-direction: column;\n}\n\n.mainContainer {\n  flex: 1;\n  display: flex;\n}\n\nfooter {\n  width: 200px;\n}\n\ntd {\n  border: 1px solid white;\n}\n\nth,\ntd {\n  width: 30px;\n  height: 30px;\n}\n\n.dragAndDrop {\n  display: flex;\n  flex-direction: column;\n}\n\n.shipContainer {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n.shipInnerContainer {\n  display: flex;\n  gap: 20px;\n}\n\n.shipOuter {\n  border: 1px dotted greenyellow;\n  height: 30px;\n}\n\n#battleship1 {\n  width: 134px;\n}\n\ndiv[id^=\"destroyer\"] {\n  width: 100px;\n}\n\ndiv[id^=\"submarine\"] {\n  width: 66px;\n}\n\ndiv[id^=\"patrol\"] {\n  width: 30px;\n}\n\n.ship {\n  border: 2px solid greenyellow;\n  background-color: rgb(255, 255, 129);\n  height: 30px;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,+CAA+C;AAC/C;EACE,UAAU;EACV,SAAS;AACX;;AAEA,oCAAoC;AACpC;EACE,yDAA4C;EAC5C,4BAA4B;EAC5B,sBAAsB;AACxB;;AAEA,4BAA4B;AAC5B;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,OAAO;EACP,aAAa;AACf;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,uBAAuB;AACzB;;AAEA;;EAEE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,SAAS;AACX;;AAEA;EACE,8BAA8B;EAC9B,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,6BAA6B;EAC7B,oCAAoC;EACpC,YAAY;AACd","sourcesContent":["/*Removes padding and margin from all elements*/\n* {\n  padding: 0;\n  margin: 0;\n}\n\n/*Set page size and backround image*/\nhtml {\n  background-image: url(./img/background.jpeg);\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n/*Set page layout direction*/\nbody {\n  display: flex;\n  flex-direction: column;\n}\n\n.mainContainer {\n  flex: 1;\n  display: flex;\n}\n\nfooter {\n  width: 200px;\n}\n\ntd {\n  border: 1px solid white;\n}\n\nth,\ntd {\n  width: 30px;\n  height: 30px;\n}\n\n.dragAndDrop {\n  display: flex;\n  flex-direction: column;\n}\n\n.shipContainer {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n.shipInnerContainer {\n  display: flex;\n  gap: 20px;\n}\n\n.shipOuter {\n  border: 1px dotted greenyellow;\n  height: 30px;\n}\n\n#battleship1 {\n  width: 134px;\n}\n\ndiv[id^=\"destroyer\"] {\n  width: 100px;\n}\n\ndiv[id^=\"submarine\"] {\n  width: 66px;\n}\n\ndiv[id^=\"patrol\"] {\n  width: 30px;\n}\n\n.ship {\n  border: 2px solid greenyellow;\n  background-color: rgb(255, 255, 129);\n  height: 30px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clickAttack": () => (/* binding */ clickAttack),
/* harmony export */   "colorCoordinate": () => (/* binding */ colorCoordinate),
/* harmony export */   "createTable": () => (/* binding */ createTable),
/* harmony export */   "dragListener": () => (/* binding */ dragListener),
/* harmony export */   "dragOverListener": () => (/* binding */ dragOverListener),
/* harmony export */   "dropToGameboard": () => (/* binding */ dropToGameboard),
/* harmony export */   "shipIdentify": () => (/* binding */ shipIdentify)
/* harmony export */ });
/* harmony import */ var _factories__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factories */ "./src/factories.js");
/* harmony import */ var _gameModule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameModule */ "./src/gameModule.js");
/* eslint-disable no-restricted-syntax */
/* eslint-disable import/no-cycle */
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/* eslint-disable consistent-return */



// Allows ships to be dragged
const drag = (ev) => {
  ev.dataTransfer.setData("text", ev.target.id);
};

// Stores ***INFO*** when drag starts
const dragListener = (shipID) => {
  const ship = document.querySelector(shipID);
  ship.addEventListener("dragstart", drag);
};

// Prevents the browser default handling of the data
const dragOver = (ev) => {
  ev.preventDefault();
};

// Returns length of the ship being dropped
const shipIdentify = (ev) => {
  ev.preventDefault();
  const data = ev.dataTransfer.getData("text");
  let length;

  if (data.includes("battleship")) {
    length = 4;
  }

  if (data.includes("destroyer")) {
    length = 3;
  }

  if (data.includes("submarine")) {
    length = 2;
  }

  if (data.includes("patrolBoat")) {
    length = 1;
  }

  return { shipName: data, length };
};

// Adds dropped ships to player gameboard
const dropToGameboard = (ev, x, y, shipName, shipLength, direction) => {
  ev.preventDefault();

  // Iterates through object to place correct ship on gameboard, in correct direction
  if (direction === "right") {
    for (let i = 0; i < shipLength; i++) {
      for (const [key, value] of Object.entries(_factories__WEBPACK_IMPORTED_MODULE_0__.player1Ships)) {
        if (key === shipName) {
          _factories__WEBPACK_IMPORTED_MODULE_0__.player1.playerBoard.board[x][y] = value;
          y++;
        }
      }
    }
  }

  if (direction === "left") {
    for (let i = 0; i < shipLength; i++) {
      for (const [key, value] of Object.entries(_factories__WEBPACK_IMPORTED_MODULE_0__.player1Ships)) {
        if (key === shipName) {
          _factories__WEBPACK_IMPORTED_MODULE_0__.player1.playerBoard.board[x][y] = value;
          y--;
        }
      }
    }
  }

  if (direction === "down") {
    for (let i = 0; i < shipLength; i++) {
      for (const [key, value] of Object.entries(_factories__WEBPACK_IMPORTED_MODULE_0__.player1Ships)) {
        if (key === shipName) {
          _factories__WEBPACK_IMPORTED_MODULE_0__.player1.playerBoard.board[x][y] = value;
          x++;
        }
      }
    }
  }

  if (direction === "up") {
    for (let i = 0; i < shipLength; i++) {
      for (const [key, value] of Object.entries(_factories__WEBPACK_IMPORTED_MODULE_0__.player1Ships)) {
        if (key === shipName) {
          _factories__WEBPACK_IMPORTED_MODULE_0__.player1.playerBoard.board[x][y] = value;
          x--;
        }
      }
    }
  }
};

// Cells listen for items to be dragged over
const dragOverListener = () => {
  const gridCells = document.querySelectorAll(".p1Grid .cell");
  gridCells.forEach((cell) => {
    cell.addEventListener("dragover", dragOver);
  });
};

// Creates the first row of the table and names columns
const createColumnHeadings = (tableClass) => {
  const grid = document.querySelector(`.${tableClass}`);
  const row = document.createElement("tr");
  const emptyHeading = document.createElement("th");

  grid.appendChild(row);
  row.appendChild(emptyHeading);

  for (let i = 0; i < 10; i++) {
    const newHeading = document.createElement("th");
    newHeading.textContent = String.fromCharCode(65 + i);
    row.appendChild(newHeading);
  }
};

// Adds next row with heading and empty cells
const createRows = (tableClass) => {
  const grid = document.querySelector(`.${tableClass}`);

  for (let bigI = 0; bigI < 10; bigI++) {
    const row = document.createElement("tr");
    const heading = document.createElement("th");

    heading.textContent = bigI + 1;

    grid.appendChild(row);
    row.appendChild(heading);

    for (let littleI = 0; littleI < 10; littleI++) {
      const cell = document.createElement("td");

      cell.classList.add("cell");
      cell.setAttribute("data-x", bigI);
      cell.setAttribute("data-y", littleI);

      row.appendChild(cell);
    }
  }
};

// Adds table to p1Board div
const createTable = (boardClass, tableClass) => {
  const board = document.querySelector(boardClass);
  const table = document.createElement("table");

  table.classList.add(tableClass);
  board.appendChild(table);

  createColumnHeadings(tableClass);
  createRows(tableClass);
};

// Colors the grid space of given coordinate
const colorCoordinate = ([a, b]) => {
  const gridCells = document.querySelectorAll(".p1Grid .cell");

  gridCells.forEach((cell) => {
    if (cell.dataset.x === `${a}` && cell.dataset.y === `${b}`) {
      cell.style.backgroundColor = "yellow";
    }
  });
};

// Changes cell color when attacked
const colorOnAttack = (cell, hitStatus) => {
  if (hitStatus === "miss") {
    cell.style.backgroundColor = "tan";
    cell.textContent = "•";
  }

  if (hitStatus === "hit") {
    cell.style.backgroundColor = "pink";
    cell.style.border = "1px solid red";
    cell.style.color = "red";
    cell.textContent = "X";
  }
};

// Attacks gameboard and checks ships when coordinate clicked
const clickAttack = (
  playerAttacking,
  receivingAttack,
  tableClass,
  controller
) => {
  const gridSquares = document.querySelectorAll(`${tableClass} .cell`);

  gridSquares.forEach((cell) => {
    cell.addEventListener(
      "click",
      () => {
        if (_factories__WEBPACK_IMPORTED_MODULE_0__.currentTurn.playerName === playerAttacking.name) {
          // Sets coordinate values based on cell data
          const x = Number(cell.dataset.x);
          const y = Number(cell.dataset.y);

          if (!(0,_gameModule__WEBPACK_IMPORTED_MODULE_1__.wasCoordinateClicked)(playerAttacking, [x, y])) {
            // Adds coordinate to array of clicked coordinates
            playerAttacking.markedSpots.push([x, y]);

            const hitStatus = receivingAttack.playerBoard.receiveAttack([x, y]);

            colorOnAttack(cell, hitStatus);

            (0,_gameModule__WEBPACK_IMPORTED_MODULE_1__.whoseTurn)(hitStatus, playerAttacking, receivingAttack);

            (0,_gameModule__WEBPACK_IMPORTED_MODULE_1__.playerWin)(playerAttacking, receivingAttack, controller);

            (0,_gameModule__WEBPACK_IMPORTED_MODULE_1__.computerClick)(playerAttacking, receivingAttack, [x, y], hitStatus);
          }
        }
      },
      { signal: controller.signal }
    );
  });
};




/***/ }),

/***/ "./src/factories.js":
/*!**************************!*\
  !*** ./src/factories.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "currentTurn": () => (/* binding */ currentTurn),
/* harmony export */   "gameboard": () => (/* binding */ gameboard),
/* harmony export */   "hitOrMiss": () => (/* binding */ hitOrMiss),
/* harmony export */   "player": () => (/* binding */ player),
/* harmony export */   "player1": () => (/* binding */ player1),
/* harmony export */   "player1Ships": () => (/* binding */ player1Ships),
/* harmony export */   "player2": () => (/* binding */ player2),
/* harmony export */   "player2Ships": () => (/* binding */ player2Ships),
/* harmony export */   "ship": () => (/* binding */ ship)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* eslint-disable no-plusplus */
/* eslint-disable import/no-cycle */
/* eslint-disable consistent-return */


// Determines if an attack hits or misses
const hitOrMiss = (inCoordinate) => {
  if (inCoordinate === 0) return "miss";

  if (inCoordinate === 1) return "alreadyHit";

  return "hit";
};

// Creates ships to place on gameboard
const ship = (length) => ({
  length,
  hitAmount: 0,
  sunk: false,
  hit() {
    this.hitAmount += 1;
  },
  isSunk() {
    if (this.hitAmount === this.length) {
      this.sunk = true;
    }
  }
});

// Creates a gameboard
const gameboard = () => ({
  board: [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ],
  // Marks attacks on gameboard
  receiveAttack([a, b]) {
    const inCoordinate = this.board[a][b];
    const hitStatus = hitOrMiss(inCoordinate);

    if (hitStatus === "hit") {
      inCoordinate.hit();
      inCoordinate.isSunk();
    } else if (hitStatus === "miss") {
      this.board[a][b] = 1;
    }

    return hitStatus;
  },
  // Checks if all ships are sunk
  allSunk([a, b]) {
    if (a > 9) {
      return true;
    }

    if (b < 10) {
      const inCoordinate = this.board[a][b];

      if (typeof inCoordinate !== "object") {
        return this.allSunk([a, b + 1]);
      }

      if (inCoordinate.sunk === false) {
        return false;
      }

      return this.allSunk([a, b + 1]);
    }

    if (b > 9) {
      return this.allSunk([a + 1, 0]);
    }
  },
  // Runs a function to color grid space if
  // it contains a ship
  colorGameboardShips([a, b]) {
    if (a > 9) {
      return;
    }

    if (b < 10) {
      const inCoordinate = this.board[a][b];

      if (typeof inCoordinate !== "object") {
        return this.colorGameboardShips([a, b + 1]);
      }

      (0,_dom__WEBPACK_IMPORTED_MODULE_0__.colorCoordinate)([a, b]);

      return this.colorGameboardShips([a, b + 1]);
    }

    if (b > 9) {
      return this.colorGameboardShips([a + 1, 0]);
    }
  },
  // Checks if there are enough spaces right/left/down/up for a ship
  enoughSpaces(xCoord, yCoord, shipLength, direction) {
    // If coordinate is off the board, return false
    if (xCoord < 10 && xCoord > -1 && yCoord < 10 && yCoord > -1) {
      const inCoordinate = this.board[xCoord][yCoord];

      // If a ship is already in coordinate, return false
      if (typeof inCoordinate === "object") {
        return false;
      }

      // If full length of ship is reached, return true
      if (shipLength === 1) {
        return true;
      }

      // Check next coordinate in given direction
      if (direction === "right") {
        return this.enoughSpaces(xCoord, yCoord + 1, shipLength - 1, direction);
      }

      if (direction === "left") {
        return this.enoughSpaces(xCoord, yCoord - 1, shipLength - 1, direction);
      }

      if (direction === "down") {
        return this.enoughSpaces(xCoord + 1, yCoord, shipLength - 1, direction);
      }

      if (direction === "up") {
        return this.enoughSpaces(xCoord - 1, yCoord, shipLength - 1, direction);
      }
    }

    return false;
  },
  // Returns true if coordinate is undefined or empty
  spaceEmpty(xCoord, yCoord) {
    if (xCoord < 10 && xCoord > -1 && yCoord < 10 && yCoord > -1) {
      if (this.board[xCoord][yCoord] === 0) {
        return true;
      }

      return false;
    }

    return true;
  },
  // Checks if there's enough space between ships set and ships being dropped
  spaceBetween(xCoord, yCoord, shipLength, direction) {
    // Checks if surrounding coordinates are empty/undefined
    const top = this.spaceEmpty(xCoord - 1, yCoord);
    const topRight = this.spaceEmpty(xCoord - 1, yCoord + 1);
    const right = this.spaceEmpty(xCoord, yCoord + 1);
    const bottomRight = this.spaceEmpty(xCoord + 1, yCoord + 1);
    const bottom = this.spaceEmpty(xCoord + 1, yCoord);
    const bottomLeft = this.spaceEmpty(xCoord + 1, yCoord - 1);
    const left = this.spaceEmpty(xCoord, yCoord - 1);
    const topLeft = this.spaceEmpty(xCoord - 1, yCoord - 1);

    // If any surrounding coordinates aren't empty, return false
    if (
      !(
        top &&
        topRight &&
        right &&
        bottomRight &&
        bottom &&
        bottomLeft &&
        left &&
        topLeft
      )
    ) {
      return false;
    }

    if (shipLength === 0) {
      return true;
    }

    // Check next coordinate in given direction
    if (direction === "right") {
      return this.spaceBetween(xCoord, yCoord + 1, shipLength - 1, direction);
    }

    if (direction === "left") {
      return this.spaceBetween(xCoord, yCoord - 1, shipLength - 1, direction);
    }

    if (direction === "down") {
      return this.spaceBetween(xCoord + 1, yCoord, shipLength - 1, direction);
    }

    if (direction === "up") {
      return this.spaceBetween(xCoord - 1, yCoord, shipLength - 1, direction);
    }
  }
});

// Creates a player and a gameboard for them
const player = (name) => ({
  name,
  playerBoard: gameboard(),
  markedSpots: []
});

// Dynamic object to track player turns
const currentTurn = {
  playerName: null
};

// Creates players and boards
const player1 = player("player1");
const player2 = player("Computer");

// Creates player1 ships
const player1Ships = {
  battleship1: ship(4),
  destroyer11: ship(3),
  destroyer12: ship(3),
  submarine11: ship(2),
  submarine12: ship(2),
  submarine13: ship(2),
  patrolBoat11: ship(1),
  patrolBoat12: ship(1),
  patrolBoat13: ship(1),
  patrolBoat14: ship(1)
};

// Creates player2 ships
const player2Ships = {
  battleship2: ship(4),
  destroyer21: ship(3),
  destroyer22: ship(3),
  submarine21: ship(2),
  submarine22: ship(2),
  submarine23: ship(2),
  patrolBoat21: ship(1),
  patrolBoat22: ship(1),
  patrolBoat23: ship(1),
  patrolBoat24: ship(1)
};




/***/ }),

/***/ "./src/gameModule.js":
/*!***************************!*\
  !*** ./src/gameModule.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "computerClick": () => (/* binding */ computerClick),
/* harmony export */   "playerWin": () => (/* binding */ playerWin),
/* harmony export */   "wasCoordinateClicked": () => (/* binding */ wasCoordinateClicked),
/* harmony export */   "whoseTurn": () => (/* binding */ whoseTurn)
/* harmony export */ });
/* harmony import */ var _factories__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factories */ "./src/factories.js");
/* eslint-disable import/no-cycle */
/* eslint-disable consistent-return */
/* eslint-disable no-plusplus */


// Checks if coordinate has been clicked already
const wasCoordinateClicked = (playerAttacking, [x, y]) => {
  for (let i = 0; i < playerAttacking.markedSpots.length; i++) {
    const spot = playerAttacking.markedSpots[i];

    if (spot[0] === x && spot[1] === y) {
      return true;
    }
  }

  return false;
};

// Determines which player goes next
const whoseTurn = (hitStatus, playerAttacking, receivingAttack) => {
  if (hitStatus === "hit") {
    _factories__WEBPACK_IMPORTED_MODULE_0__.currentTurn.playerName = playerAttacking.name;
  } else if (hitStatus === "alreadyHit") {
    _factories__WEBPACK_IMPORTED_MODULE_0__.currentTurn.playerName = playerAttacking.name;
  } else {
    _factories__WEBPACK_IMPORTED_MODULE_0__.currentTurn.playerName = receivingAttack.name;
  }
};

// Returns which player is 'Computer'
const whoIsComputer = (playerAttacking, receivingAttack) => {
  if (playerAttacking.name === "Computer") {
    return playerAttacking;
  }

  if (receivingAttack.name === "Computer") {
    return receivingAttack;
  }
};

// Selects correct cell to click
const correctCell = (x, y) => {
  const coordinate = document.querySelectorAll(".p1Grid .cell");
  coordinate.forEach((cell) => {
    if (Number(cell.dataset.x) === x && Number(cell.dataset.y) === y) {
      setTimeout(() => {
        cell.click();
      }, "2000");
    }
  });
};

// Sets new (randomX, randomY) if computer clicked coordinate already
const newRandomCoordinate = (
  playerAttacking,
  receivingAttack,
  randomX,
  randomY
) => {
  let x = randomX;
  let y = randomY;

  while (
    wasCoordinateClicked(whoIsComputer(playerAttacking, receivingAttack), [
      x,
      y
    ])
  ) {
    x = Math.floor(Math.random() * (9 - 0 + 1)) + 0;
    y = Math.floor(Math.random() * (9 - 0 + 1)) + 0;
  }

  correctCell(x, y);
};

// Attacks an adjacent cell if computer previously hit
const adjacentAttack = (
  playerAttacking,
  receivingAttack,
  [x, y],
  randomX,
  randomY
) => {
  // If adjacent cell is within gameboard and hasn't been clicked
  if (
    y + 1 >= 0 &&
    y + 1 <= 9 &&
    !wasCoordinateClicked(whoIsComputer(playerAttacking, receivingAttack), [
      x,
      y + 1
    ])
  ) {
    correctCell(x, y + 1);
  } else if (
    x - 1 >= 0 &&
    x - 1 <= 9 &&
    !wasCoordinateClicked(whoIsComputer(playerAttacking, receivingAttack), [
      x - 1,
      y
    ])
  ) {
    correctCell(x - 1, y);
  } else if (
    y - 1 >= 0 &&
    y - 1 <= 9 &&
    !wasCoordinateClicked(whoIsComputer(playerAttacking, receivingAttack), [
      x,
      y - 1
    ])
  ) {
    correctCell(x, y - 1);
  } else if (
    x + 1 >= 0 &&
    x + 1 <= 9 &&
    !wasCoordinateClicked(whoIsComputer(playerAttacking, receivingAttack), [
      x + 1,
      y
    ])
  ) {
    correctCell(x + 1, y);
  } else {
    newRandomCoordinate(playerAttacking, receivingAttack, randomX, randomY);
  }
};

// Chooses a coordinate for Computer's turn
const computerClick = (playerAttacking, receivingAttack, [x, y], hitStatus) => {
  if (_factories__WEBPACK_IMPORTED_MODULE_0__.currentTurn.playerName === "Computer") {
    const randomX = Math.floor(Math.random() * (9 - 0 + 1)) + 0;
    const randomY = Math.floor(Math.random() * (9 - 0 + 1)) + 0;

    if (hitStatus === "hit") {
      adjacentAttack(
        playerAttacking,
        receivingAttack,
        [x, y],
        randomX,
        randomY
      );
    } else {
      newRandomCoordinate(playerAttacking, receivingAttack, randomX, randomY);
    }
  }
};

// Displays winner of the game
const displayWinner = (playerAttacking) => {
  console.log(playerAttacking.name);
};

// Ends game and displays winner
const playerWin = (playerAttacking, receivingAttack, controller) => {
  if (receivingAttack.playerBoard.allSunk([0, 0])) {
    controller.abort();

    displayWinner(playerAttacking);
  }
};




/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _factories__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./factories */ "./src/factories.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom */ "./src/dom.js");




(() => {
  // Places player2 ships on gameboard
  _factories__WEBPACK_IMPORTED_MODULE_1__.player2.playerBoard.board[0][2] = _factories__WEBPACK_IMPORTED_MODULE_1__.player2Ships.battleship2;
  _factories__WEBPACK_IMPORTED_MODULE_1__.player2.playerBoard.board[0][3] = _factories__WEBPACK_IMPORTED_MODULE_1__.player2Ships.battleship2;
  _factories__WEBPACK_IMPORTED_MODULE_1__.player2.playerBoard.board[0][4] = _factories__WEBPACK_IMPORTED_MODULE_1__.player2Ships.battleship2;
  _factories__WEBPACK_IMPORTED_MODULE_1__.player2.playerBoard.board[0][5] = _factories__WEBPACK_IMPORTED_MODULE_1__.player2Ships.battleship2;

  _factories__WEBPACK_IMPORTED_MODULE_1__.player2.playerBoard.board[0][0] = _factories__WEBPACK_IMPORTED_MODULE_1__.player2Ships.submarine21;
  _factories__WEBPACK_IMPORTED_MODULE_1__.player2.playerBoard.board[1][0] = _factories__WEBPACK_IMPORTED_MODULE_1__.player2Ships.submarine21;

  _factories__WEBPACK_IMPORTED_MODULE_1__.player2.playerBoard.board[2][3] = _factories__WEBPACK_IMPORTED_MODULE_1__.player2Ships.submarine22;
  _factories__WEBPACK_IMPORTED_MODULE_1__.player2.playerBoard.board[3][3] = _factories__WEBPACK_IMPORTED_MODULE_1__.player2Ships.submarine22;

  _factories__WEBPACK_IMPORTED_MODULE_1__.player2.playerBoard.board[7][8] = _factories__WEBPACK_IMPORTED_MODULE_1__.player2Ships.submarine23;
  _factories__WEBPACK_IMPORTED_MODULE_1__.player2.playerBoard.board[7][9] = _factories__WEBPACK_IMPORTED_MODULE_1__.player2Ships.submarine23;

  _factories__WEBPACK_IMPORTED_MODULE_1__.player2.playerBoard.board[5][3] = _factories__WEBPACK_IMPORTED_MODULE_1__.player2Ships.destroyer21;
  _factories__WEBPACK_IMPORTED_MODULE_1__.player2.playerBoard.board[5][4] = _factories__WEBPACK_IMPORTED_MODULE_1__.player2Ships.destroyer21;
  _factories__WEBPACK_IMPORTED_MODULE_1__.player2.playerBoard.board[5][5] = _factories__WEBPACK_IMPORTED_MODULE_1__.player2Ships.destroyer21;

  _factories__WEBPACK_IMPORTED_MODULE_1__.player2.playerBoard.board[9][2] = _factories__WEBPACK_IMPORTED_MODULE_1__.player2Ships.destroyer22;
  _factories__WEBPACK_IMPORTED_MODULE_1__.player2.playerBoard.board[9][3] = _factories__WEBPACK_IMPORTED_MODULE_1__.player2Ships.destroyer22;
  _factories__WEBPACK_IMPORTED_MODULE_1__.player2.playerBoard.board[9][4] = _factories__WEBPACK_IMPORTED_MODULE_1__.player2Ships.destroyer22;

  _factories__WEBPACK_IMPORTED_MODULE_1__.player2.playerBoard.board[1][8] = _factories__WEBPACK_IMPORTED_MODULE_1__.player2Ships.patrolBoat21;

  _factories__WEBPACK_IMPORTED_MODULE_1__.player2.playerBoard.board[2][5] = _factories__WEBPACK_IMPORTED_MODULE_1__.player2Ships.patrolBoat22;

  _factories__WEBPACK_IMPORTED_MODULE_1__.player2.playerBoard.board[3][9] = _factories__WEBPACK_IMPORTED_MODULE_1__.player2Ships.patrolBoat23;

  _factories__WEBPACK_IMPORTED_MODULE_1__.player2.playerBoard.board[7][5] = _factories__WEBPACK_IMPORTED_MODULE_1__.player2Ships.patrolBoat24;

  // Displays player gameboards
  (0,_dom__WEBPACK_IMPORTED_MODULE_2__.createTable)(".p1Board", "p1Grid");
  (0,_dom__WEBPACK_IMPORTED_MODULE_2__.createTable)(".p2Board", "p2Grid");

  // Makes ship divs draggable
  (0,_dom__WEBPACK_IMPORTED_MODULE_2__.dragListener)("#battleship1");
  (0,_dom__WEBPACK_IMPORTED_MODULE_2__.dragOverListener)();

  // Adds dropped ship to gameboard in player object and interface
  const gridCells = document.querySelectorAll(".p1Grid .cell");
  gridCells.forEach((cell) => {
    cell.addEventListener("drop", (event) => {
      const xCoord = Number(cell.dataset.x);
      const yCoord = Number(cell.dataset.y);
      const shipIdentifier = (0,_dom__WEBPACK_IMPORTED_MODULE_2__.shipIdentify)(event);

      // Decides which direction is a valid move
      if (
        _factories__WEBPACK_IMPORTED_MODULE_1__.player1.playerBoard.enoughSpaces(
          xCoord,
          yCoord,
          shipIdentifier.length,
          "right"
        )
      ) {
        if (
          _factories__WEBPACK_IMPORTED_MODULE_1__.player1.playerBoard.spaceBetween(
            xCoord,
            yCoord,
            shipIdentifier.length,
            "right"
          )
        ) {
          (0,_dom__WEBPACK_IMPORTED_MODULE_2__.dropToGameboard)(
            event,
            xCoord,
            yCoord,
            shipIdentifier.shipName,
            shipIdentifier.length,
            "right"
          );
        }
      }

      if (
        _factories__WEBPACK_IMPORTED_MODULE_1__.player1.playerBoard.enoughSpaces(
          xCoord,
          yCoord,
          shipIdentifier.length,
          "left"
        )
      ) {
        if (
          _factories__WEBPACK_IMPORTED_MODULE_1__.player1.playerBoard.spaceBetween(
            xCoord,
            yCoord,
            shipIdentifier.length,
            "left"
          )
        ) {
          (0,_dom__WEBPACK_IMPORTED_MODULE_2__.dropToGameboard)(
            event,
            xCoord,
            yCoord,
            shipIdentifier.shipName,
            shipIdentifier.length,
            "left"
          );
        }
      }

      if (
        _factories__WEBPACK_IMPORTED_MODULE_1__.player1.playerBoard.enoughSpaces(
          xCoord,
          yCoord,
          shipIdentifier.length,
          "down"
        )
      ) {
        if (
          _factories__WEBPACK_IMPORTED_MODULE_1__.player1.playerBoard.spaceBetween(
            xCoord,
            yCoord,
            shipIdentifier.length,
            "down"
          )
        ) {
          (0,_dom__WEBPACK_IMPORTED_MODULE_2__.dropToGameboard)(
            event,
            xCoord,
            yCoord,
            shipIdentifier.shipName,
            shipIdentifier.length,
            "down"
          );
        }
      }

      if (
        _factories__WEBPACK_IMPORTED_MODULE_1__.player1.playerBoard.enoughSpaces(
          xCoord,
          yCoord,
          shipIdentifier.length,
          "up"
        )
      ) {
        if (
          _factories__WEBPACK_IMPORTED_MODULE_1__.player1.playerBoard.spaceBetween(
            xCoord,
            yCoord,
            shipIdentifier.length,
            "up"
          )
        ) {
          (0,_dom__WEBPACK_IMPORTED_MODULE_2__.dropToGameboard)(
            event,
            xCoord,
            yCoord,
            shipIdentifier.shipName,
            shipIdentifier.length,
            "up"
          );
        }
      }

      _factories__WEBPACK_IMPORTED_MODULE_1__.player1.playerBoard.colorGameboardShips([0, 0]);
    });
  });

  // Determines which player goes first
  _factories__WEBPACK_IMPORTED_MODULE_1__.currentTurn.playerName = _factories__WEBPACK_IMPORTED_MODULE_1__.player1.name;

  // Creates gameboard eventlisteners and abort signal
  const controller = new AbortController();

  (0,_dom__WEBPACK_IMPORTED_MODULE_2__.clickAttack)(_factories__WEBPACK_IMPORTED_MODULE_1__.player1, _factories__WEBPACK_IMPORTED_MODULE_1__.player2, ".p2Grid", controller);
  (0,_dom__WEBPACK_IMPORTED_MODULE_2__.clickAttack)(_factories__WEBPACK_IMPORTED_MODULE_1__.player2, _factories__WEBPACK_IMPORTED_MODULE_1__.player1, ".p1Grid", controller);
})();


/***/ }),

/***/ "./src/img/background.jpeg":
/*!*********************************!*\
  !*** ./src/img/background.jpeg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5a165aa6bf03fe6417e1.jpeg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLE1BQU0scURBQWU7O0FBRXJCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQVlFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDalFGO0FBQ0E7QUFDQTtBQUMwQzs7QUFF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QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLHdFQUFnQztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLHFEQUFlO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVEsd0VBQWdDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSx3RUFBZ0M7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxxREFBZTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLHdFQUFnQztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsd0VBQWdDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUscURBQWU7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU0sK0VBQXVDO0FBQzdDLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0EsRUFBRSw4REFBc0IsR0FBRyxvREFBWTs7QUFFdkM7QUFDQTs7QUFFQSxFQUFFLGlEQUFXLENBQUMsK0NBQU8sRUFBRSwrQ0FBTztBQUM5QixFQUFFLGlEQUFXLENBQUMsK0NBQU8sRUFBRSwrQ0FBTztBQUM5QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2ZhY3Rvcmllcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVNb2R1bGUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9pbWcvYmFja2dyb3VuZC5qcGVnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLypSZW1vdmVzIHBhZGRpbmcgYW5kIG1hcmdpbiBmcm9tIGFsbCBlbGVtZW50cyovXFxuKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKlNldCBwYWdlIHNpemUgYW5kIGJhY2tyb3VuZCBpbWFnZSovXFxuaHRtbCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbi8qU2V0IHBhZ2UgbGF5b3V0IGRpcmVjdGlvbiovXFxuYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLm1haW5Db250YWluZXIge1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbmZvb3RlciB7XFxuICB3aWR0aDogMjAwcHg7XFxufVxcblxcbnRkIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbn1cXG5cXG50aCxcXG50ZCB7XFxuICB3aWR0aDogMzBweDtcXG4gIGhlaWdodDogMzBweDtcXG59XFxuXFxuLmRyYWdBbmREcm9wIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uc2hpcENvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMjBweDtcXG59XFxuXFxuLnNoaXBJbm5lckNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4uc2hpcE91dGVyIHtcXG4gIGJvcmRlcjogMXB4IGRvdHRlZCBncmVlbnllbGxvdztcXG4gIGhlaWdodDogMzBweDtcXG59XFxuXFxuI2JhdHRsZXNoaXAxIHtcXG4gIHdpZHRoOiAxMzRweDtcXG59XFxuXFxuZGl2W2lkXj1cXFwiZGVzdHJveWVyXFxcIl0ge1xcbiAgd2lkdGg6IDEwMHB4O1xcbn1cXG5cXG5kaXZbaWRePVxcXCJzdWJtYXJpbmVcXFwiXSB7XFxuICB3aWR0aDogNjZweDtcXG59XFxuXFxuZGl2W2lkXj1cXFwicGF0cm9sXFxcIl0ge1xcbiAgd2lkdGg6IDMwcHg7XFxufVxcblxcbi5zaGlwIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyZWVueWVsbG93O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAxMjkpO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLCtDQUErQztBQUMvQztFQUNFLFVBQVU7RUFDVixTQUFTO0FBQ1g7O0FBRUEsb0NBQW9DO0FBQ3BDO0VBQ0UseURBQTRDO0VBQzVDLDRCQUE0QjtFQUM1QixzQkFBc0I7QUFDeEI7O0FBRUEsNEJBQTRCO0FBQzVCO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLE9BQU87RUFDUCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7O0VBRUUsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0FBQ1g7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLG9DQUFvQztFQUNwQyxZQUFZO0FBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLypSZW1vdmVzIHBhZGRpbmcgYW5kIG1hcmdpbiBmcm9tIGFsbCBlbGVtZW50cyovXFxuKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKlNldCBwYWdlIHNpemUgYW5kIGJhY2tyb3VuZCBpbWFnZSovXFxuaHRtbCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWcvYmFja2dyb3VuZC5qcGVnKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5cXG4vKlNldCBwYWdlIGxheW91dCBkaXJlY3Rpb24qL1xcbmJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5tYWluQ29udGFpbmVyIHtcXG4gIGZsZXg6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG5mb290ZXIge1xcbiAgd2lkdGg6IDIwMHB4O1xcbn1cXG5cXG50ZCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG59XFxuXFxudGgsXFxudGQge1xcbiAgd2lkdGg6IDMwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxufVxcblxcbi5kcmFnQW5kRHJvcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnNoaXBDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbi5zaGlwSW5uZXJDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMjBweDtcXG59XFxuXFxuLnNoaXBPdXRlciB7XFxuICBib3JkZXI6IDFweCBkb3R0ZWQgZ3JlZW55ZWxsb3c7XFxuICBoZWlnaHQ6IDMwcHg7XFxufVxcblxcbiNiYXR0bGVzaGlwMSB7XFxuICB3aWR0aDogMTM0cHg7XFxufVxcblxcbmRpdltpZF49XFxcImRlc3Ryb3llclxcXCJdIHtcXG4gIHdpZHRoOiAxMDBweDtcXG59XFxuXFxuZGl2W2lkXj1cXFwic3VibWFyaW5lXFxcIl0ge1xcbiAgd2lkdGg6IDY2cHg7XFxufVxcblxcbmRpdltpZF49XFxcInBhdHJvbFxcXCJdIHtcXG4gIHdpZHRoOiAzMHB4O1xcbn1cXG5cXG4uc2hpcCB7XFxuICBib3JkZXI6IDJweCBzb2xpZCBncmVlbnllbGxvdztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMTI5KTtcXG4gIGhlaWdodDogMzBweDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXJlc3RyaWN0ZWQtc3ludGF4ICovXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wbHVzcGx1cyAqL1xuLyogZXNsaW50LWRpc2FibGUgY29uc2lzdGVudC1yZXR1cm4gKi9cbmltcG9ydCB7XG4gIGN1cnJlbnRUdXJuLFxuICBwbGF5ZXIxLFxuICBwbGF5ZXIyLFxuICBwbGF5ZXIxU2hpcHMsXG4gIHBsYXllcjJTaGlwc1xufSBmcm9tIFwiLi9mYWN0b3JpZXNcIjtcbmltcG9ydCB7XG4gIHdhc0Nvb3JkaW5hdGVDbGlja2VkLFxuICB3aG9zZVR1cm4sXG4gIHBsYXllcldpbixcbiAgY29tcHV0ZXJDbGlja1xufSBmcm9tIFwiLi9nYW1lTW9kdWxlXCI7XG5cbi8vIEFsbG93cyBzaGlwcyB0byBiZSBkcmFnZ2VkXG5jb25zdCBkcmFnID0gKGV2KSA9PiB7XG4gIGV2LmRhdGFUcmFuc2Zlci5zZXREYXRhKFwidGV4dFwiLCBldi50YXJnZXQuaWQpO1xufTtcblxuLy8gU3RvcmVzICoqKklORk8qKiogd2hlbiBkcmFnIHN0YXJ0c1xuY29uc3QgZHJhZ0xpc3RlbmVyID0gKHNoaXBJRCkgPT4ge1xuICBjb25zdCBzaGlwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzaGlwSUQpO1xuICBzaGlwLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnc3RhcnRcIiwgZHJhZyk7XG59O1xuXG4vLyBQcmV2ZW50cyB0aGUgYnJvd3NlciBkZWZhdWx0IGhhbmRsaW5nIG9mIHRoZSBkYXRhXG5jb25zdCBkcmFnT3ZlciA9IChldikgPT4ge1xuICBldi5wcmV2ZW50RGVmYXVsdCgpO1xufTtcblxuLy8gUmV0dXJucyBsZW5ndGggb2YgdGhlIHNoaXAgYmVpbmcgZHJvcHBlZFxuY29uc3Qgc2hpcElkZW50aWZ5ID0gKGV2KSA9PiB7XG4gIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IGRhdGEgPSBldi5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcInRleHRcIik7XG4gIGxldCBsZW5ndGg7XG5cbiAgaWYgKGRhdGEuaW5jbHVkZXMoXCJiYXR0bGVzaGlwXCIpKSB7XG4gICAgbGVuZ3RoID0gNDtcbiAgfVxuXG4gIGlmIChkYXRhLmluY2x1ZGVzKFwiZGVzdHJveWVyXCIpKSB7XG4gICAgbGVuZ3RoID0gMztcbiAgfVxuXG4gIGlmIChkYXRhLmluY2x1ZGVzKFwic3VibWFyaW5lXCIpKSB7XG4gICAgbGVuZ3RoID0gMjtcbiAgfVxuXG4gIGlmIChkYXRhLmluY2x1ZGVzKFwicGF0cm9sQm9hdFwiKSkge1xuICAgIGxlbmd0aCA9IDE7XG4gIH1cblxuICByZXR1cm4geyBzaGlwTmFtZTogZGF0YSwgbGVuZ3RoIH07XG59O1xuXG4vLyBBZGRzIGRyb3BwZWQgc2hpcHMgdG8gcGxheWVyIGdhbWVib2FyZFxuY29uc3QgZHJvcFRvR2FtZWJvYXJkID0gKGV2LCB4LCB5LCBzaGlwTmFtZSwgc2hpcExlbmd0aCwgZGlyZWN0aW9uKSA9PiB7XG4gIGV2LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgLy8gSXRlcmF0ZXMgdGhyb3VnaCBvYmplY3QgdG8gcGxhY2UgY29ycmVjdCBzaGlwIG9uIGdhbWVib2FyZCwgaW4gY29ycmVjdCBkaXJlY3Rpb25cbiAgaWYgKGRpcmVjdGlvbiA9PT0gXCJyaWdodFwiKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3RoOyBpKyspIHtcbiAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHBsYXllcjFTaGlwcykpIHtcbiAgICAgICAgaWYgKGtleSA9PT0gc2hpcE5hbWUpIHtcbiAgICAgICAgICBwbGF5ZXIxLnBsYXllckJvYXJkLmJvYXJkW3hdW3ldID0gdmFsdWU7XG4gICAgICAgICAgeSsrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKGRpcmVjdGlvbiA9PT0gXCJsZWZ0XCIpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBMZW5ndGg7IGkrKykge1xuICAgICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMocGxheWVyMVNoaXBzKSkge1xuICAgICAgICBpZiAoa2V5ID09PSBzaGlwTmFtZSkge1xuICAgICAgICAgIHBsYXllcjEucGxheWVyQm9hcmQuYm9hcmRbeF1beV0gPSB2YWx1ZTtcbiAgICAgICAgICB5LS07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoZGlyZWN0aW9uID09PSBcImRvd25cIikge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aDsgaSsrKSB7XG4gICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhwbGF5ZXIxU2hpcHMpKSB7XG4gICAgICAgIGlmIChrZXkgPT09IHNoaXBOYW1lKSB7XG4gICAgICAgICAgcGxheWVyMS5wbGF5ZXJCb2FyZC5ib2FyZFt4XVt5XSA9IHZhbHVlO1xuICAgICAgICAgIHgrKztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChkaXJlY3Rpb24gPT09IFwidXBcIikge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aDsgaSsrKSB7XG4gICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhwbGF5ZXIxU2hpcHMpKSB7XG4gICAgICAgIGlmIChrZXkgPT09IHNoaXBOYW1lKSB7XG4gICAgICAgICAgcGxheWVyMS5wbGF5ZXJCb2FyZC5ib2FyZFt4XVt5XSA9IHZhbHVlO1xuICAgICAgICAgIHgtLTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuLy8gQ2VsbHMgbGlzdGVuIGZvciBpdGVtcyB0byBiZSBkcmFnZ2VkIG92ZXJcbmNvbnN0IGRyYWdPdmVyTGlzdGVuZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGdyaWRDZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucDFHcmlkIC5jZWxsXCIpO1xuICBncmlkQ2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdvdmVyXCIsIGRyYWdPdmVyKTtcbiAgfSk7XG59O1xuXG4vLyBDcmVhdGVzIHRoZSBmaXJzdCByb3cgb2YgdGhlIHRhYmxlIGFuZCBuYW1lcyBjb2x1bW5zXG5jb25zdCBjcmVhdGVDb2x1bW5IZWFkaW5ncyA9ICh0YWJsZUNsYXNzKSA9PiB7XG4gIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHt0YWJsZUNsYXNzfWApO1xuICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XG4gIGNvbnN0IGVtcHR5SGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiKTtcblxuICBncmlkLmFwcGVuZENoaWxkKHJvdyk7XG4gIHJvdy5hcHBlbmRDaGlsZChlbXB0eUhlYWRpbmcpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgIGNvbnN0IG5ld0hlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhcIik7XG4gICAgbmV3SGVhZGluZy50ZXh0Q29udGVudCA9IFN0cmluZy5mcm9tQ2hhckNvZGUoNjUgKyBpKTtcbiAgICByb3cuYXBwZW5kQ2hpbGQobmV3SGVhZGluZyk7XG4gIH1cbn07XG5cbi8vIEFkZHMgbmV4dCByb3cgd2l0aCBoZWFkaW5nIGFuZCBlbXB0eSBjZWxsc1xuY29uc3QgY3JlYXRlUm93cyA9ICh0YWJsZUNsYXNzKSA9PiB7XG4gIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHt0YWJsZUNsYXNzfWApO1xuXG4gIGZvciAobGV0IGJpZ0kgPSAwOyBiaWdJIDwgMTA7IGJpZ0krKykge1xuICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoXCIpO1xuXG4gICAgaGVhZGluZy50ZXh0Q29udGVudCA9IGJpZ0kgKyAxO1xuXG4gICAgZ3JpZC5hcHBlbmRDaGlsZChyb3cpO1xuICAgIHJvdy5hcHBlbmRDaGlsZChoZWFkaW5nKTtcblxuICAgIGZvciAobGV0IGxpdHRsZUkgPSAwOyBsaXR0bGVJIDwgMTA7IGxpdHRsZUkrKykge1xuICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcblxuICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiY2VsbFwiKTtcbiAgICAgIGNlbGwuc2V0QXR0cmlidXRlKFwiZGF0YS14XCIsIGJpZ0kpO1xuICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXlcIiwgbGl0dGxlSSk7XG5cbiAgICAgIHJvdy5hcHBlbmRDaGlsZChjZWxsKTtcbiAgICB9XG4gIH1cbn07XG5cbi8vIEFkZHMgdGFibGUgdG8gcDFCb2FyZCBkaXZcbmNvbnN0IGNyZWF0ZVRhYmxlID0gKGJvYXJkQ2xhc3MsIHRhYmxlQ2xhc3MpID0+IHtcbiAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGJvYXJkQ2xhc3MpO1xuICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcblxuICB0YWJsZS5jbGFzc0xpc3QuYWRkKHRhYmxlQ2xhc3MpO1xuICBib2FyZC5hcHBlbmRDaGlsZCh0YWJsZSk7XG5cbiAgY3JlYXRlQ29sdW1uSGVhZGluZ3ModGFibGVDbGFzcyk7XG4gIGNyZWF0ZVJvd3ModGFibGVDbGFzcyk7XG59O1xuXG4vLyBDb2xvcnMgdGhlIGdyaWQgc3BhY2Ugb2YgZ2l2ZW4gY29vcmRpbmF0ZVxuY29uc3QgY29sb3JDb29yZGluYXRlID0gKFthLCBiXSkgPT4ge1xuICBjb25zdCBncmlkQ2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnAxR3JpZCAuY2VsbFwiKTtcblxuICBncmlkQ2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgIGlmIChjZWxsLmRhdGFzZXQueCA9PT0gYCR7YX1gICYmIGNlbGwuZGF0YXNldC55ID09PSBgJHtifWApIHtcbiAgICAgIGNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ5ZWxsb3dcIjtcbiAgICB9XG4gIH0pO1xufTtcblxuLy8gQ2hhbmdlcyBjZWxsIGNvbG9yIHdoZW4gYXR0YWNrZWRcbmNvbnN0IGNvbG9yT25BdHRhY2sgPSAoY2VsbCwgaGl0U3RhdHVzKSA9PiB7XG4gIGlmIChoaXRTdGF0dXMgPT09IFwibWlzc1wiKSB7XG4gICAgY2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInRhblwiO1xuICAgIGNlbGwudGV4dENvbnRlbnQgPSBcIuKAolwiO1xuICB9XG5cbiAgaWYgKGhpdFN0YXR1cyA9PT0gXCJoaXRcIikge1xuICAgIGNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJwaW5rXCI7XG4gICAgY2VsbC5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCByZWRcIjtcbiAgICBjZWxsLnN0eWxlLmNvbG9yID0gXCJyZWRcIjtcbiAgICBjZWxsLnRleHRDb250ZW50ID0gXCJYXCI7XG4gIH1cbn07XG5cbi8vIEF0dGFja3MgZ2FtZWJvYXJkIGFuZCBjaGVja3Mgc2hpcHMgd2hlbiBjb29yZGluYXRlIGNsaWNrZWRcbmNvbnN0IGNsaWNrQXR0YWNrID0gKFxuICBwbGF5ZXJBdHRhY2tpbmcsXG4gIHJlY2VpdmluZ0F0dGFjayxcbiAgdGFibGVDbGFzcyxcbiAgY29udHJvbGxlclxuKSA9PiB7XG4gIGNvbnN0IGdyaWRTcXVhcmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgJHt0YWJsZUNsYXNzfSAuY2VsbGApO1xuXG4gIGdyaWRTcXVhcmVzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICBcImNsaWNrXCIsXG4gICAgICAoKSA9PiB7XG4gICAgICAgIGlmIChjdXJyZW50VHVybi5wbGF5ZXJOYW1lID09PSBwbGF5ZXJBdHRhY2tpbmcubmFtZSkge1xuICAgICAgICAgIC8vIFNldHMgY29vcmRpbmF0ZSB2YWx1ZXMgYmFzZWQgb24gY2VsbCBkYXRhXG4gICAgICAgICAgY29uc3QgeCA9IE51bWJlcihjZWxsLmRhdGFzZXQueCk7XG4gICAgICAgICAgY29uc3QgeSA9IE51bWJlcihjZWxsLmRhdGFzZXQueSk7XG5cbiAgICAgICAgICBpZiAoIXdhc0Nvb3JkaW5hdGVDbGlja2VkKHBsYXllckF0dGFja2luZywgW3gsIHldKSkge1xuICAgICAgICAgICAgLy8gQWRkcyBjb29yZGluYXRlIHRvIGFycmF5IG9mIGNsaWNrZWQgY29vcmRpbmF0ZXNcbiAgICAgICAgICAgIHBsYXllckF0dGFja2luZy5tYXJrZWRTcG90cy5wdXNoKFt4LCB5XSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGhpdFN0YXR1cyA9IHJlY2VpdmluZ0F0dGFjay5wbGF5ZXJCb2FyZC5yZWNlaXZlQXR0YWNrKFt4LCB5XSk7XG5cbiAgICAgICAgICAgIGNvbG9yT25BdHRhY2soY2VsbCwgaGl0U3RhdHVzKTtcblxuICAgICAgICAgICAgd2hvc2VUdXJuKGhpdFN0YXR1cywgcGxheWVyQXR0YWNraW5nLCByZWNlaXZpbmdBdHRhY2spO1xuXG4gICAgICAgICAgICBwbGF5ZXJXaW4ocGxheWVyQXR0YWNraW5nLCByZWNlaXZpbmdBdHRhY2ssIGNvbnRyb2xsZXIpO1xuXG4gICAgICAgICAgICBjb21wdXRlckNsaWNrKHBsYXllckF0dGFja2luZywgcmVjZWl2aW5nQXR0YWNrLCBbeCwgeV0sIGhpdFN0YXR1cyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgeyBzaWduYWw6IGNvbnRyb2xsZXIuc2lnbmFsIH1cbiAgICApO1xuICB9KTtcbn07XG5cbmV4cG9ydCB7XG4gIGNyZWF0ZVRhYmxlLFxuICBjb2xvckNvb3JkaW5hdGUsXG4gIGNsaWNrQXR0YWNrLFxuICBkcmFnTGlzdGVuZXIsXG4gIHNoaXBJZGVudGlmeSxcbiAgZHJvcFRvR2FtZWJvYXJkLFxuICBkcmFnT3Zlckxpc3RlbmVyXG59O1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcGx1c3BsdXMgKi9cbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgY29uc2lzdGVudC1yZXR1cm4gKi9cbmltcG9ydCB7IGNvbG9yQ29vcmRpbmF0ZSB9IGZyb20gXCIuL2RvbVwiO1xuXG4vLyBEZXRlcm1pbmVzIGlmIGFuIGF0dGFjayBoaXRzIG9yIG1pc3Nlc1xuY29uc3QgaGl0T3JNaXNzID0gKGluQ29vcmRpbmF0ZSkgPT4ge1xuICBpZiAoaW5Db29yZGluYXRlID09PSAwKSByZXR1cm4gXCJtaXNzXCI7XG5cbiAgaWYgKGluQ29vcmRpbmF0ZSA9PT0gMSkgcmV0dXJuIFwiYWxyZWFkeUhpdFwiO1xuXG4gIHJldHVybiBcImhpdFwiO1xufTtcblxuLy8gQ3JlYXRlcyBzaGlwcyB0byBwbGFjZSBvbiBnYW1lYm9hcmRcbmNvbnN0IHNoaXAgPSAobGVuZ3RoKSA9PiAoe1xuICBsZW5ndGgsXG4gIGhpdEFtb3VudDogMCxcbiAgc3VuazogZmFsc2UsXG4gIGhpdCgpIHtcbiAgICB0aGlzLmhpdEFtb3VudCArPSAxO1xuICB9LFxuICBpc1N1bmsoKSB7XG4gICAgaWYgKHRoaXMuaGl0QW1vdW50ID09PSB0aGlzLmxlbmd0aCkge1xuICAgICAgdGhpcy5zdW5rID0gdHJ1ZTtcbiAgICB9XG4gIH1cbn0pO1xuXG4vLyBDcmVhdGVzIGEgZ2FtZWJvYXJkXG5jb25zdCBnYW1lYm9hcmQgPSAoKSA9PiAoe1xuICBib2FyZDogW1xuICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXVxuICBdLFxuICAvLyBNYXJrcyBhdHRhY2tzIG9uIGdhbWVib2FyZFxuICByZWNlaXZlQXR0YWNrKFthLCBiXSkge1xuICAgIGNvbnN0IGluQ29vcmRpbmF0ZSA9IHRoaXMuYm9hcmRbYV1bYl07XG4gICAgY29uc3QgaGl0U3RhdHVzID0gaGl0T3JNaXNzKGluQ29vcmRpbmF0ZSk7XG5cbiAgICBpZiAoaGl0U3RhdHVzID09PSBcImhpdFwiKSB7XG4gICAgICBpbkNvb3JkaW5hdGUuaGl0KCk7XG4gICAgICBpbkNvb3JkaW5hdGUuaXNTdW5rKCk7XG4gICAgfSBlbHNlIGlmIChoaXRTdGF0dXMgPT09IFwibWlzc1wiKSB7XG4gICAgICB0aGlzLmJvYXJkW2FdW2JdID0gMTtcbiAgICB9XG5cbiAgICByZXR1cm4gaGl0U3RhdHVzO1xuICB9LFxuICAvLyBDaGVja3MgaWYgYWxsIHNoaXBzIGFyZSBzdW5rXG4gIGFsbFN1bmsoW2EsIGJdKSB7XG4gICAgaWYgKGEgPiA5KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoYiA8IDEwKSB7XG4gICAgICBjb25zdCBpbkNvb3JkaW5hdGUgPSB0aGlzLmJvYXJkW2FdW2JdO1xuXG4gICAgICBpZiAodHlwZW9mIGluQ29vcmRpbmF0ZSAhPT0gXCJvYmplY3RcIikge1xuICAgICAgICByZXR1cm4gdGhpcy5hbGxTdW5rKFthLCBiICsgMV0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoaW5Db29yZGluYXRlLnN1bmsgPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuYWxsU3VuayhbYSwgYiArIDFdKTtcbiAgICB9XG5cbiAgICBpZiAoYiA+IDkpIHtcbiAgICAgIHJldHVybiB0aGlzLmFsbFN1bmsoW2EgKyAxLCAwXSk7XG4gICAgfVxuICB9LFxuICAvLyBSdW5zIGEgZnVuY3Rpb24gdG8gY29sb3IgZ3JpZCBzcGFjZSBpZlxuICAvLyBpdCBjb250YWlucyBhIHNoaXBcbiAgY29sb3JHYW1lYm9hcmRTaGlwcyhbYSwgYl0pIHtcbiAgICBpZiAoYSA+IDkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoYiA8IDEwKSB7XG4gICAgICBjb25zdCBpbkNvb3JkaW5hdGUgPSB0aGlzLmJvYXJkW2FdW2JdO1xuXG4gICAgICBpZiAodHlwZW9mIGluQ29vcmRpbmF0ZSAhPT0gXCJvYmplY3RcIikge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2xvckdhbWVib2FyZFNoaXBzKFthLCBiICsgMV0pO1xuICAgICAgfVxuXG4gICAgICBjb2xvckNvb3JkaW5hdGUoW2EsIGJdKTtcblxuICAgICAgcmV0dXJuIHRoaXMuY29sb3JHYW1lYm9hcmRTaGlwcyhbYSwgYiArIDFdKTtcbiAgICB9XG5cbiAgICBpZiAoYiA+IDkpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbG9yR2FtZWJvYXJkU2hpcHMoW2EgKyAxLCAwXSk7XG4gICAgfVxuICB9LFxuICAvLyBDaGVja3MgaWYgdGhlcmUgYXJlIGVub3VnaCBzcGFjZXMgcmlnaHQvbGVmdC9kb3duL3VwIGZvciBhIHNoaXBcbiAgZW5vdWdoU3BhY2VzKHhDb29yZCwgeUNvb3JkLCBzaGlwTGVuZ3RoLCBkaXJlY3Rpb24pIHtcbiAgICAvLyBJZiBjb29yZGluYXRlIGlzIG9mZiB0aGUgYm9hcmQsIHJldHVybiBmYWxzZVxuICAgIGlmICh4Q29vcmQgPCAxMCAmJiB4Q29vcmQgPiAtMSAmJiB5Q29vcmQgPCAxMCAmJiB5Q29vcmQgPiAtMSkge1xuICAgICAgY29uc3QgaW5Db29yZGluYXRlID0gdGhpcy5ib2FyZFt4Q29vcmRdW3lDb29yZF07XG5cbiAgICAgIC8vIElmIGEgc2hpcCBpcyBhbHJlYWR5IGluIGNvb3JkaW5hdGUsIHJldHVybiBmYWxzZVxuICAgICAgaWYgKHR5cGVvZiBpbkNvb3JkaW5hdGUgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICAvLyBJZiBmdWxsIGxlbmd0aCBvZiBzaGlwIGlzIHJlYWNoZWQsIHJldHVybiB0cnVlXG4gICAgICBpZiAoc2hpcExlbmd0aCA9PT0gMSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgLy8gQ2hlY2sgbmV4dCBjb29yZGluYXRlIGluIGdpdmVuIGRpcmVjdGlvblxuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJyaWdodFwiKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVub3VnaFNwYWNlcyh4Q29vcmQsIHlDb29yZCArIDEsIHNoaXBMZW5ndGggLSAxLCBkaXJlY3Rpb24pO1xuICAgICAgfVxuXG4gICAgICBpZiAoZGlyZWN0aW9uID09PSBcImxlZnRcIikge1xuICAgICAgICByZXR1cm4gdGhpcy5lbm91Z2hTcGFjZXMoeENvb3JkLCB5Q29vcmQgLSAxLCBzaGlwTGVuZ3RoIC0gMSwgZGlyZWN0aW9uKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJkb3duXCIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZW5vdWdoU3BhY2VzKHhDb29yZCArIDEsIHlDb29yZCwgc2hpcExlbmd0aCAtIDEsIGRpcmVjdGlvbik7XG4gICAgICB9XG5cbiAgICAgIGlmIChkaXJlY3Rpb24gPT09IFwidXBcIikge1xuICAgICAgICByZXR1cm4gdGhpcy5lbm91Z2hTcGFjZXMoeENvb3JkIC0gMSwgeUNvb3JkLCBzaGlwTGVuZ3RoIC0gMSwgZGlyZWN0aW9uKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH0sXG4gIC8vIFJldHVybnMgdHJ1ZSBpZiBjb29yZGluYXRlIGlzIHVuZGVmaW5lZCBvciBlbXB0eVxuICBzcGFjZUVtcHR5KHhDb29yZCwgeUNvb3JkKSB7XG4gICAgaWYgKHhDb29yZCA8IDEwICYmIHhDb29yZCA+IC0xICYmIHlDb29yZCA8IDEwICYmIHlDb29yZCA+IC0xKSB7XG4gICAgICBpZiAodGhpcy5ib2FyZFt4Q29vcmRdW3lDb29yZF0gPT09IDApIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSxcbiAgLy8gQ2hlY2tzIGlmIHRoZXJlJ3MgZW5vdWdoIHNwYWNlIGJldHdlZW4gc2hpcHMgc2V0IGFuZCBzaGlwcyBiZWluZyBkcm9wcGVkXG4gIHNwYWNlQmV0d2Vlbih4Q29vcmQsIHlDb29yZCwgc2hpcExlbmd0aCwgZGlyZWN0aW9uKSB7XG4gICAgLy8gQ2hlY2tzIGlmIHN1cnJvdW5kaW5nIGNvb3JkaW5hdGVzIGFyZSBlbXB0eS91bmRlZmluZWRcbiAgICBjb25zdCB0b3AgPSB0aGlzLnNwYWNlRW1wdHkoeENvb3JkIC0gMSwgeUNvb3JkKTtcbiAgICBjb25zdCB0b3BSaWdodCA9IHRoaXMuc3BhY2VFbXB0eSh4Q29vcmQgLSAxLCB5Q29vcmQgKyAxKTtcbiAgICBjb25zdCByaWdodCA9IHRoaXMuc3BhY2VFbXB0eSh4Q29vcmQsIHlDb29yZCArIDEpO1xuICAgIGNvbnN0IGJvdHRvbVJpZ2h0ID0gdGhpcy5zcGFjZUVtcHR5KHhDb29yZCArIDEsIHlDb29yZCArIDEpO1xuICAgIGNvbnN0IGJvdHRvbSA9IHRoaXMuc3BhY2VFbXB0eSh4Q29vcmQgKyAxLCB5Q29vcmQpO1xuICAgIGNvbnN0IGJvdHRvbUxlZnQgPSB0aGlzLnNwYWNlRW1wdHkoeENvb3JkICsgMSwgeUNvb3JkIC0gMSk7XG4gICAgY29uc3QgbGVmdCA9IHRoaXMuc3BhY2VFbXB0eSh4Q29vcmQsIHlDb29yZCAtIDEpO1xuICAgIGNvbnN0IHRvcExlZnQgPSB0aGlzLnNwYWNlRW1wdHkoeENvb3JkIC0gMSwgeUNvb3JkIC0gMSk7XG5cbiAgICAvLyBJZiBhbnkgc3Vycm91bmRpbmcgY29vcmRpbmF0ZXMgYXJlbid0IGVtcHR5LCByZXR1cm4gZmFsc2VcbiAgICBpZiAoXG4gICAgICAhKFxuICAgICAgICB0b3AgJiZcbiAgICAgICAgdG9wUmlnaHQgJiZcbiAgICAgICAgcmlnaHQgJiZcbiAgICAgICAgYm90dG9tUmlnaHQgJiZcbiAgICAgICAgYm90dG9tICYmXG4gICAgICAgIGJvdHRvbUxlZnQgJiZcbiAgICAgICAgbGVmdCAmJlxuICAgICAgICB0b3BMZWZ0XG4gICAgICApXG4gICAgKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKHNoaXBMZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIENoZWNrIG5leHQgY29vcmRpbmF0ZSBpbiBnaXZlbiBkaXJlY3Rpb25cbiAgICBpZiAoZGlyZWN0aW9uID09PSBcInJpZ2h0XCIpIHtcbiAgICAgIHJldHVybiB0aGlzLnNwYWNlQmV0d2Vlbih4Q29vcmQsIHlDb29yZCArIDEsIHNoaXBMZW5ndGggLSAxLCBkaXJlY3Rpb24pO1xuICAgIH1cblxuICAgIGlmIChkaXJlY3Rpb24gPT09IFwibGVmdFwiKSB7XG4gICAgICByZXR1cm4gdGhpcy5zcGFjZUJldHdlZW4oeENvb3JkLCB5Q29vcmQgLSAxLCBzaGlwTGVuZ3RoIC0gMSwgZGlyZWN0aW9uKTtcbiAgICB9XG5cbiAgICBpZiAoZGlyZWN0aW9uID09PSBcImRvd25cIikge1xuICAgICAgcmV0dXJuIHRoaXMuc3BhY2VCZXR3ZWVuKHhDb29yZCArIDEsIHlDb29yZCwgc2hpcExlbmd0aCAtIDEsIGRpcmVjdGlvbik7XG4gICAgfVxuXG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJ1cFwiKSB7XG4gICAgICByZXR1cm4gdGhpcy5zcGFjZUJldHdlZW4oeENvb3JkIC0gMSwgeUNvb3JkLCBzaGlwTGVuZ3RoIC0gMSwgZGlyZWN0aW9uKTtcbiAgICB9XG4gIH1cbn0pO1xuXG4vLyBDcmVhdGVzIGEgcGxheWVyIGFuZCBhIGdhbWVib2FyZCBmb3IgdGhlbVxuY29uc3QgcGxheWVyID0gKG5hbWUpID0+ICh7XG4gIG5hbWUsXG4gIHBsYXllckJvYXJkOiBnYW1lYm9hcmQoKSxcbiAgbWFya2VkU3BvdHM6IFtdXG59KTtcblxuLy8gRHluYW1pYyBvYmplY3QgdG8gdHJhY2sgcGxheWVyIHR1cm5zXG5jb25zdCBjdXJyZW50VHVybiA9IHtcbiAgcGxheWVyTmFtZTogbnVsbFxufTtcblxuLy8gQ3JlYXRlcyBwbGF5ZXJzIGFuZCBib2FyZHNcbmNvbnN0IHBsYXllcjEgPSBwbGF5ZXIoXCJwbGF5ZXIxXCIpO1xuY29uc3QgcGxheWVyMiA9IHBsYXllcihcIkNvbXB1dGVyXCIpO1xuXG4vLyBDcmVhdGVzIHBsYXllcjEgc2hpcHNcbmNvbnN0IHBsYXllcjFTaGlwcyA9IHtcbiAgYmF0dGxlc2hpcDE6IHNoaXAoNCksXG4gIGRlc3Ryb3llcjExOiBzaGlwKDMpLFxuICBkZXN0cm95ZXIxMjogc2hpcCgzKSxcbiAgc3VibWFyaW5lMTE6IHNoaXAoMiksXG4gIHN1Ym1hcmluZTEyOiBzaGlwKDIpLFxuICBzdWJtYXJpbmUxMzogc2hpcCgyKSxcbiAgcGF0cm9sQm9hdDExOiBzaGlwKDEpLFxuICBwYXRyb2xCb2F0MTI6IHNoaXAoMSksXG4gIHBhdHJvbEJvYXQxMzogc2hpcCgxKSxcbiAgcGF0cm9sQm9hdDE0OiBzaGlwKDEpXG59O1xuXG4vLyBDcmVhdGVzIHBsYXllcjIgc2hpcHNcbmNvbnN0IHBsYXllcjJTaGlwcyA9IHtcbiAgYmF0dGxlc2hpcDI6IHNoaXAoNCksXG4gIGRlc3Ryb3llcjIxOiBzaGlwKDMpLFxuICBkZXN0cm95ZXIyMjogc2hpcCgzKSxcbiAgc3VibWFyaW5lMjE6IHNoaXAoMiksXG4gIHN1Ym1hcmluZTIyOiBzaGlwKDIpLFxuICBzdWJtYXJpbmUyMzogc2hpcCgyKSxcbiAgcGF0cm9sQm9hdDIxOiBzaGlwKDEpLFxuICBwYXRyb2xCb2F0MjI6IHNoaXAoMSksXG4gIHBhdHJvbEJvYXQyMzogc2hpcCgxKSxcbiAgcGF0cm9sQm9hdDI0OiBzaGlwKDEpXG59O1xuXG5leHBvcnQge1xuICBzaGlwLFxuICBwbGF5ZXIsXG4gIGN1cnJlbnRUdXJuLFxuICBnYW1lYm9hcmQsXG4gIGhpdE9yTWlzcyxcbiAgcGxheWVyMSxcbiAgcGxheWVyMixcbiAgcGxheWVyMVNoaXBzLFxuICBwbGF5ZXIyU2hpcHNcbn07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIGNvbnNpc3RlbnQtcmV0dXJuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wbHVzcGx1cyAqL1xuaW1wb3J0IHsgY3VycmVudFR1cm4gfSBmcm9tIFwiLi9mYWN0b3JpZXNcIjtcblxuLy8gQ2hlY2tzIGlmIGNvb3JkaW5hdGUgaGFzIGJlZW4gY2xpY2tlZCBhbHJlYWR5XG5jb25zdCB3YXNDb29yZGluYXRlQ2xpY2tlZCA9IChwbGF5ZXJBdHRhY2tpbmcsIFt4LCB5XSkgPT4ge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHBsYXllckF0dGFja2luZy5tYXJrZWRTcG90cy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHNwb3QgPSBwbGF5ZXJBdHRhY2tpbmcubWFya2VkU3BvdHNbaV07XG5cbiAgICBpZiAoc3BvdFswXSA9PT0geCAmJiBzcG90WzFdID09PSB5KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59O1xuXG4vLyBEZXRlcm1pbmVzIHdoaWNoIHBsYXllciBnb2VzIG5leHRcbmNvbnN0IHdob3NlVHVybiA9IChoaXRTdGF0dXMsIHBsYXllckF0dGFja2luZywgcmVjZWl2aW5nQXR0YWNrKSA9PiB7XG4gIGlmIChoaXRTdGF0dXMgPT09IFwiaGl0XCIpIHtcbiAgICBjdXJyZW50VHVybi5wbGF5ZXJOYW1lID0gcGxheWVyQXR0YWNraW5nLm5hbWU7XG4gIH0gZWxzZSBpZiAoaGl0U3RhdHVzID09PSBcImFscmVhZHlIaXRcIikge1xuICAgIGN1cnJlbnRUdXJuLnBsYXllck5hbWUgPSBwbGF5ZXJBdHRhY2tpbmcubmFtZTtcbiAgfSBlbHNlIHtcbiAgICBjdXJyZW50VHVybi5wbGF5ZXJOYW1lID0gcmVjZWl2aW5nQXR0YWNrLm5hbWU7XG4gIH1cbn07XG5cbi8vIFJldHVybnMgd2hpY2ggcGxheWVyIGlzICdDb21wdXRlcidcbmNvbnN0IHdob0lzQ29tcHV0ZXIgPSAocGxheWVyQXR0YWNraW5nLCByZWNlaXZpbmdBdHRhY2spID0+IHtcbiAgaWYgKHBsYXllckF0dGFja2luZy5uYW1lID09PSBcIkNvbXB1dGVyXCIpIHtcbiAgICByZXR1cm4gcGxheWVyQXR0YWNraW5nO1xuICB9XG5cbiAgaWYgKHJlY2VpdmluZ0F0dGFjay5uYW1lID09PSBcIkNvbXB1dGVyXCIpIHtcbiAgICByZXR1cm4gcmVjZWl2aW5nQXR0YWNrO1xuICB9XG59O1xuXG4vLyBTZWxlY3RzIGNvcnJlY3QgY2VsbCB0byBjbGlja1xuY29uc3QgY29ycmVjdENlbGwgPSAoeCwgeSkgPT4ge1xuICBjb25zdCBjb29yZGluYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wMUdyaWQgLmNlbGxcIik7XG4gIGNvb3JkaW5hdGUuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgIGlmIChOdW1iZXIoY2VsbC5kYXRhc2V0LngpID09PSB4ICYmIE51bWJlcihjZWxsLmRhdGFzZXQueSkgPT09IHkpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjZWxsLmNsaWNrKCk7XG4gICAgICB9LCBcIjIwMDBcIik7XG4gICAgfVxuICB9KTtcbn07XG5cbi8vIFNldHMgbmV3IChyYW5kb21YLCByYW5kb21ZKSBpZiBjb21wdXRlciBjbGlja2VkIGNvb3JkaW5hdGUgYWxyZWFkeVxuY29uc3QgbmV3UmFuZG9tQ29vcmRpbmF0ZSA9IChcbiAgcGxheWVyQXR0YWNraW5nLFxuICByZWNlaXZpbmdBdHRhY2ssXG4gIHJhbmRvbVgsXG4gIHJhbmRvbVlcbikgPT4ge1xuICBsZXQgeCA9IHJhbmRvbVg7XG4gIGxldCB5ID0gcmFuZG9tWTtcblxuICB3aGlsZSAoXG4gICAgd2FzQ29vcmRpbmF0ZUNsaWNrZWQod2hvSXNDb21wdXRlcihwbGF5ZXJBdHRhY2tpbmcsIHJlY2VpdmluZ0F0dGFjayksIFtcbiAgICAgIHgsXG4gICAgICB5XG4gICAgXSlcbiAgKSB7XG4gICAgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICg5IC0gMCArIDEpKSArIDA7XG4gICAgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICg5IC0gMCArIDEpKSArIDA7XG4gIH1cblxuICBjb3JyZWN0Q2VsbCh4LCB5KTtcbn07XG5cbi8vIEF0dGFja3MgYW4gYWRqYWNlbnQgY2VsbCBpZiBjb21wdXRlciBwcmV2aW91c2x5IGhpdFxuY29uc3QgYWRqYWNlbnRBdHRhY2sgPSAoXG4gIHBsYXllckF0dGFja2luZyxcbiAgcmVjZWl2aW5nQXR0YWNrLFxuICBbeCwgeV0sXG4gIHJhbmRvbVgsXG4gIHJhbmRvbVlcbikgPT4ge1xuICAvLyBJZiBhZGphY2VudCBjZWxsIGlzIHdpdGhpbiBnYW1lYm9hcmQgYW5kIGhhc24ndCBiZWVuIGNsaWNrZWRcbiAgaWYgKFxuICAgIHkgKyAxID49IDAgJiZcbiAgICB5ICsgMSA8PSA5ICYmXG4gICAgIXdhc0Nvb3JkaW5hdGVDbGlja2VkKHdob0lzQ29tcHV0ZXIocGxheWVyQXR0YWNraW5nLCByZWNlaXZpbmdBdHRhY2spLCBbXG4gICAgICB4LFxuICAgICAgeSArIDFcbiAgICBdKVxuICApIHtcbiAgICBjb3JyZWN0Q2VsbCh4LCB5ICsgMSk7XG4gIH0gZWxzZSBpZiAoXG4gICAgeCAtIDEgPj0gMCAmJlxuICAgIHggLSAxIDw9IDkgJiZcbiAgICAhd2FzQ29vcmRpbmF0ZUNsaWNrZWQod2hvSXNDb21wdXRlcihwbGF5ZXJBdHRhY2tpbmcsIHJlY2VpdmluZ0F0dGFjayksIFtcbiAgICAgIHggLSAxLFxuICAgICAgeVxuICAgIF0pXG4gICkge1xuICAgIGNvcnJlY3RDZWxsKHggLSAxLCB5KTtcbiAgfSBlbHNlIGlmIChcbiAgICB5IC0gMSA+PSAwICYmXG4gICAgeSAtIDEgPD0gOSAmJlxuICAgICF3YXNDb29yZGluYXRlQ2xpY2tlZCh3aG9Jc0NvbXB1dGVyKHBsYXllckF0dGFja2luZywgcmVjZWl2aW5nQXR0YWNrKSwgW1xuICAgICAgeCxcbiAgICAgIHkgLSAxXG4gICAgXSlcbiAgKSB7XG4gICAgY29ycmVjdENlbGwoeCwgeSAtIDEpO1xuICB9IGVsc2UgaWYgKFxuICAgIHggKyAxID49IDAgJiZcbiAgICB4ICsgMSA8PSA5ICYmXG4gICAgIXdhc0Nvb3JkaW5hdGVDbGlja2VkKHdob0lzQ29tcHV0ZXIocGxheWVyQXR0YWNraW5nLCByZWNlaXZpbmdBdHRhY2spLCBbXG4gICAgICB4ICsgMSxcbiAgICAgIHlcbiAgICBdKVxuICApIHtcbiAgICBjb3JyZWN0Q2VsbCh4ICsgMSwgeSk7XG4gIH0gZWxzZSB7XG4gICAgbmV3UmFuZG9tQ29vcmRpbmF0ZShwbGF5ZXJBdHRhY2tpbmcsIHJlY2VpdmluZ0F0dGFjaywgcmFuZG9tWCwgcmFuZG9tWSk7XG4gIH1cbn07XG5cbi8vIENob29zZXMgYSBjb29yZGluYXRlIGZvciBDb21wdXRlcidzIHR1cm5cbmNvbnN0IGNvbXB1dGVyQ2xpY2sgPSAocGxheWVyQXR0YWNraW5nLCByZWNlaXZpbmdBdHRhY2ssIFt4LCB5XSwgaGl0U3RhdHVzKSA9PiB7XG4gIGlmIChjdXJyZW50VHVybi5wbGF5ZXJOYW1lID09PSBcIkNvbXB1dGVyXCIpIHtcbiAgICBjb25zdCByYW5kb21YID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDkgLSAwICsgMSkpICsgMDtcbiAgICBjb25zdCByYW5kb21ZID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDkgLSAwICsgMSkpICsgMDtcblxuICAgIGlmIChoaXRTdGF0dXMgPT09IFwiaGl0XCIpIHtcbiAgICAgIGFkamFjZW50QXR0YWNrKFxuICAgICAgICBwbGF5ZXJBdHRhY2tpbmcsXG4gICAgICAgIHJlY2VpdmluZ0F0dGFjayxcbiAgICAgICAgW3gsIHldLFxuICAgICAgICByYW5kb21YLFxuICAgICAgICByYW5kb21ZXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBuZXdSYW5kb21Db29yZGluYXRlKHBsYXllckF0dGFja2luZywgcmVjZWl2aW5nQXR0YWNrLCByYW5kb21YLCByYW5kb21ZKTtcbiAgICB9XG4gIH1cbn07XG5cbi8vIERpc3BsYXlzIHdpbm5lciBvZiB0aGUgZ2FtZVxuY29uc3QgZGlzcGxheVdpbm5lciA9IChwbGF5ZXJBdHRhY2tpbmcpID0+IHtcbiAgY29uc29sZS5sb2cocGxheWVyQXR0YWNraW5nLm5hbWUpO1xufTtcblxuLy8gRW5kcyBnYW1lIGFuZCBkaXNwbGF5cyB3aW5uZXJcbmNvbnN0IHBsYXllcldpbiA9IChwbGF5ZXJBdHRhY2tpbmcsIHJlY2VpdmluZ0F0dGFjaywgY29udHJvbGxlcikgPT4ge1xuICBpZiAocmVjZWl2aW5nQXR0YWNrLnBsYXllckJvYXJkLmFsbFN1bmsoWzAsIDBdKSkge1xuICAgIGNvbnRyb2xsZXIuYWJvcnQoKTtcblxuICAgIGRpc3BsYXlXaW5uZXIocGxheWVyQXR0YWNraW5nKTtcbiAgfVxufTtcblxuZXhwb3J0IHsgd2FzQ29vcmRpbmF0ZUNsaWNrZWQsIHdob3NlVHVybiwgcGxheWVyV2luLCBjb21wdXRlckNsaWNrIH07XG4iLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHsgY3VycmVudFR1cm4sIHBsYXllcjEsIHBsYXllcjIsIHBsYXllcjJTaGlwcyB9IGZyb20gXCIuL2ZhY3Rvcmllc1wiO1xuaW1wb3J0IHtcbiAgY3JlYXRlVGFibGUsXG4gIGNsaWNrQXR0YWNrLFxuICBkcmFnTGlzdGVuZXIsXG4gIHNoaXBJZGVudGlmeSxcbiAgZHJvcFRvR2FtZWJvYXJkLFxuICBkcmFnT3Zlckxpc3RlbmVyXG59IGZyb20gXCIuL2RvbVwiO1xuXG4oKCkgPT4ge1xuICAvLyBQbGFjZXMgcGxheWVyMiBzaGlwcyBvbiBnYW1lYm9hcmRcbiAgcGxheWVyMi5wbGF5ZXJCb2FyZC5ib2FyZFswXVsyXSA9IHBsYXllcjJTaGlwcy5iYXR0bGVzaGlwMjtcbiAgcGxheWVyMi5wbGF5ZXJCb2FyZC5ib2FyZFswXVszXSA9IHBsYXllcjJTaGlwcy5iYXR0bGVzaGlwMjtcbiAgcGxheWVyMi5wbGF5ZXJCb2FyZC5ib2FyZFswXVs0XSA9IHBsYXllcjJTaGlwcy5iYXR0bGVzaGlwMjtcbiAgcGxheWVyMi5wbGF5ZXJCb2FyZC5ib2FyZFswXVs1XSA9IHBsYXllcjJTaGlwcy5iYXR0bGVzaGlwMjtcblxuICBwbGF5ZXIyLnBsYXllckJvYXJkLmJvYXJkWzBdWzBdID0gcGxheWVyMlNoaXBzLnN1Ym1hcmluZTIxO1xuICBwbGF5ZXIyLnBsYXllckJvYXJkLmJvYXJkWzFdWzBdID0gcGxheWVyMlNoaXBzLnN1Ym1hcmluZTIxO1xuXG4gIHBsYXllcjIucGxheWVyQm9hcmQuYm9hcmRbMl1bM10gPSBwbGF5ZXIyU2hpcHMuc3VibWFyaW5lMjI7XG4gIHBsYXllcjIucGxheWVyQm9hcmQuYm9hcmRbM11bM10gPSBwbGF5ZXIyU2hpcHMuc3VibWFyaW5lMjI7XG5cbiAgcGxheWVyMi5wbGF5ZXJCb2FyZC5ib2FyZFs3XVs4XSA9IHBsYXllcjJTaGlwcy5zdWJtYXJpbmUyMztcbiAgcGxheWVyMi5wbGF5ZXJCb2FyZC5ib2FyZFs3XVs5XSA9IHBsYXllcjJTaGlwcy5zdWJtYXJpbmUyMztcblxuICBwbGF5ZXIyLnBsYXllckJvYXJkLmJvYXJkWzVdWzNdID0gcGxheWVyMlNoaXBzLmRlc3Ryb3llcjIxO1xuICBwbGF5ZXIyLnBsYXllckJvYXJkLmJvYXJkWzVdWzRdID0gcGxheWVyMlNoaXBzLmRlc3Ryb3llcjIxO1xuICBwbGF5ZXIyLnBsYXllckJvYXJkLmJvYXJkWzVdWzVdID0gcGxheWVyMlNoaXBzLmRlc3Ryb3llcjIxO1xuXG4gIHBsYXllcjIucGxheWVyQm9hcmQuYm9hcmRbOV1bMl0gPSBwbGF5ZXIyU2hpcHMuZGVzdHJveWVyMjI7XG4gIHBsYXllcjIucGxheWVyQm9hcmQuYm9hcmRbOV1bM10gPSBwbGF5ZXIyU2hpcHMuZGVzdHJveWVyMjI7XG4gIHBsYXllcjIucGxheWVyQm9hcmQuYm9hcmRbOV1bNF0gPSBwbGF5ZXIyU2hpcHMuZGVzdHJveWVyMjI7XG5cbiAgcGxheWVyMi5wbGF5ZXJCb2FyZC5ib2FyZFsxXVs4XSA9IHBsYXllcjJTaGlwcy5wYXRyb2xCb2F0MjE7XG5cbiAgcGxheWVyMi5wbGF5ZXJCb2FyZC5ib2FyZFsyXVs1XSA9IHBsYXllcjJTaGlwcy5wYXRyb2xCb2F0MjI7XG5cbiAgcGxheWVyMi5wbGF5ZXJCb2FyZC5ib2FyZFszXVs5XSA9IHBsYXllcjJTaGlwcy5wYXRyb2xCb2F0MjM7XG5cbiAgcGxheWVyMi5wbGF5ZXJCb2FyZC5ib2FyZFs3XVs1XSA9IHBsYXllcjJTaGlwcy5wYXRyb2xCb2F0MjQ7XG5cbiAgLy8gRGlzcGxheXMgcGxheWVyIGdhbWVib2FyZHNcbiAgY3JlYXRlVGFibGUoXCIucDFCb2FyZFwiLCBcInAxR3JpZFwiKTtcbiAgY3JlYXRlVGFibGUoXCIucDJCb2FyZFwiLCBcInAyR3JpZFwiKTtcblxuICAvLyBNYWtlcyBzaGlwIGRpdnMgZHJhZ2dhYmxlXG4gIGRyYWdMaXN0ZW5lcihcIiNiYXR0bGVzaGlwMVwiKTtcbiAgZHJhZ092ZXJMaXN0ZW5lcigpO1xuXG4gIC8vIEFkZHMgZHJvcHBlZCBzaGlwIHRvIGdhbWVib2FyZCBpbiBwbGF5ZXIgb2JqZWN0IGFuZCBpbnRlcmZhY2VcbiAgY29uc3QgZ3JpZENlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wMUdyaWQgLmNlbGxcIik7XG4gIGdyaWRDZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFwiZHJvcFwiLCAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IHhDb29yZCA9IE51bWJlcihjZWxsLmRhdGFzZXQueCk7XG4gICAgICBjb25zdCB5Q29vcmQgPSBOdW1iZXIoY2VsbC5kYXRhc2V0LnkpO1xuICAgICAgY29uc3Qgc2hpcElkZW50aWZpZXIgPSBzaGlwSWRlbnRpZnkoZXZlbnQpO1xuXG4gICAgICAvLyBEZWNpZGVzIHdoaWNoIGRpcmVjdGlvbiBpcyBhIHZhbGlkIG1vdmVcbiAgICAgIGlmIChcbiAgICAgICAgcGxheWVyMS5wbGF5ZXJCb2FyZC5lbm91Z2hTcGFjZXMoXG4gICAgICAgICAgeENvb3JkLFxuICAgICAgICAgIHlDb29yZCxcbiAgICAgICAgICBzaGlwSWRlbnRpZmllci5sZW5ndGgsXG4gICAgICAgICAgXCJyaWdodFwiXG4gICAgICAgIClcbiAgICAgICkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcGxheWVyMS5wbGF5ZXJCb2FyZC5zcGFjZUJldHdlZW4oXG4gICAgICAgICAgICB4Q29vcmQsXG4gICAgICAgICAgICB5Q29vcmQsXG4gICAgICAgICAgICBzaGlwSWRlbnRpZmllci5sZW5ndGgsXG4gICAgICAgICAgICBcInJpZ2h0XCJcbiAgICAgICAgICApXG4gICAgICAgICkge1xuICAgICAgICAgIGRyb3BUb0dhbWVib2FyZChcbiAgICAgICAgICAgIGV2ZW50LFxuICAgICAgICAgICAgeENvb3JkLFxuICAgICAgICAgICAgeUNvb3JkLFxuICAgICAgICAgICAgc2hpcElkZW50aWZpZXIuc2hpcE5hbWUsXG4gICAgICAgICAgICBzaGlwSWRlbnRpZmllci5sZW5ndGgsXG4gICAgICAgICAgICBcInJpZ2h0XCJcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChcbiAgICAgICAgcGxheWVyMS5wbGF5ZXJCb2FyZC5lbm91Z2hTcGFjZXMoXG4gICAgICAgICAgeENvb3JkLFxuICAgICAgICAgIHlDb29yZCxcbiAgICAgICAgICBzaGlwSWRlbnRpZmllci5sZW5ndGgsXG4gICAgICAgICAgXCJsZWZ0XCJcbiAgICAgICAgKVxuICAgICAgKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwbGF5ZXIxLnBsYXllckJvYXJkLnNwYWNlQmV0d2VlbihcbiAgICAgICAgICAgIHhDb29yZCxcbiAgICAgICAgICAgIHlDb29yZCxcbiAgICAgICAgICAgIHNoaXBJZGVudGlmaWVyLmxlbmd0aCxcbiAgICAgICAgICAgIFwibGVmdFwiXG4gICAgICAgICAgKVxuICAgICAgICApIHtcbiAgICAgICAgICBkcm9wVG9HYW1lYm9hcmQoXG4gICAgICAgICAgICBldmVudCxcbiAgICAgICAgICAgIHhDb29yZCxcbiAgICAgICAgICAgIHlDb29yZCxcbiAgICAgICAgICAgIHNoaXBJZGVudGlmaWVyLnNoaXBOYW1lLFxuICAgICAgICAgICAgc2hpcElkZW50aWZpZXIubGVuZ3RoLFxuICAgICAgICAgICAgXCJsZWZ0XCJcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChcbiAgICAgICAgcGxheWVyMS5wbGF5ZXJCb2FyZC5lbm91Z2hTcGFjZXMoXG4gICAgICAgICAgeENvb3JkLFxuICAgICAgICAgIHlDb29yZCxcbiAgICAgICAgICBzaGlwSWRlbnRpZmllci5sZW5ndGgsXG4gICAgICAgICAgXCJkb3duXCJcbiAgICAgICAgKVxuICAgICAgKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwbGF5ZXIxLnBsYXllckJvYXJkLnNwYWNlQmV0d2VlbihcbiAgICAgICAgICAgIHhDb29yZCxcbiAgICAgICAgICAgIHlDb29yZCxcbiAgICAgICAgICAgIHNoaXBJZGVudGlmaWVyLmxlbmd0aCxcbiAgICAgICAgICAgIFwiZG93blwiXG4gICAgICAgICAgKVxuICAgICAgICApIHtcbiAgICAgICAgICBkcm9wVG9HYW1lYm9hcmQoXG4gICAgICAgICAgICBldmVudCxcbiAgICAgICAgICAgIHhDb29yZCxcbiAgICAgICAgICAgIHlDb29yZCxcbiAgICAgICAgICAgIHNoaXBJZGVudGlmaWVyLnNoaXBOYW1lLFxuICAgICAgICAgICAgc2hpcElkZW50aWZpZXIubGVuZ3RoLFxuICAgICAgICAgICAgXCJkb3duXCJcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChcbiAgICAgICAgcGxheWVyMS5wbGF5ZXJCb2FyZC5lbm91Z2hTcGFjZXMoXG4gICAgICAgICAgeENvb3JkLFxuICAgICAgICAgIHlDb29yZCxcbiAgICAgICAgICBzaGlwSWRlbnRpZmllci5sZW5ndGgsXG4gICAgICAgICAgXCJ1cFwiXG4gICAgICAgIClcbiAgICAgICkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcGxheWVyMS5wbGF5ZXJCb2FyZC5zcGFjZUJldHdlZW4oXG4gICAgICAgICAgICB4Q29vcmQsXG4gICAgICAgICAgICB5Q29vcmQsXG4gICAgICAgICAgICBzaGlwSWRlbnRpZmllci5sZW5ndGgsXG4gICAgICAgICAgICBcInVwXCJcbiAgICAgICAgICApXG4gICAgICAgICkge1xuICAgICAgICAgIGRyb3BUb0dhbWVib2FyZChcbiAgICAgICAgICAgIGV2ZW50LFxuICAgICAgICAgICAgeENvb3JkLFxuICAgICAgICAgICAgeUNvb3JkLFxuICAgICAgICAgICAgc2hpcElkZW50aWZpZXIuc2hpcE5hbWUsXG4gICAgICAgICAgICBzaGlwSWRlbnRpZmllci5sZW5ndGgsXG4gICAgICAgICAgICBcInVwXCJcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHBsYXllcjEucGxheWVyQm9hcmQuY29sb3JHYW1lYm9hcmRTaGlwcyhbMCwgMF0pO1xuICAgIH0pO1xuICB9KTtcblxuICAvLyBEZXRlcm1pbmVzIHdoaWNoIHBsYXllciBnb2VzIGZpcnN0XG4gIGN1cnJlbnRUdXJuLnBsYXllck5hbWUgPSBwbGF5ZXIxLm5hbWU7XG5cbiAgLy8gQ3JlYXRlcyBnYW1lYm9hcmQgZXZlbnRsaXN0ZW5lcnMgYW5kIGFib3J0IHNpZ25hbFxuICBjb25zdCBjb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xuXG4gIGNsaWNrQXR0YWNrKHBsYXllcjEsIHBsYXllcjIsIFwiLnAyR3JpZFwiLCBjb250cm9sbGVyKTtcbiAgY2xpY2tBdHRhY2socGxheWVyMiwgcGxheWVyMSwgXCIucDFHcmlkXCIsIGNvbnRyb2xsZXIpO1xufSkoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==