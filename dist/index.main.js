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
___CSS_LOADER_EXPORT___.push([module.id, "/*Removes padding and margin from all elements*/\n* {\n  padding: 0;\n  margin: 0;\n}\n\n/*Set page size and backround image*/\nhtml {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n/*Set page layout direction*/\nbody {\n  display: flex;\n  flex-direction: column;\n}\n\n.mainContainer {\n  flex: 1;\n  display: flex;\n}\n\nfooter {\n  width: 200px;\n}\n\ntd {\n  border: 1px solid white;\n}\n\nth,\ntd {\n  width: 30px;\n  height: 30px;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,+CAA+C;AAC/C;EACE,UAAU;EACV,SAAS;AACX;;AAEA,oCAAoC;AACpC;EACE,yDAA4C;EAC5C,4BAA4B;EAC5B,sBAAsB;AACxB;;AAEA,4BAA4B;AAC5B;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,OAAO;EACP,aAAa;AACf;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,uBAAuB;AACzB;;AAEA;;EAEE,WAAW;EACX,YAAY;AACd","sourcesContent":["/*Removes padding and margin from all elements*/\n* {\n  padding: 0;\n  margin: 0;\n}\n\n/*Set page size and backround image*/\nhtml {\n  background-image: url(./img/background.jpeg);\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n/*Set page layout direction*/\nbody {\n  display: flex;\n  flex-direction: column;\n}\n\n.mainContainer {\n  flex: 1;\n  display: flex;\n}\n\nfooter {\n  width: 200px;\n}\n\ntd {\n  border: 1px solid white;\n}\n\nth,\ntd {\n  width: 30px;\n  height: 30px;\n}\n"],"sourceRoot":""}]);
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
/* harmony export */   "createTable": () => (/* binding */ createTable)
/* harmony export */ });
/* harmony import */ var _factories__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factories */ "./src/factories.js");
/* harmony import */ var _gameModule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameModule */ "./src/gameModule.js");
/* eslint-disable import/no-cycle */
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */



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
/* harmony export */   "ship": () => (/* binding */ ship)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
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
  // Creates players and boards
  const player1 = (0,_factories__WEBPACK_IMPORTED_MODULE_1__.player)("player1");
  const player2 = (0,_factories__WEBPACK_IMPORTED_MODULE_1__.player)("Computer");

  // Creates player1 ships
  const battleship1 = (0,_factories__WEBPACK_IMPORTED_MODULE_1__.ship)(4);
  const destroyer11 = (0,_factories__WEBPACK_IMPORTED_MODULE_1__.ship)(3);
  const destroyer12 = (0,_factories__WEBPACK_IMPORTED_MODULE_1__.ship)(3);
  const submarine11 = (0,_factories__WEBPACK_IMPORTED_MODULE_1__.ship)(2);
  const submarine12 = (0,_factories__WEBPACK_IMPORTED_MODULE_1__.ship)(2);
  const submarine13 = (0,_factories__WEBPACK_IMPORTED_MODULE_1__.ship)(2);
  const patrolBoat11 = (0,_factories__WEBPACK_IMPORTED_MODULE_1__.ship)(1);
  const patrolBoat12 = (0,_factories__WEBPACK_IMPORTED_MODULE_1__.ship)(1);
  const patrolBoat13 = (0,_factories__WEBPACK_IMPORTED_MODULE_1__.ship)(1);
  const patrolBoat14 = (0,_factories__WEBPACK_IMPORTED_MODULE_1__.ship)(1);

  // Creates player2 ships
  const battleship2 = (0,_factories__WEBPACK_IMPORTED_MODULE_1__.ship)(4);
  const destroyer21 = (0,_factories__WEBPACK_IMPORTED_MODULE_1__.ship)(3);
  const destroyer22 = (0,_factories__WEBPACK_IMPORTED_MODULE_1__.ship)(3);
  const submarine21 = (0,_factories__WEBPACK_IMPORTED_MODULE_1__.ship)(2);
  const submarine22 = (0,_factories__WEBPACK_IMPORTED_MODULE_1__.ship)(2);
  const submarine23 = (0,_factories__WEBPACK_IMPORTED_MODULE_1__.ship)(2);
  const patrolBoat21 = (0,_factories__WEBPACK_IMPORTED_MODULE_1__.ship)(1);
  const patrolBoat22 = (0,_factories__WEBPACK_IMPORTED_MODULE_1__.ship)(1);
  const patrolBoat23 = (0,_factories__WEBPACK_IMPORTED_MODULE_1__.ship)(1);
  const patrolBoat24 = (0,_factories__WEBPACK_IMPORTED_MODULE_1__.ship)(1);

  // Places player1 ships on gameboard
  player1.playerBoard.board[0][2] = battleship1;
  player1.playerBoard.board[0][3] = battleship1;
  player1.playerBoard.board[0][4] = battleship1;
  player1.playerBoard.board[0][5] = battleship1;

  player1.playerBoard.board[0][0] = submarine11;
  player1.playerBoard.board[1][0] = submarine11;

  player1.playerBoard.board[2][3] = submarine12;
  player1.playerBoard.board[3][3] = submarine12;

  player1.playerBoard.board[7][8] = submarine13;
  player1.playerBoard.board[7][9] = submarine13;

  player1.playerBoard.board[5][3] = destroyer11;
  player1.playerBoard.board[5][4] = destroyer11;
  player1.playerBoard.board[5][5] = destroyer11;

  player1.playerBoard.board[9][2] = destroyer12;
  player1.playerBoard.board[9][3] = destroyer12;
  player1.playerBoard.board[9][4] = destroyer12;

  player1.playerBoard.board[1][8] = patrolBoat11;

  player1.playerBoard.board[2][5] = patrolBoat12;

  player1.playerBoard.board[3][9] = patrolBoat13;

  player1.playerBoard.board[7][5] = patrolBoat14;

  // Places player1 ships on gameboard
  player2.playerBoard.board[0][2] = battleship2;
  player2.playerBoard.board[0][3] = battleship2;
  player2.playerBoard.board[0][4] = battleship2;
  player2.playerBoard.board[0][5] = battleship2;

  player2.playerBoard.board[0][0] = submarine21;
  player2.playerBoard.board[1][0] = submarine21;

  player2.playerBoard.board[2][3] = submarine22;
  player2.playerBoard.board[3][3] = submarine22;

  player2.playerBoard.board[7][8] = submarine23;
  player2.playerBoard.board[7][9] = submarine23;

  player2.playerBoard.board[5][3] = destroyer21;
  player2.playerBoard.board[5][4] = destroyer21;
  player2.playerBoard.board[5][5] = destroyer21;

  player2.playerBoard.board[9][2] = destroyer22;
  player2.playerBoard.board[9][3] = destroyer22;
  player2.playerBoard.board[9][4] = destroyer22;

  player2.playerBoard.board[1][8] = patrolBoat21;

  player2.playerBoard.board[2][5] = patrolBoat22;

  player2.playerBoard.board[3][9] = patrolBoat23;

  player2.playerBoard.board[7][5] = patrolBoat24;

  // Displays player gameboards
  (0,_dom__WEBPACK_IMPORTED_MODULE_2__.createTable)(".p1Board", "p1Grid");
  (0,_dom__WEBPACK_IMPORTED_MODULE_2__.createTable)(".p2Board", "p2Grid");

  // Colors player grid squares that contain ships
  player1.playerBoard.colorGameboardShips([0, 0]);

  // Determines which player goes first
  _factories__WEBPACK_IMPORTED_MODULE_1__.currentTurn.playerName = player1.name;

  // Creates gameboard eventlisteners and abort signal
  const controller = new AbortController();

  (0,_dom__WEBPACK_IMPORTED_MODULE_2__.clickAttack)(player1, player2, ".p2Grid", controller);
  (0,_dom__WEBPACK_IMPORTED_MODULE_2__.clickAttack)(player2, player1, ".p1Grid", controller);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFzQixnREFBSTtBQUMxQixzQkFBc0IsZ0RBQUk7QUFDMUIsc0JBQXNCLGdEQUFJO0FBQzFCLHNCQUFzQixnREFBSTtBQUMxQixzQkFBc0IsZ0RBQUk7QUFDMUIsc0JBQXNCLGdEQUFJO0FBQzFCLHVCQUF1QixnREFBSTtBQUMzQix1QkFBdUIsZ0RBQUk7QUFDM0IsdUJBQXVCLGdEQUFJO0FBQzNCLHVCQUF1QixnREFBSTs7QUFFM0I7QUFDQSxzQkFBc0IsZ0RBQUk7QUFDMUIsc0JBQXNCLGdEQUFJO0FBQzFCLHNCQUFzQixnREFBSTtBQUMxQixzQkFBc0IsZ0RBQUk7QUFDMUIsc0JBQXNCLGdEQUFJO0FBQzFCLHNCQUFzQixnREFBSTtBQUMxQix1QkFBdUIsZ0RBQUk7QUFDM0IsdUJBQXVCLGdEQUFJO0FBQzNCLHVCQUF1QixnREFBSTtBQUMzQix1QkFBdUIsZ0RBQUk7O0FBRTNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxFQUFFLGlEQUFXO0FBQ2IsRUFBRSxpREFBVzs7QUFFYjtBQUNBOztBQUVBO0FBQ0EsRUFBRSw4REFBc0I7O0FBRXhCO0FBQ0E7O0FBRUEsRUFBRSxpREFBVztBQUNiLEVBQUUsaURBQVc7QUFDYixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2ZhY3Rvcmllcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVNb2R1bGUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9pbWcvYmFja2dyb3VuZC5qcGVnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLypSZW1vdmVzIHBhZGRpbmcgYW5kIG1hcmdpbiBmcm9tIGFsbCBlbGVtZW50cyovXFxuKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKlNldCBwYWdlIHNpemUgYW5kIGJhY2tyb3VuZCBpbWFnZSovXFxuaHRtbCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbi8qU2V0IHBhZ2UgbGF5b3V0IGRpcmVjdGlvbiovXFxuYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLm1haW5Db250YWluZXIge1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbmZvb3RlciB7XFxuICB3aWR0aDogMjAwcHg7XFxufVxcblxcbnRkIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbn1cXG5cXG50aCxcXG50ZCB7XFxuICB3aWR0aDogMzBweDtcXG4gIGhlaWdodDogMzBweDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSwrQ0FBK0M7QUFDL0M7RUFDRSxVQUFVO0VBQ1YsU0FBUztBQUNYOztBQUVBLG9DQUFvQztBQUNwQztFQUNFLHlEQUE0QztFQUM1Qyw0QkFBNEI7RUFDNUIsc0JBQXNCO0FBQ3hCOztBQUVBLDRCQUE0QjtBQUM1QjtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxPQUFPO0VBQ1AsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBOztFQUVFLFdBQVc7RUFDWCxZQUFZO0FBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLypSZW1vdmVzIHBhZGRpbmcgYW5kIG1hcmdpbiBmcm9tIGFsbCBlbGVtZW50cyovXFxuKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKlNldCBwYWdlIHNpemUgYW5kIGJhY2tyb3VuZCBpbWFnZSovXFxuaHRtbCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWcvYmFja2dyb3VuZC5qcGVnKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5cXG4vKlNldCBwYWdlIGxheW91dCBkaXJlY3Rpb24qL1xcbmJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5tYWluQ29udGFpbmVyIHtcXG4gIGZsZXg6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG5mb290ZXIge1xcbiAgd2lkdGg6IDIwMHB4O1xcbn1cXG5cXG50ZCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG59XFxuXFxudGgsXFxudGQge1xcbiAgd2lkdGg6IDMwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wbHVzcGx1cyAqL1xuaW1wb3J0IHsgY3VycmVudFR1cm4gfSBmcm9tIFwiLi9mYWN0b3JpZXNcIjtcbmltcG9ydCB7XG4gIHdhc0Nvb3JkaW5hdGVDbGlja2VkLFxuICB3aG9zZVR1cm4sXG4gIHBsYXllcldpbixcbiAgY29tcHV0ZXJDbGlja1xufSBmcm9tIFwiLi9nYW1lTW9kdWxlXCI7XG5cbi8vIENyZWF0ZXMgdGhlIGZpcnN0IHJvdyBvZiB0aGUgdGFibGUgYW5kIG5hbWVzIGNvbHVtbnNcbmNvbnN0IGNyZWF0ZUNvbHVtbkhlYWRpbmdzID0gKHRhYmxlQ2xhc3MpID0+IHtcbiAgY29uc3QgZ3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3RhYmxlQ2xhc3N9YCk7XG4gIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcbiAgY29uc3QgZW1wdHlIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoXCIpO1xuXG4gIGdyaWQuYXBwZW5kQ2hpbGQocm93KTtcbiAgcm93LmFwcGVuZENoaWxkKGVtcHR5SGVhZGluZyk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgY29uc3QgbmV3SGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiKTtcbiAgICBuZXdIZWFkaW5nLnRleHRDb250ZW50ID0gU3RyaW5nLmZyb21DaGFyQ29kZSg2NSArIGkpO1xuICAgIHJvdy5hcHBlbmRDaGlsZChuZXdIZWFkaW5nKTtcbiAgfVxufTtcblxuLy8gQWRkcyBuZXh0IHJvdyB3aXRoIGhlYWRpbmcgYW5kIGVtcHR5IGNlbGxzXG5jb25zdCBjcmVhdGVSb3dzID0gKHRhYmxlQ2xhc3MpID0+IHtcbiAgY29uc3QgZ3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3RhYmxlQ2xhc3N9YCk7XG5cbiAgZm9yIChsZXQgYmlnSSA9IDA7IGJpZ0kgPCAxMDsgYmlnSSsrKSB7XG4gICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhcIik7XG5cbiAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gYmlnSSArIDE7XG5cbiAgICBncmlkLmFwcGVuZENoaWxkKHJvdyk7XG4gICAgcm93LmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuXG4gICAgZm9yIChsZXQgbGl0dGxlSSA9IDA7IGxpdHRsZUkgPCAxMDsgbGl0dGxlSSsrKSB7XG4gICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuXG4gICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJjZWxsXCIpO1xuICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXhcIiwgYmlnSSk7XG4gICAgICBjZWxsLnNldEF0dHJpYnV0ZShcImRhdGEteVwiLCBsaXR0bGVJKTtcblxuICAgICAgcm93LmFwcGVuZENoaWxkKGNlbGwpO1xuICAgIH1cbiAgfVxufTtcblxuLy8gQWRkcyB0YWJsZSB0byBwMUJvYXJkIGRpdlxuY29uc3QgY3JlYXRlVGFibGUgPSAoYm9hcmRDbGFzcywgdGFibGVDbGFzcykgPT4ge1xuICBjb25zdCBib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYm9hcmRDbGFzcyk7XG4gIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpO1xuXG4gIHRhYmxlLmNsYXNzTGlzdC5hZGQodGFibGVDbGFzcyk7XG4gIGJvYXJkLmFwcGVuZENoaWxkKHRhYmxlKTtcblxuICBjcmVhdGVDb2x1bW5IZWFkaW5ncyh0YWJsZUNsYXNzKTtcbiAgY3JlYXRlUm93cyh0YWJsZUNsYXNzKTtcbn07XG5cbi8vIENvbG9ycyB0aGUgZ3JpZCBzcGFjZSBvZiBnaXZlbiBjb29yZGluYXRlXG5jb25zdCBjb2xvckNvb3JkaW5hdGUgPSAoW2EsIGJdKSA9PiB7XG4gIGNvbnN0IGdyaWRDZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucDFHcmlkIC5jZWxsXCIpO1xuXG4gIGdyaWRDZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgaWYgKGNlbGwuZGF0YXNldC54ID09PSBgJHthfWAgJiYgY2VsbC5kYXRhc2V0LnkgPT09IGAke2J9YCkge1xuICAgICAgY2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInllbGxvd1wiO1xuICAgIH1cbiAgfSk7XG59O1xuXG4vLyBDaGFuZ2VzIGNlbGwgY29sb3Igd2hlbiBhdHRhY2tlZFxuY29uc3QgY29sb3JPbkF0dGFjayA9IChjZWxsLCBoaXRTdGF0dXMpID0+IHtcbiAgaWYgKGhpdFN0YXR1cyA9PT0gXCJtaXNzXCIpIHtcbiAgICBjZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwidGFuXCI7XG4gICAgY2VsbC50ZXh0Q29udGVudCA9IFwi4oCiXCI7XG4gIH1cblxuICBpZiAoaGl0U3RhdHVzID09PSBcImhpdFwiKSB7XG4gICAgY2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInBpbmtcIjtcbiAgICBjZWxsLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkIHJlZFwiO1xuICAgIGNlbGwuc3R5bGUuY29sb3IgPSBcInJlZFwiO1xuICAgIGNlbGwudGV4dENvbnRlbnQgPSBcIlhcIjtcbiAgfVxufTtcblxuLy8gQXR0YWNrcyBnYW1lYm9hcmQgYW5kIGNoZWNrcyBzaGlwcyB3aGVuIGNvb3JkaW5hdGUgY2xpY2tlZFxuY29uc3QgY2xpY2tBdHRhY2sgPSAoXG4gIHBsYXllckF0dGFja2luZyxcbiAgcmVjZWl2aW5nQXR0YWNrLFxuICB0YWJsZUNsYXNzLFxuICBjb250cm9sbGVyXG4pID0+IHtcbiAgY29uc3QgZ3JpZFNxdWFyZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAke3RhYmxlQ2xhc3N9IC5jZWxsYCk7XG5cbiAgZ3JpZFNxdWFyZXMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgIFwiY2xpY2tcIixcbiAgICAgICgpID0+IHtcbiAgICAgICAgaWYgKGN1cnJlbnRUdXJuLnBsYXllck5hbWUgPT09IHBsYXllckF0dGFja2luZy5uYW1lKSB7XG4gICAgICAgICAgLy8gU2V0cyBjb29yZGluYXRlIHZhbHVlcyBiYXNlZCBvbiBjZWxsIGRhdGFcbiAgICAgICAgICBjb25zdCB4ID0gTnVtYmVyKGNlbGwuZGF0YXNldC54KTtcbiAgICAgICAgICBjb25zdCB5ID0gTnVtYmVyKGNlbGwuZGF0YXNldC55KTtcblxuICAgICAgICAgIGlmICghd2FzQ29vcmRpbmF0ZUNsaWNrZWQocGxheWVyQXR0YWNraW5nLCBbeCwgeV0pKSB7XG4gICAgICAgICAgICAvLyBBZGRzIGNvb3JkaW5hdGUgdG8gYXJyYXkgb2YgY2xpY2tlZCBjb29yZGluYXRlc1xuICAgICAgICAgICAgcGxheWVyQXR0YWNraW5nLm1hcmtlZFNwb3RzLnB1c2goW3gsIHldKTtcblxuICAgICAgICAgICAgY29uc3QgaGl0U3RhdHVzID0gcmVjZWl2aW5nQXR0YWNrLnBsYXllckJvYXJkLnJlY2VpdmVBdHRhY2soW3gsIHldKTtcblxuICAgICAgICAgICAgY29sb3JPbkF0dGFjayhjZWxsLCBoaXRTdGF0dXMpO1xuXG4gICAgICAgICAgICB3aG9zZVR1cm4oaGl0U3RhdHVzLCBwbGF5ZXJBdHRhY2tpbmcsIHJlY2VpdmluZ0F0dGFjayk7XG5cbiAgICAgICAgICAgIHBsYXllcldpbihwbGF5ZXJBdHRhY2tpbmcsIHJlY2VpdmluZ0F0dGFjaywgY29udHJvbGxlcik7XG5cbiAgICAgICAgICAgIGNvbXB1dGVyQ2xpY2socGxheWVyQXR0YWNraW5nLCByZWNlaXZpbmdBdHRhY2ssIFt4LCB5XSwgaGl0U3RhdHVzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7IHNpZ25hbDogY29udHJvbGxlci5zaWduYWwgfVxuICAgICk7XG4gIH0pO1xufTtcblxuZXhwb3J0IHsgY3JlYXRlVGFibGUsIGNvbG9yQ29vcmRpbmF0ZSwgY2xpY2tBdHRhY2sgfTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgY29uc2lzdGVudC1yZXR1cm4gKi9cbmltcG9ydCB7IGNvbG9yQ29vcmRpbmF0ZSB9IGZyb20gXCIuL2RvbVwiO1xuXG4vLyBEZXRlcm1pbmVzIGlmIGFuIGF0dGFjayBoaXRzIG9yIG1pc3Nlc1xuY29uc3QgaGl0T3JNaXNzID0gKGluQ29vcmRpbmF0ZSkgPT4ge1xuICBpZiAoaW5Db29yZGluYXRlID09PSAwKSByZXR1cm4gXCJtaXNzXCI7XG5cbiAgaWYgKGluQ29vcmRpbmF0ZSA9PT0gMSkgcmV0dXJuIFwiYWxyZWFkeUhpdFwiO1xuXG4gIHJldHVybiBcImhpdFwiO1xufTtcblxuLy8gQ3JlYXRlcyBzaGlwcyB0byBwbGFjZSBvbiBnYW1lYm9hcmRcbmNvbnN0IHNoaXAgPSAobGVuZ3RoKSA9PiAoe1xuICBsZW5ndGgsXG4gIGhpdEFtb3VudDogMCxcbiAgc3VuazogZmFsc2UsXG4gIGhpdCgpIHtcbiAgICB0aGlzLmhpdEFtb3VudCArPSAxO1xuICB9LFxuICBpc1N1bmsoKSB7XG4gICAgaWYgKHRoaXMuaGl0QW1vdW50ID09PSB0aGlzLmxlbmd0aCkge1xuICAgICAgdGhpcy5zdW5rID0gdHJ1ZTtcbiAgICB9XG4gIH1cbn0pO1xuXG4vLyBDcmVhdGVzIGEgZ2FtZWJvYXJkXG5jb25zdCBnYW1lYm9hcmQgPSAoKSA9PiAoe1xuICBib2FyZDogW1xuICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXVxuICBdLFxuICAvLyBNYXJrcyBhdHRhY2tzIG9uIGdhbWVib2FyZFxuICByZWNlaXZlQXR0YWNrKFthLCBiXSkge1xuICAgIGNvbnN0IGluQ29vcmRpbmF0ZSA9IHRoaXMuYm9hcmRbYV1bYl07XG4gICAgY29uc3QgaGl0U3RhdHVzID0gaGl0T3JNaXNzKGluQ29vcmRpbmF0ZSk7XG5cbiAgICBpZiAoaGl0U3RhdHVzID09PSBcImhpdFwiKSB7XG4gICAgICBpbkNvb3JkaW5hdGUuaGl0KCk7XG4gICAgICBpbkNvb3JkaW5hdGUuaXNTdW5rKCk7XG4gICAgfSBlbHNlIGlmIChoaXRTdGF0dXMgPT09IFwibWlzc1wiKSB7XG4gICAgICB0aGlzLmJvYXJkW2FdW2JdID0gMTtcbiAgICB9XG5cbiAgICByZXR1cm4gaGl0U3RhdHVzO1xuICB9LFxuICAvLyBDaGVja3MgaWYgYWxsIHNoaXBzIGFyZSBzdW5rXG4gIGFsbFN1bmsoW2EsIGJdKSB7XG4gICAgaWYgKGEgPiA5KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoYiA8IDEwKSB7XG4gICAgICBjb25zdCBpbkNvb3JkaW5hdGUgPSB0aGlzLmJvYXJkW2FdW2JdO1xuXG4gICAgICBpZiAodHlwZW9mIGluQ29vcmRpbmF0ZSAhPT0gXCJvYmplY3RcIikge1xuICAgICAgICByZXR1cm4gdGhpcy5hbGxTdW5rKFthLCBiICsgMV0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoaW5Db29yZGluYXRlLnN1bmsgPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuYWxsU3VuayhbYSwgYiArIDFdKTtcbiAgICB9XG5cbiAgICBpZiAoYiA+IDkpIHtcbiAgICAgIHJldHVybiB0aGlzLmFsbFN1bmsoW2EgKyAxLCAwXSk7XG4gICAgfVxuICB9LFxuICAvLyBSdW5zIGEgZnVuY3Rpb24gdG8gY29sb3IgZ3JpZCBzcGFjZSBpZlxuICAvLyBpdCBjb250YWlucyBhIHNoaXBcbiAgY29sb3JHYW1lYm9hcmRTaGlwcyhbYSwgYl0pIHtcbiAgICBpZiAoYSA+IDkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoYiA8IDEwKSB7XG4gICAgICBjb25zdCBpbkNvb3JkaW5hdGUgPSB0aGlzLmJvYXJkW2FdW2JdO1xuXG4gICAgICBpZiAodHlwZW9mIGluQ29vcmRpbmF0ZSAhPT0gXCJvYmplY3RcIikge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2xvckdhbWVib2FyZFNoaXBzKFthLCBiICsgMV0pO1xuICAgICAgfVxuXG4gICAgICBjb2xvckNvb3JkaW5hdGUoW2EsIGJdKTtcblxuICAgICAgcmV0dXJuIHRoaXMuY29sb3JHYW1lYm9hcmRTaGlwcyhbYSwgYiArIDFdKTtcbiAgICB9XG5cbiAgICBpZiAoYiA+IDkpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbG9yR2FtZWJvYXJkU2hpcHMoW2EgKyAxLCAwXSk7XG4gICAgfVxuICB9XG59KTtcblxuLy8gQ3JlYXRlcyBhIHBsYXllciBhbmQgYSBnYW1lYm9hcmQgZm9yIHRoZW1cbmNvbnN0IHBsYXllciA9IChuYW1lKSA9PiAoe1xuICBuYW1lLFxuICBwbGF5ZXJCb2FyZDogZ2FtZWJvYXJkKCksXG4gIG1hcmtlZFNwb3RzOiBbXVxufSk7XG5cbi8vIER5bmFtaWMgb2JqZWN0IHRvIHRyYWNrIHBsYXllciB0dXJuc1xuY29uc3QgY3VycmVudFR1cm4gPSB7XG4gIHBsYXllck5hbWU6IG51bGxcbn07XG5cbmV4cG9ydCB7IHNoaXAsIHBsYXllciwgY3VycmVudFR1cm4sIGdhbWVib2FyZCwgaGl0T3JNaXNzIH07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIGNvbnNpc3RlbnQtcmV0dXJuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wbHVzcGx1cyAqL1xuaW1wb3J0IHsgY3VycmVudFR1cm4gfSBmcm9tIFwiLi9mYWN0b3JpZXNcIjtcblxuLy8gQ2hlY2tzIGlmIGNvb3JkaW5hdGUgaGFzIGJlZW4gY2xpY2tlZCBhbHJlYWR5XG5jb25zdCB3YXNDb29yZGluYXRlQ2xpY2tlZCA9IChwbGF5ZXJBdHRhY2tpbmcsIFt4LCB5XSkgPT4ge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHBsYXllckF0dGFja2luZy5tYXJrZWRTcG90cy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHNwb3QgPSBwbGF5ZXJBdHRhY2tpbmcubWFya2VkU3BvdHNbaV07XG5cbiAgICBpZiAoc3BvdFswXSA9PT0geCAmJiBzcG90WzFdID09PSB5KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59O1xuXG4vLyBEZXRlcm1pbmVzIHdoaWNoIHBsYXllciBnb2VzIG5leHRcbmNvbnN0IHdob3NlVHVybiA9IChoaXRTdGF0dXMsIHBsYXllckF0dGFja2luZywgcmVjZWl2aW5nQXR0YWNrKSA9PiB7XG4gIGlmIChoaXRTdGF0dXMgPT09IFwiaGl0XCIpIHtcbiAgICBjdXJyZW50VHVybi5wbGF5ZXJOYW1lID0gcGxheWVyQXR0YWNraW5nLm5hbWU7XG4gIH0gZWxzZSBpZiAoaGl0U3RhdHVzID09PSBcImFscmVhZHlIaXRcIikge1xuICAgIGN1cnJlbnRUdXJuLnBsYXllck5hbWUgPSBwbGF5ZXJBdHRhY2tpbmcubmFtZTtcbiAgfSBlbHNlIHtcbiAgICBjdXJyZW50VHVybi5wbGF5ZXJOYW1lID0gcmVjZWl2aW5nQXR0YWNrLm5hbWU7XG4gIH1cbn07XG5cbi8vIFJldHVybnMgd2hpY2ggcGxheWVyIGlzICdDb21wdXRlcidcbmNvbnN0IHdob0lzQ29tcHV0ZXIgPSAocGxheWVyQXR0YWNraW5nLCByZWNlaXZpbmdBdHRhY2spID0+IHtcbiAgaWYgKHBsYXllckF0dGFja2luZy5uYW1lID09PSBcIkNvbXB1dGVyXCIpIHtcbiAgICByZXR1cm4gcGxheWVyQXR0YWNraW5nO1xuICB9XG5cbiAgaWYgKHJlY2VpdmluZ0F0dGFjay5uYW1lID09PSBcIkNvbXB1dGVyXCIpIHtcbiAgICByZXR1cm4gcmVjZWl2aW5nQXR0YWNrO1xuICB9XG59O1xuXG4vLyBTZWxlY3RzIGNvcnJlY3QgY2VsbCB0byBjbGlja1xuY29uc3QgY29ycmVjdENlbGwgPSAoeCwgeSkgPT4ge1xuICBjb25zdCBjb29yZGluYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wMUdyaWQgLmNlbGxcIik7XG4gIGNvb3JkaW5hdGUuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgIGlmIChOdW1iZXIoY2VsbC5kYXRhc2V0LngpID09PSB4ICYmIE51bWJlcihjZWxsLmRhdGFzZXQueSkgPT09IHkpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjZWxsLmNsaWNrKCk7XG4gICAgICB9LCBcIjIwMDBcIik7XG4gICAgfVxuICB9KTtcbn07XG5cbi8vIFNldHMgbmV3IChyYW5kb21YLCByYW5kb21ZKSBpZiBjb21wdXRlciBjbGlja2VkIGNvb3JkaW5hdGUgYWxyZWFkeVxuY29uc3QgbmV3UmFuZG9tQ29vcmRpbmF0ZSA9IChcbiAgcGxheWVyQXR0YWNraW5nLFxuICByZWNlaXZpbmdBdHRhY2ssXG4gIHJhbmRvbVgsXG4gIHJhbmRvbVlcbikgPT4ge1xuICBsZXQgeCA9IHJhbmRvbVg7XG4gIGxldCB5ID0gcmFuZG9tWTtcblxuICB3aGlsZSAoXG4gICAgd2FzQ29vcmRpbmF0ZUNsaWNrZWQod2hvSXNDb21wdXRlcihwbGF5ZXJBdHRhY2tpbmcsIHJlY2VpdmluZ0F0dGFjayksIFtcbiAgICAgIHgsXG4gICAgICB5XG4gICAgXSlcbiAgKSB7XG4gICAgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICg5IC0gMCArIDEpKSArIDA7XG4gICAgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICg5IC0gMCArIDEpKSArIDA7XG4gIH1cblxuICBjb3JyZWN0Q2VsbCh4LCB5KTtcbn07XG5cbi8vIEF0dGFja3MgYW4gYWRqYWNlbnQgY2VsbCBpZiBjb21wdXRlciBwcmV2aW91c2x5IGhpdFxuY29uc3QgYWRqYWNlbnRBdHRhY2sgPSAoXG4gIHBsYXllckF0dGFja2luZyxcbiAgcmVjZWl2aW5nQXR0YWNrLFxuICBbeCwgeV0sXG4gIHJhbmRvbVgsXG4gIHJhbmRvbVlcbikgPT4ge1xuICAvLyBJZiBhZGphY2VudCBjZWxsIGlzIHdpdGhpbiBnYW1lYm9hcmQgYW5kIGhhc24ndCBiZWVuIGNsaWNrZWRcbiAgaWYgKFxuICAgIHkgKyAxID49IDAgJiZcbiAgICB5ICsgMSA8PSA5ICYmXG4gICAgIXdhc0Nvb3JkaW5hdGVDbGlja2VkKHdob0lzQ29tcHV0ZXIocGxheWVyQXR0YWNraW5nLCByZWNlaXZpbmdBdHRhY2spLCBbXG4gICAgICB4LFxuICAgICAgeSArIDFcbiAgICBdKVxuICApIHtcbiAgICBjb3JyZWN0Q2VsbCh4LCB5ICsgMSk7XG4gIH0gZWxzZSBpZiAoXG4gICAgeCAtIDEgPj0gMCAmJlxuICAgIHggLSAxIDw9IDkgJiZcbiAgICAhd2FzQ29vcmRpbmF0ZUNsaWNrZWQod2hvSXNDb21wdXRlcihwbGF5ZXJBdHRhY2tpbmcsIHJlY2VpdmluZ0F0dGFjayksIFtcbiAgICAgIHggLSAxLFxuICAgICAgeVxuICAgIF0pXG4gICkge1xuICAgIGNvcnJlY3RDZWxsKHggLSAxLCB5KTtcbiAgfSBlbHNlIGlmIChcbiAgICB5IC0gMSA+PSAwICYmXG4gICAgeSAtIDEgPD0gOSAmJlxuICAgICF3YXNDb29yZGluYXRlQ2xpY2tlZCh3aG9Jc0NvbXB1dGVyKHBsYXllckF0dGFja2luZywgcmVjZWl2aW5nQXR0YWNrKSwgW1xuICAgICAgeCxcbiAgICAgIHkgLSAxXG4gICAgXSlcbiAgKSB7XG4gICAgY29ycmVjdENlbGwoeCwgeSAtIDEpO1xuICB9IGVsc2UgaWYgKFxuICAgIHggKyAxID49IDAgJiZcbiAgICB4ICsgMSA8PSA5ICYmXG4gICAgIXdhc0Nvb3JkaW5hdGVDbGlja2VkKHdob0lzQ29tcHV0ZXIocGxheWVyQXR0YWNraW5nLCByZWNlaXZpbmdBdHRhY2spLCBbXG4gICAgICB4ICsgMSxcbiAgICAgIHlcbiAgICBdKVxuICApIHtcbiAgICBjb3JyZWN0Q2VsbCh4ICsgMSwgeSk7XG4gIH0gZWxzZSB7XG4gICAgbmV3UmFuZG9tQ29vcmRpbmF0ZShwbGF5ZXJBdHRhY2tpbmcsIHJlY2VpdmluZ0F0dGFjaywgcmFuZG9tWCwgcmFuZG9tWSk7XG4gIH1cbn07XG5cbi8vIENob29zZXMgYSBjb29yZGluYXRlIGZvciBDb21wdXRlcidzIHR1cm5cbmNvbnN0IGNvbXB1dGVyQ2xpY2sgPSAocGxheWVyQXR0YWNraW5nLCByZWNlaXZpbmdBdHRhY2ssIFt4LCB5XSwgaGl0U3RhdHVzKSA9PiB7XG4gIGlmIChjdXJyZW50VHVybi5wbGF5ZXJOYW1lID09PSBcIkNvbXB1dGVyXCIpIHtcbiAgICBjb25zdCByYW5kb21YID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDkgLSAwICsgMSkpICsgMDtcbiAgICBjb25zdCByYW5kb21ZID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDkgLSAwICsgMSkpICsgMDtcblxuICAgIGlmIChoaXRTdGF0dXMgPT09IFwiaGl0XCIpIHtcbiAgICAgIGFkamFjZW50QXR0YWNrKFxuICAgICAgICBwbGF5ZXJBdHRhY2tpbmcsXG4gICAgICAgIHJlY2VpdmluZ0F0dGFjayxcbiAgICAgICAgW3gsIHldLFxuICAgICAgICByYW5kb21YLFxuICAgICAgICByYW5kb21ZXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBuZXdSYW5kb21Db29yZGluYXRlKHBsYXllckF0dGFja2luZywgcmVjZWl2aW5nQXR0YWNrLCByYW5kb21YLCByYW5kb21ZKTtcbiAgICB9XG4gIH1cbn07XG5cbi8vIERpc3BsYXlzIHdpbm5lciBvZiB0aGUgZ2FtZVxuY29uc3QgZGlzcGxheVdpbm5lciA9IChwbGF5ZXJBdHRhY2tpbmcpID0+IHtcbiAgY29uc29sZS5sb2cocGxheWVyQXR0YWNraW5nLm5hbWUpO1xufTtcblxuLy8gRW5kcyBnYW1lIGFuZCBkaXNwbGF5cyB3aW5uZXJcbmNvbnN0IHBsYXllcldpbiA9IChwbGF5ZXJBdHRhY2tpbmcsIHJlY2VpdmluZ0F0dGFjaywgY29udHJvbGxlcikgPT4ge1xuICBpZiAocmVjZWl2aW5nQXR0YWNrLnBsYXllckJvYXJkLmFsbFN1bmsoWzAsIDBdKSkge1xuICAgIGNvbnRyb2xsZXIuYWJvcnQoKTtcblxuICAgIGRpc3BsYXlXaW5uZXIocGxheWVyQXR0YWNraW5nKTtcbiAgfVxufTtcblxuZXhwb3J0IHsgd2FzQ29vcmRpbmF0ZUNsaWNrZWQsIHdob3NlVHVybiwgcGxheWVyV2luLCBjb21wdXRlckNsaWNrIH07XG4iLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHsgcGxheWVyLCBzaGlwLCBjdXJyZW50VHVybiB9IGZyb20gXCIuL2ZhY3Rvcmllc1wiO1xuaW1wb3J0IHsgY3JlYXRlVGFibGUsIGNsaWNrQXR0YWNrIH0gZnJvbSBcIi4vZG9tXCI7XG5cbigoKSA9PiB7XG4gIC8vIENyZWF0ZXMgcGxheWVycyBhbmQgYm9hcmRzXG4gIGNvbnN0IHBsYXllcjEgPSBwbGF5ZXIoXCJwbGF5ZXIxXCIpO1xuICBjb25zdCBwbGF5ZXIyID0gcGxheWVyKFwiQ29tcHV0ZXJcIik7XG5cbiAgLy8gQ3JlYXRlcyBwbGF5ZXIxIHNoaXBzXG4gIGNvbnN0IGJhdHRsZXNoaXAxID0gc2hpcCg0KTtcbiAgY29uc3QgZGVzdHJveWVyMTEgPSBzaGlwKDMpO1xuICBjb25zdCBkZXN0cm95ZXIxMiA9IHNoaXAoMyk7XG4gIGNvbnN0IHN1Ym1hcmluZTExID0gc2hpcCgyKTtcbiAgY29uc3Qgc3VibWFyaW5lMTIgPSBzaGlwKDIpO1xuICBjb25zdCBzdWJtYXJpbmUxMyA9IHNoaXAoMik7XG4gIGNvbnN0IHBhdHJvbEJvYXQxMSA9IHNoaXAoMSk7XG4gIGNvbnN0IHBhdHJvbEJvYXQxMiA9IHNoaXAoMSk7XG4gIGNvbnN0IHBhdHJvbEJvYXQxMyA9IHNoaXAoMSk7XG4gIGNvbnN0IHBhdHJvbEJvYXQxNCA9IHNoaXAoMSk7XG5cbiAgLy8gQ3JlYXRlcyBwbGF5ZXIyIHNoaXBzXG4gIGNvbnN0IGJhdHRsZXNoaXAyID0gc2hpcCg0KTtcbiAgY29uc3QgZGVzdHJveWVyMjEgPSBzaGlwKDMpO1xuICBjb25zdCBkZXN0cm95ZXIyMiA9IHNoaXAoMyk7XG4gIGNvbnN0IHN1Ym1hcmluZTIxID0gc2hpcCgyKTtcbiAgY29uc3Qgc3VibWFyaW5lMjIgPSBzaGlwKDIpO1xuICBjb25zdCBzdWJtYXJpbmUyMyA9IHNoaXAoMik7XG4gIGNvbnN0IHBhdHJvbEJvYXQyMSA9IHNoaXAoMSk7XG4gIGNvbnN0IHBhdHJvbEJvYXQyMiA9IHNoaXAoMSk7XG4gIGNvbnN0IHBhdHJvbEJvYXQyMyA9IHNoaXAoMSk7XG4gIGNvbnN0IHBhdHJvbEJvYXQyNCA9IHNoaXAoMSk7XG5cbiAgLy8gUGxhY2VzIHBsYXllcjEgc2hpcHMgb24gZ2FtZWJvYXJkXG4gIHBsYXllcjEucGxheWVyQm9hcmQuYm9hcmRbMF1bMl0gPSBiYXR0bGVzaGlwMTtcbiAgcGxheWVyMS5wbGF5ZXJCb2FyZC5ib2FyZFswXVszXSA9IGJhdHRsZXNoaXAxO1xuICBwbGF5ZXIxLnBsYXllckJvYXJkLmJvYXJkWzBdWzRdID0gYmF0dGxlc2hpcDE7XG4gIHBsYXllcjEucGxheWVyQm9hcmQuYm9hcmRbMF1bNV0gPSBiYXR0bGVzaGlwMTtcblxuICBwbGF5ZXIxLnBsYXllckJvYXJkLmJvYXJkWzBdWzBdID0gc3VibWFyaW5lMTE7XG4gIHBsYXllcjEucGxheWVyQm9hcmQuYm9hcmRbMV1bMF0gPSBzdWJtYXJpbmUxMTtcblxuICBwbGF5ZXIxLnBsYXllckJvYXJkLmJvYXJkWzJdWzNdID0gc3VibWFyaW5lMTI7XG4gIHBsYXllcjEucGxheWVyQm9hcmQuYm9hcmRbM11bM10gPSBzdWJtYXJpbmUxMjtcblxuICBwbGF5ZXIxLnBsYXllckJvYXJkLmJvYXJkWzddWzhdID0gc3VibWFyaW5lMTM7XG4gIHBsYXllcjEucGxheWVyQm9hcmQuYm9hcmRbN11bOV0gPSBzdWJtYXJpbmUxMztcblxuICBwbGF5ZXIxLnBsYXllckJvYXJkLmJvYXJkWzVdWzNdID0gZGVzdHJveWVyMTE7XG4gIHBsYXllcjEucGxheWVyQm9hcmQuYm9hcmRbNV1bNF0gPSBkZXN0cm95ZXIxMTtcbiAgcGxheWVyMS5wbGF5ZXJCb2FyZC5ib2FyZFs1XVs1XSA9IGRlc3Ryb3llcjExO1xuXG4gIHBsYXllcjEucGxheWVyQm9hcmQuYm9hcmRbOV1bMl0gPSBkZXN0cm95ZXIxMjtcbiAgcGxheWVyMS5wbGF5ZXJCb2FyZC5ib2FyZFs5XVszXSA9IGRlc3Ryb3llcjEyO1xuICBwbGF5ZXIxLnBsYXllckJvYXJkLmJvYXJkWzldWzRdID0gZGVzdHJveWVyMTI7XG5cbiAgcGxheWVyMS5wbGF5ZXJCb2FyZC5ib2FyZFsxXVs4XSA9IHBhdHJvbEJvYXQxMTtcblxuICBwbGF5ZXIxLnBsYXllckJvYXJkLmJvYXJkWzJdWzVdID0gcGF0cm9sQm9hdDEyO1xuXG4gIHBsYXllcjEucGxheWVyQm9hcmQuYm9hcmRbM11bOV0gPSBwYXRyb2xCb2F0MTM7XG5cbiAgcGxheWVyMS5wbGF5ZXJCb2FyZC5ib2FyZFs3XVs1XSA9IHBhdHJvbEJvYXQxNDtcblxuICAvLyBQbGFjZXMgcGxheWVyMSBzaGlwcyBvbiBnYW1lYm9hcmRcbiAgcGxheWVyMi5wbGF5ZXJCb2FyZC5ib2FyZFswXVsyXSA9IGJhdHRsZXNoaXAyO1xuICBwbGF5ZXIyLnBsYXllckJvYXJkLmJvYXJkWzBdWzNdID0gYmF0dGxlc2hpcDI7XG4gIHBsYXllcjIucGxheWVyQm9hcmQuYm9hcmRbMF1bNF0gPSBiYXR0bGVzaGlwMjtcbiAgcGxheWVyMi5wbGF5ZXJCb2FyZC5ib2FyZFswXVs1XSA9IGJhdHRsZXNoaXAyO1xuXG4gIHBsYXllcjIucGxheWVyQm9hcmQuYm9hcmRbMF1bMF0gPSBzdWJtYXJpbmUyMTtcbiAgcGxheWVyMi5wbGF5ZXJCb2FyZC5ib2FyZFsxXVswXSA9IHN1Ym1hcmluZTIxO1xuXG4gIHBsYXllcjIucGxheWVyQm9hcmQuYm9hcmRbMl1bM10gPSBzdWJtYXJpbmUyMjtcbiAgcGxheWVyMi5wbGF5ZXJCb2FyZC5ib2FyZFszXVszXSA9IHN1Ym1hcmluZTIyO1xuXG4gIHBsYXllcjIucGxheWVyQm9hcmQuYm9hcmRbN11bOF0gPSBzdWJtYXJpbmUyMztcbiAgcGxheWVyMi5wbGF5ZXJCb2FyZC5ib2FyZFs3XVs5XSA9IHN1Ym1hcmluZTIzO1xuXG4gIHBsYXllcjIucGxheWVyQm9hcmQuYm9hcmRbNV1bM10gPSBkZXN0cm95ZXIyMTtcbiAgcGxheWVyMi5wbGF5ZXJCb2FyZC5ib2FyZFs1XVs0XSA9IGRlc3Ryb3llcjIxO1xuICBwbGF5ZXIyLnBsYXllckJvYXJkLmJvYXJkWzVdWzVdID0gZGVzdHJveWVyMjE7XG5cbiAgcGxheWVyMi5wbGF5ZXJCb2FyZC5ib2FyZFs5XVsyXSA9IGRlc3Ryb3llcjIyO1xuICBwbGF5ZXIyLnBsYXllckJvYXJkLmJvYXJkWzldWzNdID0gZGVzdHJveWVyMjI7XG4gIHBsYXllcjIucGxheWVyQm9hcmQuYm9hcmRbOV1bNF0gPSBkZXN0cm95ZXIyMjtcblxuICBwbGF5ZXIyLnBsYXllckJvYXJkLmJvYXJkWzFdWzhdID0gcGF0cm9sQm9hdDIxO1xuXG4gIHBsYXllcjIucGxheWVyQm9hcmQuYm9hcmRbMl1bNV0gPSBwYXRyb2xCb2F0MjI7XG5cbiAgcGxheWVyMi5wbGF5ZXJCb2FyZC5ib2FyZFszXVs5XSA9IHBhdHJvbEJvYXQyMztcblxuICBwbGF5ZXIyLnBsYXllckJvYXJkLmJvYXJkWzddWzVdID0gcGF0cm9sQm9hdDI0O1xuXG4gIC8vIERpc3BsYXlzIHBsYXllciBnYW1lYm9hcmRzXG4gIGNyZWF0ZVRhYmxlKFwiLnAxQm9hcmRcIiwgXCJwMUdyaWRcIik7XG4gIGNyZWF0ZVRhYmxlKFwiLnAyQm9hcmRcIiwgXCJwMkdyaWRcIik7XG5cbiAgLy8gQ29sb3JzIHBsYXllciBncmlkIHNxdWFyZXMgdGhhdCBjb250YWluIHNoaXBzXG4gIHBsYXllcjEucGxheWVyQm9hcmQuY29sb3JHYW1lYm9hcmRTaGlwcyhbMCwgMF0pO1xuXG4gIC8vIERldGVybWluZXMgd2hpY2ggcGxheWVyIGdvZXMgZmlyc3RcbiAgY3VycmVudFR1cm4ucGxheWVyTmFtZSA9IHBsYXllcjEubmFtZTtcblxuICAvLyBDcmVhdGVzIGdhbWVib2FyZCBldmVudGxpc3RlbmVycyBhbmQgYWJvcnQgc2lnbmFsXG4gIGNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XG5cbiAgY2xpY2tBdHRhY2socGxheWVyMSwgcGxheWVyMiwgXCIucDJHcmlkXCIsIGNvbnRyb2xsZXIpO1xuICBjbGlja0F0dGFjayhwbGF5ZXIyLCBwbGF5ZXIxLCBcIi5wMUdyaWRcIiwgY29udHJvbGxlcik7XG59KSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9