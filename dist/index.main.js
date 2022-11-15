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
/* harmony export */   "drop": () => (/* binding */ drop)
/* harmony export */ });
/* harmony import */ var _factories__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factories */ "./src/factories.js");
/* harmony import */ var _gameModule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameModule */ "./src/gameModule.js");
/* eslint-disable import/no-cycle */
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */



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

// ***DOES ACTIONs*** when item is dropped
const drop = (ev) => {
  ev.preventDefault();
  const data = ev.dataTransfer.getData("text");
  return data;
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
/* harmony export */   "shipLength": () => (/* binding */ shipLength),
/* harmony export */   "wasCoordinateClicked": () => (/* binding */ wasCoordinateClicked),
/* harmony export */   "whoseTurn": () => (/* binding */ whoseTurn)
/* harmony export */ });
/* harmony import */ var _factories__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factories */ "./src/factories.js");
/* eslint-disable import/no-cycle */
/* eslint-disable consistent-return */
/* eslint-disable no-plusplus */


// Returns ship length
const shipLength = (shipName) => {
  const battleship = /^[battleship]/;
  const destroyer = /^[destroyer]/;
  const submarine = /^[submarine]/;
  const patrolBoat = /^[patrolBoat]/;

  if (shipName.match(battleship)) {
    return 4;
  }

  if (shipName.match(destroyer)) {
    return 3;
  }

  if (shipName.match(submarine)) {
    return 2;
  }

  if (shipName.match(patrolBoat)) {
    return 1;
  }
};

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
  // Places player1 ships on gameboard
  // player1.playerBoard.board[0][2] = battleship1;
  _factories__WEBPACK_IMPORTED_MODULE_1__.player1.playerBoard.board[0][3] = _factories__WEBPACK_IMPORTED_MODULE_1__.player1Ships.battleship1;
  _factories__WEBPACK_IMPORTED_MODULE_1__.player1.playerBoard.board[0][4] = _factories__WEBPACK_IMPORTED_MODULE_1__.player1Ships.battleship1;
  _factories__WEBPACK_IMPORTED_MODULE_1__.player1.playerBoard.board[0][5] = _factories__WEBPACK_IMPORTED_MODULE_1__.player1Ships.battleship1;

  _factories__WEBPACK_IMPORTED_MODULE_1__.player1.playerBoard.board[0][0] = _factories__WEBPACK_IMPORTED_MODULE_1__.player1Ships.submarine11;
  _factories__WEBPACK_IMPORTED_MODULE_1__.player1.playerBoard.board[1][0] = _factories__WEBPACK_IMPORTED_MODULE_1__.player1Ships.submarine11;

  _factories__WEBPACK_IMPORTED_MODULE_1__.player1.playerBoard.board[2][3] = _factories__WEBPACK_IMPORTED_MODULE_1__.player1Ships.submarine12;
  _factories__WEBPACK_IMPORTED_MODULE_1__.player1.playerBoard.board[3][3] = _factories__WEBPACK_IMPORTED_MODULE_1__.player1Ships.submarine12;

  _factories__WEBPACK_IMPORTED_MODULE_1__.player1.playerBoard.board[7][8] = _factories__WEBPACK_IMPORTED_MODULE_1__.player1Ships.submarine13;
  _factories__WEBPACK_IMPORTED_MODULE_1__.player1.playerBoard.board[7][9] = _factories__WEBPACK_IMPORTED_MODULE_1__.player1Ships.submarine13;

  _factories__WEBPACK_IMPORTED_MODULE_1__.player1.playerBoard.board[5][3] = _factories__WEBPACK_IMPORTED_MODULE_1__.player1Ships.destroyer11;
  _factories__WEBPACK_IMPORTED_MODULE_1__.player1.playerBoard.board[5][4] = _factories__WEBPACK_IMPORTED_MODULE_1__.player1Ships.destroyer11;
  _factories__WEBPACK_IMPORTED_MODULE_1__.player1.playerBoard.board[5][5] = _factories__WEBPACK_IMPORTED_MODULE_1__.player1Ships.destroyer11;

  _factories__WEBPACK_IMPORTED_MODULE_1__.player1.playerBoard.board[9][2] = _factories__WEBPACK_IMPORTED_MODULE_1__.player1Ships.destroyer12;
  _factories__WEBPACK_IMPORTED_MODULE_1__.player1.playerBoard.board[9][3] = _factories__WEBPACK_IMPORTED_MODULE_1__.player1Ships.destroyer12;
  _factories__WEBPACK_IMPORTED_MODULE_1__.player1.playerBoard.board[9][4] = _factories__WEBPACK_IMPORTED_MODULE_1__.player1Ships.destroyer12;

  _factories__WEBPACK_IMPORTED_MODULE_1__.player1.playerBoard.board[1][8] = _factories__WEBPACK_IMPORTED_MODULE_1__.player1Ships.patrolBoat11;

  _factories__WEBPACK_IMPORTED_MODULE_1__.player1.playerBoard.board[2][5] = _factories__WEBPACK_IMPORTED_MODULE_1__.player1Ships.patrolBoat12;

  _factories__WEBPACK_IMPORTED_MODULE_1__.player1.playerBoard.board[3][9] = _factories__WEBPACK_IMPORTED_MODULE_1__.player1Ships.patrolBoat13;

  _factories__WEBPACK_IMPORTED_MODULE_1__.player1.playerBoard.board[7][5] = _factories__WEBPACK_IMPORTED_MODULE_1__.player1Ships.patrolBoat14;

  // Places player1 ships on gameboard
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
      const shipName = (0,_dom__WEBPACK_IMPORTED_MODULE_2__.drop)(event);
      console.log(shipName);

      // Decides which direction is a valid move
      if (_factories__WEBPACK_IMPORTED_MODULE_1__.player1.playerBoard.enoughSpaces(xCoord, yCoord, 4, "right")) {
        if (_factories__WEBPACK_IMPORTED_MODULE_1__.player1.playerBoard.spaceBetween(xCoord, yCoord, 4, "right")) {
          console.log(shipName);
        }
      }

      if (_factories__WEBPACK_IMPORTED_MODULE_1__.player1.playerBoard.enoughSpaces(xCoord, yCoord, 4, "left")) {
        if (_factories__WEBPACK_IMPORTED_MODULE_1__.player1.playerBoard.spaceBetween(xCoord, yCoord, 4, "left")) {
          console.log((0,_dom__WEBPACK_IMPORTED_MODULE_2__.drop)(event));
        }
      }

      if (_factories__WEBPACK_IMPORTED_MODULE_1__.player1.playerBoard.enoughSpaces(xCoord, yCoord, 4, "down")) {
        if (_factories__WEBPACK_IMPORTED_MODULE_1__.player1.playerBoard.spaceBetween(xCoord, yCoord, 4, "down")) {
          console.log((0,_dom__WEBPACK_IMPORTED_MODULE_2__.drop)(event));
        }
      }

      if (_factories__WEBPACK_IMPORTED_MODULE_1__.player1.playerBoard.enoughSpaces(xCoord, yCoord, 4, "up")) {
        if (_factories__WEBPACK_IMPORTED_MODULE_1__.player1.playerBoard.spaceBetween(xCoord, yCoord, 4, "up")) {
          console.log((0,_dom__WEBPACK_IMPORTED_MODULE_2__.drop)(event));
        }
      }
    });
  });

  // Colors player grid squares that contain ships
  _factories__WEBPACK_IMPORTED_MODULE_1__.player1.playerBoard.colorGameboardShips([0, 0]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgubWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMsdUhBQXdDO0FBQ3BGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBLCtGQUErRixlQUFlLGNBQWMsR0FBRyxpREFBaUQsc0VBQXNFLGlDQUFpQywyQkFBMkIsR0FBRyx5Q0FBeUMsa0JBQWtCLDJCQUEyQixHQUFHLG9CQUFvQixZQUFZLGtCQUFrQixHQUFHLFlBQVksaUJBQWlCLEdBQUcsUUFBUSw0QkFBNEIsR0FBRyxhQUFhLGdCQUFnQixpQkFBaUIsR0FBRyxrQkFBa0Isa0JBQWtCLDJCQUEyQixHQUFHLG9CQUFvQixrQkFBa0IsMkJBQTJCLGNBQWMsR0FBRyx5QkFBeUIsa0JBQWtCLGNBQWMsR0FBRyxnQkFBZ0IsbUNBQW1DLGlCQUFpQixHQUFHLGtCQUFrQixpQkFBaUIsR0FBRyw0QkFBNEIsaUJBQWlCLEdBQUcsNEJBQTRCLGdCQUFnQixHQUFHLHlCQUF5QixnQkFBZ0IsR0FBRyxXQUFXLGtDQUFrQyx5Q0FBeUMsaUJBQWlCLEdBQUcsU0FBUyx1RkFBdUYsTUFBTSxVQUFVLFVBQVUsTUFBTSxZQUFZLE1BQU0sWUFBWSxhQUFhLGFBQWEsT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxNQUFNLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLDhFQUE4RSxlQUFlLGNBQWMsR0FBRyxpREFBaUQsaURBQWlELGlDQUFpQywyQkFBMkIsR0FBRyx5Q0FBeUMsa0JBQWtCLDJCQUEyQixHQUFHLG9CQUFvQixZQUFZLGtCQUFrQixHQUFHLFlBQVksaUJBQWlCLEdBQUcsUUFBUSw0QkFBNEIsR0FBRyxhQUFhLGdCQUFnQixpQkFBaUIsR0FBRyxrQkFBa0Isa0JBQWtCLDJCQUEyQixHQUFHLG9CQUFvQixrQkFBa0IsMkJBQTJCLGNBQWMsR0FBRyx5QkFBeUIsa0JBQWtCLGNBQWMsR0FBRyxnQkFBZ0IsbUNBQW1DLGlCQUFpQixHQUFHLGtCQUFrQixpQkFBaUIsR0FBRyw0QkFBNEIsaUJBQWlCLEdBQUcsNEJBQTRCLGdCQUFnQixHQUFHLHlCQUF5QixnQkFBZ0IsR0FBRyxXQUFXLGtDQUFrQyx5Q0FBeUMsaUJBQWlCLEdBQUcscUJBQXFCO0FBQy95RjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ1YxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFEQUFxRDtBQUNyRDs7QUFFQTtBQUNBLGdEQUFnRDtBQUNoRDs7QUFFQTtBQUNBLHFGQUFxRjtBQUNyRjs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLEtBQUs7QUFDTCxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIscUJBQXFCO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQ3JHYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsb0RBQW9EOztBQUVwRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUM1QmE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSw2RkFBYyxHQUFHLDZGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN2R2E7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDdENhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUNBO0FBQzBDO0FBT3BCOztBQUV0QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQSwwQ0FBMEMsV0FBVztBQUNyRDtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLFFBQVE7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMENBQTBDLFdBQVc7O0FBRXJELHFCQUFxQixXQUFXO0FBQ2hDO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSwwQkFBMEIsY0FBYztBQUN4Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEJBQThCLEVBQUUsMkJBQTJCLEVBQUU7QUFDN0Q7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsWUFBWTs7QUFFL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDhEQUFzQjtBQUNsQztBQUNBO0FBQ0E7O0FBRUEsZUFBZSxpRUFBb0I7QUFDbkM7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxZQUFZLHNEQUFTOztBQUVyQixZQUFZLHNEQUFTOztBQUVyQixZQUFZLDBEQUFhO0FBQ3pCO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsUUFBUTtBQUNSO0FBQ0EsR0FBRztBQUNIOztBQVNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4S0Y7QUFDQTtBQUNBO0FBQ3dDOztBQUV4QztBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLE1BQU0scURBQWU7O0FBRXJCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFD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LDBDQUFJO0FBQzNCOztBQUVBO0FBQ0EsVUFBVSx3RUFBZ0M7QUFDMUMsWUFBWSx3RUFBZ0M7QUFDNUM7QUFDQTtBQUNBOztBQUVBLFVBQVUsd0VBQWdDO0FBQzFDLFlBQVksd0VBQWdDO0FBQzVDLHNCQUFzQiwwQ0FBSTtBQUMxQjtBQUNBOztBQUVBLFVBQVUsd0VBQWdDO0FBQzFDLFlBQVksd0VBQWdDO0FBQzVDLHNCQUFzQiwwQ0FBSTtBQUMxQjtBQUNBOztBQUVBLFVBQVUsd0VBQWdDO0FBQzFDLFlBQVksd0VBQWdDO0FBQzVDLHNCQUFzQiwwQ0FBSTtBQUMxQjtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQSxFQUFFLCtFQUF1Qzs7QUFFekM7QUFDQSxFQUFFLDhEQUFzQixHQUFHLG9EQUFZOztBQUV2QztBQUNBOztBQUVBLEVBQUUsaURBQVcsQ0FBQywrQ0FBTyxFQUFFLCtDQUFPO0FBQzlCLEVBQUUsaURBQVcsQ0FBQywrQ0FBTyxFQUFFLCtDQUFPO0FBQzlCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZmFjdG9yaWVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZU1vZHVsZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltZy9iYWNrZ3JvdW5kLmpwZWdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKlJlbW92ZXMgcGFkZGluZyBhbmQgbWFyZ2luIGZyb20gYWxsIGVsZW1lbnRzKi9cXG4qIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi8qU2V0IHBhZ2Ugc2l6ZSBhbmQgYmFja3JvdW5kIGltYWdlKi9cXG5odG1sIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuLypTZXQgcGFnZSBsYXlvdXQgZGlyZWN0aW9uKi9cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ubWFpbkNvbnRhaW5lciB7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIHdpZHRoOiAyMDBweDtcXG59XFxuXFxudGQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxufVxcblxcbnRoLFxcbnRkIHtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbn1cXG5cXG4uZHJhZ0FuZERyb3Age1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5zaGlwQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4uc2hpcElubmVyQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbi5zaGlwT3V0ZXIge1xcbiAgYm9yZGVyOiAxcHggZG90dGVkIGdyZWVueWVsbG93O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbn1cXG5cXG4jYmF0dGxlc2hpcDEge1xcbiAgd2lkdGg6IDEzNHB4O1xcbn1cXG5cXG5kaXZbaWRePVxcXCJkZXN0cm95ZXJcXFwiXSB7XFxuICB3aWR0aDogMTAwcHg7XFxufVxcblxcbmRpdltpZF49XFxcInN1Ym1hcmluZVxcXCJdIHtcXG4gIHdpZHRoOiA2NnB4O1xcbn1cXG5cXG5kaXZbaWRePVxcXCJwYXRyb2xcXFwiXSB7XFxuICB3aWR0aDogMzBweDtcXG59XFxuXFxuLnNoaXAge1xcbiAgYm9yZGVyOiAycHggc29saWQgZ3JlZW55ZWxsb3c7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDEyOSk7XFxuICBoZWlnaHQ6IDMwcHg7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsK0NBQStDO0FBQy9DO0VBQ0UsVUFBVTtFQUNWLFNBQVM7QUFDWDs7QUFFQSxvQ0FBb0M7QUFDcEM7RUFDRSx5REFBNEM7RUFDNUMsNEJBQTRCO0VBQzVCLHNCQUFzQjtBQUN4Qjs7QUFFQSw0QkFBNEI7QUFDNUI7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsT0FBTztFQUNQLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTs7RUFFRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7QUFDWDs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0Isb0NBQW9DO0VBQ3BDLFlBQVk7QUFDZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKlJlbW92ZXMgcGFkZGluZyBhbmQgbWFyZ2luIGZyb20gYWxsIGVsZW1lbnRzKi9cXG4qIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi8qU2V0IHBhZ2Ugc2l6ZSBhbmQgYmFja3JvdW5kIGltYWdlKi9cXG5odG1sIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2ltZy9iYWNrZ3JvdW5kLmpwZWcpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbi8qU2V0IHBhZ2UgbGF5b3V0IGRpcmVjdGlvbiovXFxuYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLm1haW5Db250YWluZXIge1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbmZvb3RlciB7XFxuICB3aWR0aDogMjAwcHg7XFxufVxcblxcbnRkIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbn1cXG5cXG50aCxcXG50ZCB7XFxuICB3aWR0aDogMzBweDtcXG4gIGhlaWdodDogMzBweDtcXG59XFxuXFxuLmRyYWdBbmREcm9wIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uc2hpcENvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMjBweDtcXG59XFxuXFxuLnNoaXBJbm5lckNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4uc2hpcE91dGVyIHtcXG4gIGJvcmRlcjogMXB4IGRvdHRlZCBncmVlbnllbGxvdztcXG4gIGhlaWdodDogMzBweDtcXG59XFxuXFxuI2JhdHRsZXNoaXAxIHtcXG4gIHdpZHRoOiAxMzRweDtcXG59XFxuXFxuZGl2W2lkXj1cXFwiZGVzdHJveWVyXFxcIl0ge1xcbiAgd2lkdGg6IDEwMHB4O1xcbn1cXG5cXG5kaXZbaWRePVxcXCJzdWJtYXJpbmVcXFwiXSB7XFxuICB3aWR0aDogNjZweDtcXG59XFxuXFxuZGl2W2lkXj1cXFwicGF0cm9sXFxcIl0ge1xcbiAgd2lkdGg6IDMwcHg7XFxufVxcblxcbi5zaGlwIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyZWVueWVsbG93O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAxMjkpO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcGx1c3BsdXMgKi9cbmltcG9ydCB7IGN1cnJlbnRUdXJuIH0gZnJvbSBcIi4vZmFjdG9yaWVzXCI7XG5pbXBvcnQge1xuICB3YXNDb29yZGluYXRlQ2xpY2tlZCxcbiAgd2hvc2VUdXJuLFxuICBwbGF5ZXJXaW4sXG4gIGNvbXB1dGVyQ2xpY2ssXG4gIHNoaXBMZW5ndGhcbn0gZnJvbSBcIi4vZ2FtZU1vZHVsZVwiO1xuXG4vLyBBbGxvd3Mgc2hpcHMgdG8gYmUgZHJhZ2dlZFxuY29uc3QgZHJhZyA9IChldikgPT4ge1xuICBldi5kYXRhVHJhbnNmZXIuc2V0RGF0YShcInRleHRcIiwgZXYudGFyZ2V0LmlkKTtcbn07XG5cbi8vIFN0b3JlcyAqKipJTkZPKioqIHdoZW4gZHJhZyBzdGFydHNcbmNvbnN0IGRyYWdMaXN0ZW5lciA9IChzaGlwSUQpID0+IHtcbiAgY29uc3Qgc2hpcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2hpcElEKTtcbiAgc2hpcC5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ3N0YXJ0XCIsIGRyYWcpO1xufTtcblxuLy8gUHJldmVudHMgdGhlIGJyb3dzZXIgZGVmYXVsdCBoYW5kbGluZyBvZiB0aGUgZGF0YVxuY29uc3QgZHJhZ092ZXIgPSAoZXYpID0+IHtcbiAgZXYucHJldmVudERlZmF1bHQoKTtcbn07XG5cbi8vICoqKkRPRVMgQUNUSU9OcyoqKiB3aGVuIGl0ZW0gaXMgZHJvcHBlZFxuY29uc3QgZHJvcCA9IChldikgPT4ge1xuICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCBkYXRhID0gZXYuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJ0ZXh0XCIpO1xuICByZXR1cm4gZGF0YTtcbn07XG5cbi8vIENlbGxzIGxpc3RlbiBmb3IgaXRlbXMgdG8gYmUgZHJhZ2dlZCBvdmVyXG5jb25zdCBkcmFnT3Zlckxpc3RlbmVyID0gKCkgPT4ge1xuICBjb25zdCBncmlkQ2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnAxR3JpZCAuY2VsbFwiKTtcbiAgZ3JpZENlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnb3ZlclwiLCBkcmFnT3Zlcik7XG4gIH0pO1xufTtcblxuLy8gQ3JlYXRlcyB0aGUgZmlyc3Qgcm93IG9mIHRoZSB0YWJsZSBhbmQgbmFtZXMgY29sdW1uc1xuY29uc3QgY3JlYXRlQ29sdW1uSGVhZGluZ3MgPSAodGFibGVDbGFzcykgPT4ge1xuICBjb25zdCBncmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7dGFibGVDbGFzc31gKTtcbiAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xuICBjb25zdCBlbXB0eUhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhcIik7XG5cbiAgZ3JpZC5hcHBlbmRDaGlsZChyb3cpO1xuICByb3cuYXBwZW5kQ2hpbGQoZW1wdHlIZWFkaW5nKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICBjb25zdCBuZXdIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoXCIpO1xuICAgIG5ld0hlYWRpbmcudGV4dENvbnRlbnQgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDY1ICsgaSk7XG4gICAgcm93LmFwcGVuZENoaWxkKG5ld0hlYWRpbmcpO1xuICB9XG59O1xuXG4vLyBBZGRzIG5leHQgcm93IHdpdGggaGVhZGluZyBhbmQgZW1wdHkgY2VsbHNcbmNvbnN0IGNyZWF0ZVJvd3MgPSAodGFibGVDbGFzcykgPT4ge1xuICBjb25zdCBncmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7dGFibGVDbGFzc31gKTtcblxuICBmb3IgKGxldCBiaWdJID0gMDsgYmlnSSA8IDEwOyBiaWdJKyspIHtcbiAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiKTtcblxuICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSBiaWdJICsgMTtcblxuICAgIGdyaWQuYXBwZW5kQ2hpbGQocm93KTtcbiAgICByb3cuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG5cbiAgICBmb3IgKGxldCBsaXR0bGVJID0gMDsgbGl0dGxlSSA8IDEwOyBsaXR0bGVJKyspIHtcbiAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG5cbiAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcImNlbGxcIik7XG4gICAgICBjZWxsLnNldEF0dHJpYnV0ZShcImRhdGEteFwiLCBiaWdJKTtcbiAgICAgIGNlbGwuc2V0QXR0cmlidXRlKFwiZGF0YS15XCIsIGxpdHRsZUkpO1xuXG4gICAgICByb3cuYXBwZW5kQ2hpbGQoY2VsbCk7XG4gICAgfVxuICB9XG59O1xuXG4vLyBBZGRzIHRhYmxlIHRvIHAxQm9hcmQgZGl2XG5jb25zdCBjcmVhdGVUYWJsZSA9IChib2FyZENsYXNzLCB0YWJsZUNsYXNzKSA9PiB7XG4gIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihib2FyZENsYXNzKTtcbiAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7XG5cbiAgdGFibGUuY2xhc3NMaXN0LmFkZCh0YWJsZUNsYXNzKTtcbiAgYm9hcmQuYXBwZW5kQ2hpbGQodGFibGUpO1xuXG4gIGNyZWF0ZUNvbHVtbkhlYWRpbmdzKHRhYmxlQ2xhc3MpO1xuICBjcmVhdGVSb3dzKHRhYmxlQ2xhc3MpO1xufTtcblxuLy8gQ29sb3JzIHRoZSBncmlkIHNwYWNlIG9mIGdpdmVuIGNvb3JkaW5hdGVcbmNvbnN0IGNvbG9yQ29vcmRpbmF0ZSA9IChbYSwgYl0pID0+IHtcbiAgY29uc3QgZ3JpZENlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wMUdyaWQgLmNlbGxcIik7XG5cbiAgZ3JpZENlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICBpZiAoY2VsbC5kYXRhc2V0LnggPT09IGAke2F9YCAmJiBjZWxsLmRhdGFzZXQueSA9PT0gYCR7Yn1gKSB7XG4gICAgICBjZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwieWVsbG93XCI7XG4gICAgfVxuICB9KTtcbn07XG5cbi8vIENoYW5nZXMgY2VsbCBjb2xvciB3aGVuIGF0dGFja2VkXG5jb25zdCBjb2xvck9uQXR0YWNrID0gKGNlbGwsIGhpdFN0YXR1cykgPT4ge1xuICBpZiAoaGl0U3RhdHVzID09PSBcIm1pc3NcIikge1xuICAgIGNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ0YW5cIjtcbiAgICBjZWxsLnRleHRDb250ZW50ID0gXCLigKJcIjtcbiAgfVxuXG4gIGlmIChoaXRTdGF0dXMgPT09IFwiaGl0XCIpIHtcbiAgICBjZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicGlua1wiO1xuICAgIGNlbGwuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgcmVkXCI7XG4gICAgY2VsbC5zdHlsZS5jb2xvciA9IFwicmVkXCI7XG4gICAgY2VsbC50ZXh0Q29udGVudCA9IFwiWFwiO1xuICB9XG59O1xuXG4vLyBBdHRhY2tzIGdhbWVib2FyZCBhbmQgY2hlY2tzIHNoaXBzIHdoZW4gY29vcmRpbmF0ZSBjbGlja2VkXG5jb25zdCBjbGlja0F0dGFjayA9IChcbiAgcGxheWVyQXR0YWNraW5nLFxuICByZWNlaXZpbmdBdHRhY2ssXG4gIHRhYmxlQ2xhc3MsXG4gIGNvbnRyb2xsZXJcbikgPT4ge1xuICBjb25zdCBncmlkU3F1YXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYCR7dGFibGVDbGFzc30gLmNlbGxgKTtcblxuICBncmlkU3F1YXJlcy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgXCJjbGlja1wiLFxuICAgICAgKCkgPT4ge1xuICAgICAgICBpZiAoY3VycmVudFR1cm4ucGxheWVyTmFtZSA9PT0gcGxheWVyQXR0YWNraW5nLm5hbWUpIHtcbiAgICAgICAgICAvLyBTZXRzIGNvb3JkaW5hdGUgdmFsdWVzIGJhc2VkIG9uIGNlbGwgZGF0YVxuICAgICAgICAgIGNvbnN0IHggPSBOdW1iZXIoY2VsbC5kYXRhc2V0LngpO1xuICAgICAgICAgIGNvbnN0IHkgPSBOdW1iZXIoY2VsbC5kYXRhc2V0LnkpO1xuXG4gICAgICAgICAgaWYgKCF3YXNDb29yZGluYXRlQ2xpY2tlZChwbGF5ZXJBdHRhY2tpbmcsIFt4LCB5XSkpIHtcbiAgICAgICAgICAgIC8vIEFkZHMgY29vcmRpbmF0ZSB0byBhcnJheSBvZiBjbGlja2VkIGNvb3JkaW5hdGVzXG4gICAgICAgICAgICBwbGF5ZXJBdHRhY2tpbmcubWFya2VkU3BvdHMucHVzaChbeCwgeV0pO1xuXG4gICAgICAgICAgICBjb25zdCBoaXRTdGF0dXMgPSByZWNlaXZpbmdBdHRhY2sucGxheWVyQm9hcmQucmVjZWl2ZUF0dGFjayhbeCwgeV0pO1xuXG4gICAgICAgICAgICBjb2xvck9uQXR0YWNrKGNlbGwsIGhpdFN0YXR1cyk7XG5cbiAgICAgICAgICAgIHdob3NlVHVybihoaXRTdGF0dXMsIHBsYXllckF0dGFja2luZywgcmVjZWl2aW5nQXR0YWNrKTtcblxuICAgICAgICAgICAgcGxheWVyV2luKHBsYXllckF0dGFja2luZywgcmVjZWl2aW5nQXR0YWNrLCBjb250cm9sbGVyKTtcblxuICAgICAgICAgICAgY29tcHV0ZXJDbGljayhwbGF5ZXJBdHRhY2tpbmcsIHJlY2VpdmluZ0F0dGFjaywgW3gsIHldLCBoaXRTdGF0dXMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHsgc2lnbmFsOiBjb250cm9sbGVyLnNpZ25hbCB9XG4gICAgKTtcbiAgfSk7XG59O1xuXG5leHBvcnQge1xuICBjcmVhdGVUYWJsZSxcbiAgY29sb3JDb29yZGluYXRlLFxuICBjbGlja0F0dGFjayxcbiAgZHJhZ0xpc3RlbmVyLFxuICBkcm9wLFxuICBkcmFnT3Zlckxpc3RlbmVyXG59O1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcGx1c3BsdXMgKi9cbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgY29uc2lzdGVudC1yZXR1cm4gKi9cbmltcG9ydCB7IGNvbG9yQ29vcmRpbmF0ZSB9IGZyb20gXCIuL2RvbVwiO1xuXG4vLyBEZXRlcm1pbmVzIGlmIGFuIGF0dGFjayBoaXRzIG9yIG1pc3Nlc1xuY29uc3QgaGl0T3JNaXNzID0gKGluQ29vcmRpbmF0ZSkgPT4ge1xuICBpZiAoaW5Db29yZGluYXRlID09PSAwKSByZXR1cm4gXCJtaXNzXCI7XG5cbiAgaWYgKGluQ29vcmRpbmF0ZSA9PT0gMSkgcmV0dXJuIFwiYWxyZWFkeUhpdFwiO1xuXG4gIHJldHVybiBcImhpdFwiO1xufTtcblxuLy8gQ3JlYXRlcyBzaGlwcyB0byBwbGFjZSBvbiBnYW1lYm9hcmRcbmNvbnN0IHNoaXAgPSAobGVuZ3RoKSA9PiAoe1xuICBsZW5ndGgsXG4gIGhpdEFtb3VudDogMCxcbiAgc3VuazogZmFsc2UsXG4gIGhpdCgpIHtcbiAgICB0aGlzLmhpdEFtb3VudCArPSAxO1xuICB9LFxuICBpc1N1bmsoKSB7XG4gICAgaWYgKHRoaXMuaGl0QW1vdW50ID09PSB0aGlzLmxlbmd0aCkge1xuICAgICAgdGhpcy5zdW5rID0gdHJ1ZTtcbiAgICB9XG4gIH1cbn0pO1xuXG4vLyBDcmVhdGVzIGEgZ2FtZWJvYXJkXG5jb25zdCBnYW1lYm9hcmQgPSAoKSA9PiAoe1xuICBib2FyZDogW1xuICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXVxuICBdLFxuICAvLyBNYXJrcyBhdHRhY2tzIG9uIGdhbWVib2FyZFxuICByZWNlaXZlQXR0YWNrKFthLCBiXSkge1xuICAgIGNvbnN0IGluQ29vcmRpbmF0ZSA9IHRoaXMuYm9hcmRbYV1bYl07XG4gICAgY29uc3QgaGl0U3RhdHVzID0gaGl0T3JNaXNzKGluQ29vcmRpbmF0ZSk7XG5cbiAgICBpZiAoaGl0U3RhdHVzID09PSBcImhpdFwiKSB7XG4gICAgICBpbkNvb3JkaW5hdGUuaGl0KCk7XG4gICAgICBpbkNvb3JkaW5hdGUuaXNTdW5rKCk7XG4gICAgfSBlbHNlIGlmIChoaXRTdGF0dXMgPT09IFwibWlzc1wiKSB7XG4gICAgICB0aGlzLmJvYXJkW2FdW2JdID0gMTtcbiAgICB9XG5cbiAgICByZXR1cm4gaGl0U3RhdHVzO1xuICB9LFxuICAvLyBDaGVja3MgaWYgYWxsIHNoaXBzIGFyZSBzdW5rXG4gIGFsbFN1bmsoW2EsIGJdKSB7XG4gICAgaWYgKGEgPiA5KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoYiA8IDEwKSB7XG4gICAgICBjb25zdCBpbkNvb3JkaW5hdGUgPSB0aGlzLmJvYXJkW2FdW2JdO1xuXG4gICAgICBpZiAodHlwZW9mIGluQ29vcmRpbmF0ZSAhPT0gXCJvYmplY3RcIikge1xuICAgICAgICByZXR1cm4gdGhpcy5hbGxTdW5rKFthLCBiICsgMV0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoaW5Db29yZGluYXRlLnN1bmsgPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuYWxsU3VuayhbYSwgYiArIDFdKTtcbiAgICB9XG5cbiAgICBpZiAoYiA+IDkpIHtcbiAgICAgIHJldHVybiB0aGlzLmFsbFN1bmsoW2EgKyAxLCAwXSk7XG4gICAgfVxuICB9LFxuICAvLyBSdW5zIGEgZnVuY3Rpb24gdG8gY29sb3IgZ3JpZCBzcGFjZSBpZlxuICAvLyBpdCBjb250YWlucyBhIHNoaXBcbiAgY29sb3JHYW1lYm9hcmRTaGlwcyhbYSwgYl0pIHtcbiAgICBpZiAoYSA+IDkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoYiA8IDEwKSB7XG4gICAgICBjb25zdCBpbkNvb3JkaW5hdGUgPSB0aGlzLmJvYXJkW2FdW2JdO1xuXG4gICAgICBpZiAodHlwZW9mIGluQ29vcmRpbmF0ZSAhPT0gXCJvYmplY3RcIikge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2xvckdhbWVib2FyZFNoaXBzKFthLCBiICsgMV0pO1xuICAgICAgfVxuXG4gICAgICBjb2xvckNvb3JkaW5hdGUoW2EsIGJdKTtcblxuICAgICAgcmV0dXJuIHRoaXMuY29sb3JHYW1lYm9hcmRTaGlwcyhbYSwgYiArIDFdKTtcbiAgICB9XG5cbiAgICBpZiAoYiA+IDkpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbG9yR2FtZWJvYXJkU2hpcHMoW2EgKyAxLCAwXSk7XG4gICAgfVxuICB9LFxuICAvLyBDaGVja3MgaWYgdGhlcmUgYXJlIGVub3VnaCBzcGFjZXMgcmlnaHQvbGVmdC9kb3duL3VwIGZvciBhIHNoaXBcbiAgZW5vdWdoU3BhY2VzKHhDb29yZCwgeUNvb3JkLCBzaGlwTGVuZ3RoLCBkaXJlY3Rpb24pIHtcbiAgICAvLyBJZiBjb29yZGluYXRlIGlzIG9mZiB0aGUgYm9hcmQsIHJldHVybiBmYWxzZVxuICAgIGlmICh4Q29vcmQgPCAxMCAmJiB4Q29vcmQgPiAtMSAmJiB5Q29vcmQgPCAxMCAmJiB5Q29vcmQgPiAtMSkge1xuICAgICAgY29uc3QgaW5Db29yZGluYXRlID0gdGhpcy5ib2FyZFt4Q29vcmRdW3lDb29yZF07XG5cbiAgICAgIC8vIElmIGEgc2hpcCBpcyBhbHJlYWR5IGluIGNvb3JkaW5hdGUsIHJldHVybiBmYWxzZVxuICAgICAgaWYgKHR5cGVvZiBpbkNvb3JkaW5hdGUgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICAvLyBJZiBmdWxsIGxlbmd0aCBvZiBzaGlwIGlzIHJlYWNoZWQsIHJldHVybiB0cnVlXG4gICAgICBpZiAoc2hpcExlbmd0aCA9PT0gMSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgLy8gQ2hlY2sgbmV4dCBjb29yZGluYXRlIGluIGdpdmVuIGRpcmVjdGlvblxuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJyaWdodFwiKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVub3VnaFNwYWNlcyh4Q29vcmQsIHlDb29yZCArIDEsIHNoaXBMZW5ndGggLSAxLCBkaXJlY3Rpb24pO1xuICAgICAgfVxuXG4gICAgICBpZiAoZGlyZWN0aW9uID09PSBcImxlZnRcIikge1xuICAgICAgICByZXR1cm4gdGhpcy5lbm91Z2hTcGFjZXMoeENvb3JkLCB5Q29vcmQgLSAxLCBzaGlwTGVuZ3RoIC0gMSwgZGlyZWN0aW9uKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJkb3duXCIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZW5vdWdoU3BhY2VzKHhDb29yZCArIDEsIHlDb29yZCwgc2hpcExlbmd0aCAtIDEsIGRpcmVjdGlvbik7XG4gICAgICB9XG5cbiAgICAgIGlmIChkaXJlY3Rpb24gPT09IFwidXBcIikge1xuICAgICAgICByZXR1cm4gdGhpcy5lbm91Z2hTcGFjZXMoeENvb3JkIC0gMSwgeUNvb3JkLCBzaGlwTGVuZ3RoIC0gMSwgZGlyZWN0aW9uKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH0sXG4gIC8vIFJldHVybnMgdHJ1ZSBpZiBjb29yZGluYXRlIGlzIHVuZGVmaW5lZCBvciBlbXB0eVxuICBzcGFjZUVtcHR5KHhDb29yZCwgeUNvb3JkKSB7XG4gICAgaWYgKHhDb29yZCA8IDEwICYmIHhDb29yZCA+IC0xICYmIHlDb29yZCA8IDEwICYmIHlDb29yZCA+IC0xKSB7XG4gICAgICBpZiAodGhpcy5ib2FyZFt4Q29vcmRdW3lDb29yZF0gPT09IDApIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSxcbiAgLy8gQ2hlY2tzIGlmIHRoZXJlJ3MgZW5vdWdoIHNwYWNlIGJldHdlZW4gc2hpcHMgc2V0IGFuZCBzaGlwcyBiZWluZyBkcm9wcGVkXG4gIHNwYWNlQmV0d2Vlbih4Q29vcmQsIHlDb29yZCwgc2hpcExlbmd0aCwgZGlyZWN0aW9uKSB7XG4gICAgLy8gQ2hlY2tzIGlmIHN1cnJvdW5kaW5nIGNvb3JkaW5hdGVzIGFyZSBlbXB0eS91bmRlZmluZWRcbiAgICBjb25zdCB0b3AgPSB0aGlzLnNwYWNlRW1wdHkoeENvb3JkIC0gMSwgeUNvb3JkKTtcbiAgICBjb25zdCB0b3BSaWdodCA9IHRoaXMuc3BhY2VFbXB0eSh4Q29vcmQgLSAxLCB5Q29vcmQgKyAxKTtcbiAgICBjb25zdCByaWdodCA9IHRoaXMuc3BhY2VFbXB0eSh4Q29vcmQsIHlDb29yZCArIDEpO1xuICAgIGNvbnN0IGJvdHRvbVJpZ2h0ID0gdGhpcy5zcGFjZUVtcHR5KHhDb29yZCArIDEsIHlDb29yZCArIDEpO1xuICAgIGNvbnN0IGJvdHRvbSA9IHRoaXMuc3BhY2VFbXB0eSh4Q29vcmQgKyAxLCB5Q29vcmQpO1xuICAgIGNvbnN0IGJvdHRvbUxlZnQgPSB0aGlzLnNwYWNlRW1wdHkoeENvb3JkICsgMSwgeUNvb3JkIC0gMSk7XG4gICAgY29uc3QgbGVmdCA9IHRoaXMuc3BhY2VFbXB0eSh4Q29vcmQsIHlDb29yZCAtIDEpO1xuICAgIGNvbnN0IHRvcExlZnQgPSB0aGlzLnNwYWNlRW1wdHkoeENvb3JkIC0gMSwgeUNvb3JkIC0gMSk7XG5cbiAgICAvLyBJZiBhbnkgc3Vycm91bmRpbmcgY29vcmRpbmF0ZXMgYXJlbid0IGVtcHR5LCByZXR1cm4gZmFsc2VcbiAgICBpZiAoXG4gICAgICAhKFxuICAgICAgICB0b3AgJiZcbiAgICAgICAgdG9wUmlnaHQgJiZcbiAgICAgICAgcmlnaHQgJiZcbiAgICAgICAgYm90dG9tUmlnaHQgJiZcbiAgICAgICAgYm90dG9tICYmXG4gICAgICAgIGJvdHRvbUxlZnQgJiZcbiAgICAgICAgbGVmdCAmJlxuICAgICAgICB0b3BMZWZ0XG4gICAgICApXG4gICAgKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKHNoaXBMZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIENoZWNrIG5leHQgY29vcmRpbmF0ZSBpbiBnaXZlbiBkaXJlY3Rpb25cbiAgICBpZiAoZGlyZWN0aW9uID09PSBcInJpZ2h0XCIpIHtcbiAgICAgIHJldHVybiB0aGlzLnNwYWNlQmV0d2Vlbih4Q29vcmQsIHlDb29yZCArIDEsIHNoaXBMZW5ndGggLSAxLCBkaXJlY3Rpb24pO1xuICAgIH1cblxuICAgIGlmIChkaXJlY3Rpb24gPT09IFwibGVmdFwiKSB7XG4gICAgICByZXR1cm4gdGhpcy5zcGFjZUJldHdlZW4oeENvb3JkLCB5Q29vcmQgLSAxLCBzaGlwTGVuZ3RoIC0gMSwgZGlyZWN0aW9uKTtcbiAgICB9XG5cbiAgICBpZiAoZGlyZWN0aW9uID09PSBcImRvd25cIikge1xuICAgICAgcmV0dXJuIHRoaXMuc3BhY2VCZXR3ZWVuKHhDb29yZCArIDEsIHlDb29yZCwgc2hpcExlbmd0aCAtIDEsIGRpcmVjdGlvbik7XG4gICAgfVxuXG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJ1cFwiKSB7XG4gICAgICByZXR1cm4gdGhpcy5zcGFjZUJldHdlZW4oeENvb3JkIC0gMSwgeUNvb3JkLCBzaGlwTGVuZ3RoIC0gMSwgZGlyZWN0aW9uKTtcbiAgICB9XG4gIH1cbn0pO1xuXG4vLyBDcmVhdGVzIGEgcGxheWVyIGFuZCBhIGdhbWVib2FyZCBmb3IgdGhlbVxuY29uc3QgcGxheWVyID0gKG5hbWUpID0+ICh7XG4gIG5hbWUsXG4gIHBsYXllckJvYXJkOiBnYW1lYm9hcmQoKSxcbiAgbWFya2VkU3BvdHM6IFtdXG59KTtcblxuLy8gRHluYW1pYyBvYmplY3QgdG8gdHJhY2sgcGxheWVyIHR1cm5zXG5jb25zdCBjdXJyZW50VHVybiA9IHtcbiAgcGxheWVyTmFtZTogbnVsbFxufTtcblxuLy8gQ3JlYXRlcyBwbGF5ZXJzIGFuZCBib2FyZHNcbmNvbnN0IHBsYXllcjEgPSBwbGF5ZXIoXCJwbGF5ZXIxXCIpO1xuY29uc3QgcGxheWVyMiA9IHBsYXllcihcIkNvbXB1dGVyXCIpO1xuXG4vLyBDcmVhdGVzIHBsYXllcjEgc2hpcHNcbmNvbnN0IHBsYXllcjFTaGlwcyA9IHtcbiAgYmF0dGxlc2hpcDE6IHNoaXAoNCksXG4gIGRlc3Ryb3llcjExOiBzaGlwKDMpLFxuICBkZXN0cm95ZXIxMjogc2hpcCgzKSxcbiAgc3VibWFyaW5lMTE6IHNoaXAoMiksXG4gIHN1Ym1hcmluZTEyOiBzaGlwKDIpLFxuICBzdWJtYXJpbmUxMzogc2hpcCgyKSxcbiAgcGF0cm9sQm9hdDExOiBzaGlwKDEpLFxuICBwYXRyb2xCb2F0MTI6IHNoaXAoMSksXG4gIHBhdHJvbEJvYXQxMzogc2hpcCgxKSxcbiAgcGF0cm9sQm9hdDE0OiBzaGlwKDEpXG59O1xuXG4vLyBDcmVhdGVzIHBsYXllcjIgc2hpcHNcbmNvbnN0IHBsYXllcjJTaGlwcyA9IHtcbiAgYmF0dGxlc2hpcDI6IHNoaXAoNCksXG4gIGRlc3Ryb3llcjIxOiBzaGlwKDMpLFxuICBkZXN0cm95ZXIyMjogc2hpcCgzKSxcbiAgc3VibWFyaW5lMjE6IHNoaXAoMiksXG4gIHN1Ym1hcmluZTIyOiBzaGlwKDIpLFxuICBzdWJtYXJpbmUyMzogc2hpcCgyKSxcbiAgcGF0cm9sQm9hdDIxOiBzaGlwKDEpLFxuICBwYXRyb2xCb2F0MjI6IHNoaXAoMSksXG4gIHBhdHJvbEJvYXQyMzogc2hpcCgxKSxcbiAgcGF0cm9sQm9hdDI0OiBzaGlwKDEpXG59O1xuXG5leHBvcnQge1xuICBzaGlwLFxuICBwbGF5ZXIsXG4gIGN1cnJlbnRUdXJuLFxuICBnYW1lYm9hcmQsXG4gIGhpdE9yTWlzcyxcbiAgcGxheWVyMSxcbiAgcGxheWVyMixcbiAgcGxheWVyMVNoaXBzLFxuICBwbGF5ZXIyU2hpcHNcbn07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIGNvbnNpc3RlbnQtcmV0dXJuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wbHVzcGx1cyAqL1xuaW1wb3J0IHsgY3VycmVudFR1cm4gfSBmcm9tIFwiLi9mYWN0b3JpZXNcIjtcblxuLy8gUmV0dXJucyBzaGlwIGxlbmd0aFxuY29uc3Qgc2hpcExlbmd0aCA9IChzaGlwTmFtZSkgPT4ge1xuICBjb25zdCBiYXR0bGVzaGlwID0gL15bYmF0dGxlc2hpcF0vO1xuICBjb25zdCBkZXN0cm95ZXIgPSAvXltkZXN0cm95ZXJdLztcbiAgY29uc3Qgc3VibWFyaW5lID0gL15bc3VibWFyaW5lXS87XG4gIGNvbnN0IHBhdHJvbEJvYXQgPSAvXltwYXRyb2xCb2F0XS87XG5cbiAgaWYgKHNoaXBOYW1lLm1hdGNoKGJhdHRsZXNoaXApKSB7XG4gICAgcmV0dXJuIDQ7XG4gIH1cblxuICBpZiAoc2hpcE5hbWUubWF0Y2goZGVzdHJveWVyKSkge1xuICAgIHJldHVybiAzO1xuICB9XG5cbiAgaWYgKHNoaXBOYW1lLm1hdGNoKHN1Ym1hcmluZSkpIHtcbiAgICByZXR1cm4gMjtcbiAgfVxuXG4gIGlmIChzaGlwTmFtZS5tYXRjaChwYXRyb2xCb2F0KSkge1xuICAgIHJldHVybiAxO1xuICB9XG59O1xuXG4vLyBDaGVja3MgaWYgY29vcmRpbmF0ZSBoYXMgYmVlbiBjbGlja2VkIGFscmVhZHlcbmNvbnN0IHdhc0Nvb3JkaW5hdGVDbGlja2VkID0gKHBsYXllckF0dGFja2luZywgW3gsIHldKSA9PiB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcGxheWVyQXR0YWNraW5nLm1hcmtlZFNwb3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3Qgc3BvdCA9IHBsYXllckF0dGFja2luZy5tYXJrZWRTcG90c1tpXTtcblxuICAgIGlmIChzcG90WzBdID09PSB4ICYmIHNwb3RbMV0gPT09IHkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn07XG5cbi8vIERldGVybWluZXMgd2hpY2ggcGxheWVyIGdvZXMgbmV4dFxuY29uc3Qgd2hvc2VUdXJuID0gKGhpdFN0YXR1cywgcGxheWVyQXR0YWNraW5nLCByZWNlaXZpbmdBdHRhY2spID0+IHtcbiAgaWYgKGhpdFN0YXR1cyA9PT0gXCJoaXRcIikge1xuICAgIGN1cnJlbnRUdXJuLnBsYXllck5hbWUgPSBwbGF5ZXJBdHRhY2tpbmcubmFtZTtcbiAgfSBlbHNlIGlmIChoaXRTdGF0dXMgPT09IFwiYWxyZWFkeUhpdFwiKSB7XG4gICAgY3VycmVudFR1cm4ucGxheWVyTmFtZSA9IHBsYXllckF0dGFja2luZy5uYW1lO1xuICB9IGVsc2Uge1xuICAgIGN1cnJlbnRUdXJuLnBsYXllck5hbWUgPSByZWNlaXZpbmdBdHRhY2submFtZTtcbiAgfVxufTtcblxuLy8gUmV0dXJucyB3aGljaCBwbGF5ZXIgaXMgJ0NvbXB1dGVyJ1xuY29uc3Qgd2hvSXNDb21wdXRlciA9IChwbGF5ZXJBdHRhY2tpbmcsIHJlY2VpdmluZ0F0dGFjaykgPT4ge1xuICBpZiAocGxheWVyQXR0YWNraW5nLm5hbWUgPT09IFwiQ29tcHV0ZXJcIikge1xuICAgIHJldHVybiBwbGF5ZXJBdHRhY2tpbmc7XG4gIH1cblxuICBpZiAocmVjZWl2aW5nQXR0YWNrLm5hbWUgPT09IFwiQ29tcHV0ZXJcIikge1xuICAgIHJldHVybiByZWNlaXZpbmdBdHRhY2s7XG4gIH1cbn07XG5cbi8vIFNlbGVjdHMgY29ycmVjdCBjZWxsIHRvIGNsaWNrXG5jb25zdCBjb3JyZWN0Q2VsbCA9ICh4LCB5KSA9PiB7XG4gIGNvbnN0IGNvb3JkaW5hdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnAxR3JpZCAuY2VsbFwiKTtcbiAgY29vcmRpbmF0ZS5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgaWYgKE51bWJlcihjZWxsLmRhdGFzZXQueCkgPT09IHggJiYgTnVtYmVyKGNlbGwuZGF0YXNldC55KSA9PT0geSkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNlbGwuY2xpY2soKTtcbiAgICAgIH0sIFwiMjAwMFwiKTtcbiAgICB9XG4gIH0pO1xufTtcblxuLy8gU2V0cyBuZXcgKHJhbmRvbVgsIHJhbmRvbVkpIGlmIGNvbXB1dGVyIGNsaWNrZWQgY29vcmRpbmF0ZSBhbHJlYWR5XG5jb25zdCBuZXdSYW5kb21Db29yZGluYXRlID0gKFxuICBwbGF5ZXJBdHRhY2tpbmcsXG4gIHJlY2VpdmluZ0F0dGFjayxcbiAgcmFuZG9tWCxcbiAgcmFuZG9tWVxuKSA9PiB7XG4gIGxldCB4ID0gcmFuZG9tWDtcbiAgbGV0IHkgPSByYW5kb21ZO1xuXG4gIHdoaWxlIChcbiAgICB3YXNDb29yZGluYXRlQ2xpY2tlZCh3aG9Jc0NvbXB1dGVyKHBsYXllckF0dGFja2luZywgcmVjZWl2aW5nQXR0YWNrKSwgW1xuICAgICAgeCxcbiAgICAgIHlcbiAgICBdKVxuICApIHtcbiAgICB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDkgLSAwICsgMSkpICsgMDtcbiAgICB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDkgLSAwICsgMSkpICsgMDtcbiAgfVxuXG4gIGNvcnJlY3RDZWxsKHgsIHkpO1xufTtcblxuLy8gQXR0YWNrcyBhbiBhZGphY2VudCBjZWxsIGlmIGNvbXB1dGVyIHByZXZpb3VzbHkgaGl0XG5jb25zdCBhZGphY2VudEF0dGFjayA9IChcbiAgcGxheWVyQXR0YWNraW5nLFxuICByZWNlaXZpbmdBdHRhY2ssXG4gIFt4LCB5XSxcbiAgcmFuZG9tWCxcbiAgcmFuZG9tWVxuKSA9PiB7XG4gIC8vIElmIGFkamFjZW50IGNlbGwgaXMgd2l0aGluIGdhbWVib2FyZCBhbmQgaGFzbid0IGJlZW4gY2xpY2tlZFxuICBpZiAoXG4gICAgeSArIDEgPj0gMCAmJlxuICAgIHkgKyAxIDw9IDkgJiZcbiAgICAhd2FzQ29vcmRpbmF0ZUNsaWNrZWQod2hvSXNDb21wdXRlcihwbGF5ZXJBdHRhY2tpbmcsIHJlY2VpdmluZ0F0dGFjayksIFtcbiAgICAgIHgsXG4gICAgICB5ICsgMVxuICAgIF0pXG4gICkge1xuICAgIGNvcnJlY3RDZWxsKHgsIHkgKyAxKTtcbiAgfSBlbHNlIGlmIChcbiAgICB4IC0gMSA+PSAwICYmXG4gICAgeCAtIDEgPD0gOSAmJlxuICAgICF3YXNDb29yZGluYXRlQ2xpY2tlZCh3aG9Jc0NvbXB1dGVyKHBsYXllckF0dGFja2luZywgcmVjZWl2aW5nQXR0YWNrKSwgW1xuICAgICAgeCAtIDEsXG4gICAgICB5XG4gICAgXSlcbiAgKSB7XG4gICAgY29ycmVjdENlbGwoeCAtIDEsIHkpO1xuICB9IGVsc2UgaWYgKFxuICAgIHkgLSAxID49IDAgJiZcbiAgICB5IC0gMSA8PSA5ICYmXG4gICAgIXdhc0Nvb3JkaW5hdGVDbGlja2VkKHdob0lzQ29tcHV0ZXIocGxheWVyQXR0YWNraW5nLCByZWNlaXZpbmdBdHRhY2spLCBbXG4gICAgICB4LFxuICAgICAgeSAtIDFcbiAgICBdKVxuICApIHtcbiAgICBjb3JyZWN0Q2VsbCh4LCB5IC0gMSk7XG4gIH0gZWxzZSBpZiAoXG4gICAgeCArIDEgPj0gMCAmJlxuICAgIHggKyAxIDw9IDkgJiZcbiAgICAhd2FzQ29vcmRpbmF0ZUNsaWNrZWQod2hvSXNDb21wdXRlcihwbGF5ZXJBdHRhY2tpbmcsIHJlY2VpdmluZ0F0dGFjayksIFtcbiAgICAgIHggKyAxLFxuICAgICAgeVxuICAgIF0pXG4gICkge1xuICAgIGNvcnJlY3RDZWxsKHggKyAxLCB5KTtcbiAgfSBlbHNlIHtcbiAgICBuZXdSYW5kb21Db29yZGluYXRlKHBsYXllckF0dGFja2luZywgcmVjZWl2aW5nQXR0YWNrLCByYW5kb21YLCByYW5kb21ZKTtcbiAgfVxufTtcblxuLy8gQ2hvb3NlcyBhIGNvb3JkaW5hdGUgZm9yIENvbXB1dGVyJ3MgdHVyblxuY29uc3QgY29tcHV0ZXJDbGljayA9IChwbGF5ZXJBdHRhY2tpbmcsIHJlY2VpdmluZ0F0dGFjaywgW3gsIHldLCBoaXRTdGF0dXMpID0+IHtcbiAgaWYgKGN1cnJlbnRUdXJuLnBsYXllck5hbWUgPT09IFwiQ29tcHV0ZXJcIikge1xuICAgIGNvbnN0IHJhbmRvbVggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoOSAtIDAgKyAxKSkgKyAwO1xuICAgIGNvbnN0IHJhbmRvbVkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoOSAtIDAgKyAxKSkgKyAwO1xuXG4gICAgaWYgKGhpdFN0YXR1cyA9PT0gXCJoaXRcIikge1xuICAgICAgYWRqYWNlbnRBdHRhY2soXG4gICAgICAgIHBsYXllckF0dGFja2luZyxcbiAgICAgICAgcmVjZWl2aW5nQXR0YWNrLFxuICAgICAgICBbeCwgeV0sXG4gICAgICAgIHJhbmRvbVgsXG4gICAgICAgIHJhbmRvbVlcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1JhbmRvbUNvb3JkaW5hdGUocGxheWVyQXR0YWNraW5nLCByZWNlaXZpbmdBdHRhY2ssIHJhbmRvbVgsIHJhbmRvbVkpO1xuICAgIH1cbiAgfVxufTtcblxuLy8gRGlzcGxheXMgd2lubmVyIG9mIHRoZSBnYW1lXG5jb25zdCBkaXNwbGF5V2lubmVyID0gKHBsYXllckF0dGFja2luZykgPT4ge1xuICBjb25zb2xlLmxvZyhwbGF5ZXJBdHRhY2tpbmcubmFtZSk7XG59O1xuXG4vLyBFbmRzIGdhbWUgYW5kIGRpc3BsYXlzIHdpbm5lclxuY29uc3QgcGxheWVyV2luID0gKHBsYXllckF0dGFja2luZywgcmVjZWl2aW5nQXR0YWNrLCBjb250cm9sbGVyKSA9PiB7XG4gIGlmIChyZWNlaXZpbmdBdHRhY2sucGxheWVyQm9hcmQuYWxsU3VuayhbMCwgMF0pKSB7XG4gICAgY29udHJvbGxlci5hYm9ydCgpO1xuXG4gICAgZGlzcGxheVdpbm5lcihwbGF5ZXJBdHRhY2tpbmcpO1xuICB9XG59O1xuXG5leHBvcnQge1xuICB3YXNDb29yZGluYXRlQ2xpY2tlZCxcbiAgd2hvc2VUdXJuLFxuICBwbGF5ZXJXaW4sXG4gIGNvbXB1dGVyQ2xpY2ssXG4gIHNoaXBMZW5ndGhcbn07XG4iLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHtcbiAgY3VycmVudFR1cm4sXG4gIHBsYXllcjEsXG4gIHBsYXllcjIsXG4gIHBsYXllcjFTaGlwcyxcbiAgcGxheWVyMlNoaXBzXG59IGZyb20gXCIuL2ZhY3Rvcmllc1wiO1xuaW1wb3J0IHtcbiAgY3JlYXRlVGFibGUsXG4gIGNsaWNrQXR0YWNrLFxuICBkcmFnTGlzdGVuZXIsXG4gIGRyb3AsXG4gIGRyYWdPdmVyTGlzdGVuZXJcbn0gZnJvbSBcIi4vZG9tXCI7XG5cbigoKSA9PiB7XG4gIC8vIFBsYWNlcyBwbGF5ZXIxIHNoaXBzIG9uIGdhbWVib2FyZFxuICAvLyBwbGF5ZXIxLnBsYXllckJvYXJkLmJvYXJkWzBdWzJdID0gYmF0dGxlc2hpcDE7XG4gIHBsYXllcjEucGxheWVyQm9hcmQuYm9hcmRbMF1bM10gPSBwbGF5ZXIxU2hpcHMuYmF0dGxlc2hpcDE7XG4gIHBsYXllcjEucGxheWVyQm9hcmQuYm9hcmRbMF1bNF0gPSBwbGF5ZXIxU2hpcHMuYmF0dGxlc2hpcDE7XG4gIHBsYXllcjEucGxheWVyQm9hcmQuYm9hcmRbMF1bNV0gPSBwbGF5ZXIxU2hpcHMuYmF0dGxlc2hpcDE7XG5cbiAgcGxheWVyMS5wbGF5ZXJCb2FyZC5ib2FyZFswXVswXSA9IHBsYXllcjFTaGlwcy5zdWJtYXJpbmUxMTtcbiAgcGxheWVyMS5wbGF5ZXJCb2FyZC5ib2FyZFsxXVswXSA9IHBsYXllcjFTaGlwcy5zdWJtYXJpbmUxMTtcblxuICBwbGF5ZXIxLnBsYXllckJvYXJkLmJvYXJkWzJdWzNdID0gcGxheWVyMVNoaXBzLnN1Ym1hcmluZTEyO1xuICBwbGF5ZXIxLnBsYXllckJvYXJkLmJvYXJkWzNdWzNdID0gcGxheWVyMVNoaXBzLnN1Ym1hcmluZTEyO1xuXG4gIHBsYXllcjEucGxheWVyQm9hcmQuYm9hcmRbN11bOF0gPSBwbGF5ZXIxU2hpcHMuc3VibWFyaW5lMTM7XG4gIHBsYXllcjEucGxheWVyQm9hcmQuYm9hcmRbN11bOV0gPSBwbGF5ZXIxU2hpcHMuc3VibWFyaW5lMTM7XG5cbiAgcGxheWVyMS5wbGF5ZXJCb2FyZC5ib2FyZFs1XVszXSA9IHBsYXllcjFTaGlwcy5kZXN0cm95ZXIxMTtcbiAgcGxheWVyMS5wbGF5ZXJCb2FyZC5ib2FyZFs1XVs0XSA9IHBsYXllcjFTaGlwcy5kZXN0cm95ZXIxMTtcbiAgcGxheWVyMS5wbGF5ZXJCb2FyZC5ib2FyZFs1XVs1XSA9IHBsYXllcjFTaGlwcy5kZXN0cm95ZXIxMTtcblxuICBwbGF5ZXIxLnBsYXllckJvYXJkLmJvYXJkWzldWzJdID0gcGxheWVyMVNoaXBzLmRlc3Ryb3llcjEyO1xuICBwbGF5ZXIxLnBsYXllckJvYXJkLmJvYXJkWzldWzNdID0gcGxheWVyMVNoaXBzLmRlc3Ryb3llcjEyO1xuICBwbGF5ZXIxLnBsYXllckJvYXJkLmJvYXJkWzldWzRdID0gcGxheWVyMVNoaXBzLmRlc3Ryb3llcjEyO1xuXG4gIHBsYXllcjEucGxheWVyQm9hcmQuYm9hcmRbMV1bOF0gPSBwbGF5ZXIxU2hpcHMucGF0cm9sQm9hdDExO1xuXG4gIHBsYXllcjEucGxheWVyQm9hcmQuYm9hcmRbMl1bNV0gPSBwbGF5ZXIxU2hpcHMucGF0cm9sQm9hdDEyO1xuXG4gIHBsYXllcjEucGxheWVyQm9hcmQuYm9hcmRbM11bOV0gPSBwbGF5ZXIxU2hpcHMucGF0cm9sQm9hdDEzO1xuXG4gIHBsYXllcjEucGxheWVyQm9hcmQuYm9hcmRbN11bNV0gPSBwbGF5ZXIxU2hpcHMucGF0cm9sQm9hdDE0O1xuXG4gIC8vIFBsYWNlcyBwbGF5ZXIxIHNoaXBzIG9uIGdhbWVib2FyZFxuICBwbGF5ZXIyLnBsYXllckJvYXJkLmJvYXJkWzBdWzJdID0gcGxheWVyMlNoaXBzLmJhdHRsZXNoaXAyO1xuICBwbGF5ZXIyLnBsYXllckJvYXJkLmJvYXJkWzBdWzNdID0gcGxheWVyMlNoaXBzLmJhdHRsZXNoaXAyO1xuICBwbGF5ZXIyLnBsYXllckJvYXJkLmJvYXJkWzBdWzRdID0gcGxheWVyMlNoaXBzLmJhdHRsZXNoaXAyO1xuICBwbGF5ZXIyLnBsYXllckJvYXJkLmJvYXJkWzBdWzVdID0gcGxheWVyMlNoaXBzLmJhdHRsZXNoaXAyO1xuXG4gIHBsYXllcjIucGxheWVyQm9hcmQuYm9hcmRbMF1bMF0gPSBwbGF5ZXIyU2hpcHMuc3VibWFyaW5lMjE7XG4gIHBsYXllcjIucGxheWVyQm9hcmQuYm9hcmRbMV1bMF0gPSBwbGF5ZXIyU2hpcHMuc3VibWFyaW5lMjE7XG5cbiAgcGxheWVyMi5wbGF5ZXJCb2FyZC5ib2FyZFsyXVszXSA9IHBsYXllcjJTaGlwcy5zdWJtYXJpbmUyMjtcbiAgcGxheWVyMi5wbGF5ZXJCb2FyZC5ib2FyZFszXVszXSA9IHBsYXllcjJTaGlwcy5zdWJtYXJpbmUyMjtcblxuICBwbGF5ZXIyLnBsYXllckJvYXJkLmJvYXJkWzddWzhdID0gcGxheWVyMlNoaXBzLnN1Ym1hcmluZTIzO1xuICBwbGF5ZXIyLnBsYXllckJvYXJkLmJvYXJkWzddWzldID0gcGxheWVyMlNoaXBzLnN1Ym1hcmluZTIzO1xuXG4gIHBsYXllcjIucGxheWVyQm9hcmQuYm9hcmRbNV1bM10gPSBwbGF5ZXIyU2hpcHMuZGVzdHJveWVyMjE7XG4gIHBsYXllcjIucGxheWVyQm9hcmQuYm9hcmRbNV1bNF0gPSBwbGF5ZXIyU2hpcHMuZGVzdHJveWVyMjE7XG4gIHBsYXllcjIucGxheWVyQm9hcmQuYm9hcmRbNV1bNV0gPSBwbGF5ZXIyU2hpcHMuZGVzdHJveWVyMjE7XG5cbiAgcGxheWVyMi5wbGF5ZXJCb2FyZC5ib2FyZFs5XVsyXSA9IHBsYXllcjJTaGlwcy5kZXN0cm95ZXIyMjtcbiAgcGxheWVyMi5wbGF5ZXJCb2FyZC5ib2FyZFs5XVszXSA9IHBsYXllcjJTaGlwcy5kZXN0cm95ZXIyMjtcbiAgcGxheWVyMi5wbGF5ZXJCb2FyZC5ib2FyZFs5XVs0XSA9IHBsYXllcjJTaGlwcy5kZXN0cm95ZXIyMjtcblxuICBwbGF5ZXIyLnBsYXllckJvYXJkLmJvYXJkWzFdWzhdID0gcGxheWVyMlNoaXBzLnBhdHJvbEJvYXQyMTtcblxuICBwbGF5ZXIyLnBsYXllckJvYXJkLmJvYXJkWzJdWzVdID0gcGxheWVyMlNoaXBzLnBhdHJvbEJvYXQyMjtcblxuICBwbGF5ZXIyLnBsYXllckJvYXJkLmJvYXJkWzNdWzldID0gcGxheWVyMlNoaXBzLnBhdHJvbEJvYXQyMztcblxuICBwbGF5ZXIyLnBsYXllckJvYXJkLmJvYXJkWzddWzVdID0gcGxheWVyMlNoaXBzLnBhdHJvbEJvYXQyNDtcblxuICAvLyBEaXNwbGF5cyBwbGF5ZXIgZ2FtZWJvYXJkc1xuICBjcmVhdGVUYWJsZShcIi5wMUJvYXJkXCIsIFwicDFHcmlkXCIpO1xuICBjcmVhdGVUYWJsZShcIi5wMkJvYXJkXCIsIFwicDJHcmlkXCIpO1xuXG4gIC8vIE1ha2VzIHNoaXAgZGl2cyBkcmFnZ2FibGVcbiAgZHJhZ0xpc3RlbmVyKFwiI2JhdHRsZXNoaXAxXCIpO1xuICBkcmFnT3Zlckxpc3RlbmVyKCk7XG5cbiAgLy8gQWRkcyBkcm9wcGVkIHNoaXAgdG8gZ2FtZWJvYXJkIGluIHBsYXllciBvYmplY3QgYW5kIGludGVyZmFjZVxuICBjb25zdCBncmlkQ2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnAxR3JpZCAuY2VsbFwiKTtcbiAgZ3JpZENlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJkcm9wXCIsIChldmVudCkgPT4ge1xuICAgICAgY29uc3QgeENvb3JkID0gTnVtYmVyKGNlbGwuZGF0YXNldC54KTtcbiAgICAgIGNvbnN0IHlDb29yZCA9IE51bWJlcihjZWxsLmRhdGFzZXQueSk7XG4gICAgICBjb25zdCBzaGlwTmFtZSA9IGRyb3AoZXZlbnQpO1xuICAgICAgY29uc29sZS5sb2coc2hpcE5hbWUpO1xuXG4gICAgICAvLyBEZWNpZGVzIHdoaWNoIGRpcmVjdGlvbiBpcyBhIHZhbGlkIG1vdmVcbiAgICAgIGlmIChwbGF5ZXIxLnBsYXllckJvYXJkLmVub3VnaFNwYWNlcyh4Q29vcmQsIHlDb29yZCwgNCwgXCJyaWdodFwiKSkge1xuICAgICAgICBpZiAocGxheWVyMS5wbGF5ZXJCb2FyZC5zcGFjZUJldHdlZW4oeENvb3JkLCB5Q29vcmQsIDQsIFwicmlnaHRcIikpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhzaGlwTmFtZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHBsYXllcjEucGxheWVyQm9hcmQuZW5vdWdoU3BhY2VzKHhDb29yZCwgeUNvb3JkLCA0LCBcImxlZnRcIikpIHtcbiAgICAgICAgaWYgKHBsYXllcjEucGxheWVyQm9hcmQuc3BhY2VCZXR3ZWVuKHhDb29yZCwgeUNvb3JkLCA0LCBcImxlZnRcIikpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhkcm9wKGV2ZW50KSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHBsYXllcjEucGxheWVyQm9hcmQuZW5vdWdoU3BhY2VzKHhDb29yZCwgeUNvb3JkLCA0LCBcImRvd25cIikpIHtcbiAgICAgICAgaWYgKHBsYXllcjEucGxheWVyQm9hcmQuc3BhY2VCZXR3ZWVuKHhDb29yZCwgeUNvb3JkLCA0LCBcImRvd25cIikpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhkcm9wKGV2ZW50KSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHBsYXllcjEucGxheWVyQm9hcmQuZW5vdWdoU3BhY2VzKHhDb29yZCwgeUNvb3JkLCA0LCBcInVwXCIpKSB7XG4gICAgICAgIGlmIChwbGF5ZXIxLnBsYXllckJvYXJkLnNwYWNlQmV0d2Vlbih4Q29vcmQsIHlDb29yZCwgNCwgXCJ1cFwiKSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGRyb3AoZXZlbnQpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9KTtcblxuICAvLyBDb2xvcnMgcGxheWVyIGdyaWQgc3F1YXJlcyB0aGF0IGNvbnRhaW4gc2hpcHNcbiAgcGxheWVyMS5wbGF5ZXJCb2FyZC5jb2xvckdhbWVib2FyZFNoaXBzKFswLCAwXSk7XG5cbiAgLy8gRGV0ZXJtaW5lcyB3aGljaCBwbGF5ZXIgZ29lcyBmaXJzdFxuICBjdXJyZW50VHVybi5wbGF5ZXJOYW1lID0gcGxheWVyMS5uYW1lO1xuXG4gIC8vIENyZWF0ZXMgZ2FtZWJvYXJkIGV2ZW50bGlzdGVuZXJzIGFuZCBhYm9ydCBzaWduYWxcbiAgY29uc3QgY29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTtcblxuICBjbGlja0F0dGFjayhwbGF5ZXIxLCBwbGF5ZXIyLCBcIi5wMkdyaWRcIiwgY29udHJvbGxlcik7XG4gIGNsaWNrQXR0YWNrKHBsYXllcjIsIHBsYXllcjEsIFwiLnAxR3JpZFwiLCBjb250cm9sbGVyKTtcbn0pKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=