((window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/index.js"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2Fhome%2Fantonio%2FCode%2FMangaCradle%2Fmanga-server%2Fpages%2Findex.js!./":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2Fhome%2Fantonio%2FCode%2FMangaCradle%2Fmanga-server%2Fpages%2Findex.js ***!
  \*************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/", function() {
      var page = __webpack_require__(/*! ./pages/index.js */ "./pages/index.js")
      if(true) {
        module.hot.accept(/*! ./pages/index.js */ "./pages/index.js", function() {
          if(!next.router.components["/"]) return
          var updatedPage = __webpack_require__(/*! ./pages/index.js */ "./pages/index.js")
          next.router.update("/", updatedPage.default || updatedPage)
        })
      }
      return { page: page.default || page }
    }]);
  

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_96c69c45183c2218b5af ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_96c69c45183c2218b5af */ "dll-reference dll_96c69c45183c2218b5af"))("./node_modules/react/index.js");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/index.css */ "./src/index.css");
/* harmony import */ var _src_index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_index_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/App */ "./src/App.js");
/* harmony import */ var _src_pages_Home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/pages/Home */ "./src/pages/Home.js");





var index = function index() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_App__WEBPACK_IMPORTED_MODULE_2__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_pages_Home__WEBPACK_IMPORTED_MODULE_3__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _randomData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./randomData */ "./src/randomData.js");
/* harmony import */ var _components_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/NavBar/NavBar */ "./src/components/NavBar/NavBar.js");
/* harmony import */ var _components_NavBarMenuEntry_NavBarMenuEntry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/NavBarMenuEntry/NavBarMenuEntry */ "./src/components/NavBarMenuEntry/NavBarMenuEntry.js");
/* harmony import */ var _components_UserProfile_UserProfile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/UserProfile/UserProfile */ "./src/components/UserProfile/UserProfile.js");
/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Footer/Footer */ "./src/components/Footer/Footer.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



 // Components





var menuEntries = [Object(_components_NavBarMenuEntry_NavBarMenuEntry__WEBPACK_IMPORTED_MODULE_4__["default"])({
  url: "/",
  text: "Home"
}), Object(_components_NavBarMenuEntry_NavBarMenuEntry__WEBPACK_IMPORTED_MODULE_4__["default"])({
  url: "/latest",
  text: "Latest manga"
}), Object(_components_NavBarMenuEntry_NavBarMenuEntry__WEBPACK_IMPORTED_MODULE_4__["default"])({
  url: "/completed",
  text: "Completed manga"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UserProfile_UserProfile__WEBPACK_IMPORTED_MODULE_5__["default"], {
  profileImg: _randomData__WEBPACK_IMPORTED_MODULE_2__["userIcon"]
})];

var App =
/*#__PURE__*/
function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, _getPrototypeOf(App).apply(this, arguments));
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
        imgLogo: _randomData__WEBPACK_IMPORTED_MODULE_2__["logo"],
        imgLogoFont: _randomData__WEBPACK_IMPORTED_MODULE_2__["logoFont"],
        menuEntries: menuEntries
      }), this.props.children, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], null));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/components/ChaptersList/ChaptersList.js":
/*!*****************************************************!*\
  !*** ./src/components/ChaptersList/ChaptersList.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ChaptersList_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChaptersList.css */ "./src/components/ChaptersList/ChaptersList.css");
/* harmony import */ var _ChaptersList_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ChaptersList_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ChaptersListItem_ChaptersListItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ChaptersListItem/ChaptersListItem */ "./src/components/ChaptersListItem/ChaptersListItem.js");



/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var title = _ref.title,
      chapters = _ref.chapters;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "chapters-list"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    key: "title",
    className: "chapters-list__title"
  }, title), chapters.slice(0, 3).map(function (v, i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: i
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ChaptersListItem_ChaptersListItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
      chapter: v
    }));
  }));
});

/***/ }),

/***/ "./src/components/ChaptersListItem/ChaptersListItem.js":
/*!*************************************************************!*\
  !*** ./src/components/ChaptersListItem/ChaptersListItem.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ChaptersListItem_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChaptersListItem.css */ "./src/components/ChaptersListItem/ChaptersListItem.css");
/* harmony import */ var _ChaptersListItem_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ChaptersListItem_css__WEBPACK_IMPORTED_MODULE_1__);

 // import icon from "/static/theme/img/right-chevron.svg";

/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var chapter = _ref.chapter;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "chapters-list-item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "chapters-list-item__wrapper"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "chapters-list-item__icon",
    src: "/static/theme/img/right-chevron.svg",
    alt: ""
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "chapters-list-item__link"
  }, chapter.title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "chapters-list-item__date"
  }, chapter.views));
});

/***/ }),

/***/ "./src/components/DoubleColumnFlexList/DoubleColumnFlexList.js":
/*!*********************************************************************!*\
  !*** ./src/components/DoubleColumnFlexList/DoubleColumnFlexList.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DoubleColumnFlexList_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DoubleColumnFlexList.css */ "./src/components/DoubleColumnFlexList/DoubleColumnFlexList.css");
/* harmony import */ var _DoubleColumnFlexList_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_DoubleColumnFlexList_css__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var items = _ref.items;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "double-column-flex-list"
  }, items.map(function (v, i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: i,
      className: "double-column-flex-list__item"
    }, v);
  }));
});

/***/ }),

/***/ "./src/components/Footer/Footer.js":
/*!*****************************************!*\
  !*** ./src/components/Footer/Footer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Footer_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer.css */ "./src/components/Footer/Footer.css");
/* harmony import */ var _Footer_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Footer_css__WEBPACK_IMPORTED_MODULE_1__);


var title = "Why You Should Read Manga Online at MangaCradle.com ?";
var text = "There are many reasons you should read Manga online, and if you are a fan of this unique storytelling style then learning about them is a must. One of the biggest reasons why you should read Manga online is the money it can save you. While there's nothing like actually holding a book in your hands, there's also no denying that the cost of those books can add up quickly. So why not join the digital age and read Manga online? Another big reason to read Manga online is the huge amount of material that is available. When you go to a comic store or other book store their shelves are limited by the space that they have. When you go to an online site to read Manga those limitations don't exist. So if you want the best selection and you also want to save money then reading Manga online should be an obvious choice for you.";
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "footer"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "footer__title"
  }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "footer__text"
  }, text), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "footer__copy"
  }, "\xA9 2018 MangaCradle.com. All rights reserved."));
});

/***/ }),

/***/ "./src/components/GenreList/GenreList.js":
/*!***********************************************!*\
  !*** ./src/components/GenreList/GenreList.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _GenreList_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GenreList.css */ "./src/components/GenreList/GenreList.css");
/* harmony import */ var _GenreList_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_GenreList_css__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var items = _ref.items;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "genre-list"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "genre-list__list"
  }, items.map(function (v, i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "genre-list__item",
      key: i
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "genre-list__item__link",
      href: "#"
    }, v));
  })));
});

/***/ }),

/***/ "./src/components/MobNavBar/MobNavBar.js":
/*!***********************************************!*\
  !*** ./src/components/MobNavBar/MobNavBar.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MobNavBar_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MobNavBar.css */ "./src/components/MobNavBar/MobNavBar.css");
/* harmony import */ var _MobNavBar_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_MobNavBar_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _NavBarList_NavBarList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../NavBarList/NavBarList */ "./src/components/NavBarList/NavBarList.js");
/* harmony import */ var _NavIcon_NavIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../NavIcon/NavIcon */ "./src/components/NavIcon/NavIcon.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var MobNavBar =
/*#__PURE__*/
function (_Component) {
  _inherits(MobNavBar, _Component);

  function MobNavBar(props) {
    var _this;

    _classCallCheck(this, MobNavBar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MobNavBar).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "state", {
      show: false
    });

    _defineProperty(_assertThisInitialized(_this), "onClick", function () {
      return _this.setState({
        show: !_this.state.show
      });
    });

    _this.onClik = _this.onClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(MobNavBar, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          imgLogo = _this$props.imgLogo,
          imgLogoFont = _this$props.imgLogoFont,
          menuEntries = _this$props.menuEntries;
      var show = this.state.show;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "mob-nav-bar"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavIcon_NavIcon__WEBPACK_IMPORTED_MODULE_3__["default"], {
        icon: imgLogo,
        iconFont: imgLogoFont
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: this.onClick
      }, "MENU"), show ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavBarList_NavBarList__WEBPACK_IMPORTED_MODULE_2__["default"], {
        items: menuEntries
      }) : "");
    }
  }]);

  return MobNavBar;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (MobNavBar);

/***/ }),

/***/ "./src/components/NavBar/NavBar.js":
/*!*****************************************!*\
  !*** ./src/components/NavBar/NavBar.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NavBar_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavBar.css */ "./src/components/NavBar/NavBar.css");
/* harmony import */ var _NavBar_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_NavBar_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _NavBarList_NavBarList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../NavBarList/NavBarList */ "./src/components/NavBarList/NavBarList.js");
/* harmony import */ var _NavIcon_NavIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../NavIcon/NavIcon */ "./src/components/NavIcon/NavIcon.js");
/* harmony import */ var _MobNavBar_MobNavBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../MobNavBar/MobNavBar */ "./src/components/MobNavBar/MobNavBar.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var NavBar =
/*#__PURE__*/
function (_Component) {
  _inherits(NavBar, _Component);

  function NavBar() {
    _classCallCheck(this, NavBar);

    return _possibleConstructorReturn(this, _getPrototypeOf(NavBar).apply(this, arguments));
  }

  _createClass(NavBar, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          imgLogo = _this$props.imgLogo,
          imgLogoFont = _this$props.imgLogoFont,
          menuEntries = _this$props.menuEntries;
      var deskItems = [react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavIcon_NavIcon__WEBPACK_IMPORTED_MODULE_3__["default"], {
        icon: imgLogo,
        iconFont: imgLogoFont
      })].concat(_toConsumableArray(menuEntries));
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
        className: "nav-bar"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "nav-bar__desk-nav"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavBarList_NavBarList__WEBPACK_IMPORTED_MODULE_2__["default"], {
        items: deskItems
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "nav-bar__mob-nav"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MobNavBar_MobNavBar__WEBPACK_IMPORTED_MODULE_4__["default"], {
        imgLogo: imgLogo,
        imgLogoFont: imgLogoFont,
        menuEntries: menuEntries
      })));
    }
  }]);

  return NavBar;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (NavBar);

/***/ }),

/***/ "./src/components/NavBarList/NavBarList.js":
/*!*************************************************!*\
  !*** ./src/components/NavBarList/NavBarList.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NavBarList_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavBarList.css */ "./src/components/NavBarList/NavBarList.css");
/* harmony import */ var _NavBarList_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_NavBarList_css__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var items = _ref.items;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "nav-bar__items-list"
  }, items.map(function (v, i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "nav-bar__item",
      key: i
    }, v);
  }));
});

/***/ }),

/***/ "./src/components/NavBarMenuEntry/NavBarMenuEntry.js":
/*!***********************************************************!*\
  !*** ./src/components/NavBarMenuEntry/NavBarMenuEntry.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NavBarMenuEntry_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavBarMenuEntry.css */ "./src/components/NavBarMenuEntry/NavBarMenuEntry.css");
/* harmony import */ var _NavBarMenuEntry_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_NavBarMenuEntry_css__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var url = _ref.url,
      text = _ref.text;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "nav-bar-menu-entry",
    href: url
  }, text);
});

/***/ }),

/***/ "./src/components/NavIcon/NavIcon.js":
/*!*******************************************!*\
  !*** ./src/components/NavIcon/NavIcon.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NavIcon_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavIcon.css */ "./src/components/NavIcon/NavIcon.css");
/* harmony import */ var _NavIcon_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_NavIcon_css__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var icon = _ref.icon,
      iconFont = _ref.iconFont;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "nav-icon"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "nav-icon_img",
    src: icon,
    alt: ""
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "nav-icon_img",
    src: iconFont,
    alt: ""
  }));
});

/***/ }),

/***/ "./src/components/PortraitDisplay/PortraitDisplay.js":
/*!***********************************************************!*\
  !*** ./src/components/PortraitDisplay/PortraitDisplay.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PortraitDisplay_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PortraitDisplay.css */ "./src/components/PortraitDisplay/PortraitDisplay.css");
/* harmony import */ var _PortraitDisplay_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_PortraitDisplay_css__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var src = _ref.src,
      size = _ref.size,
      children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "portrait-display"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    style: size,
    className: "portrait-display__img",
    src: src,
    alt: ""
  })), children);
});

/***/ }),

/***/ "./src/components/PortraitList/PortraitList.js":
/*!*****************************************************!*\
  !*** ./src/components/PortraitList/PortraitList.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PortraitList_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PortraitList.css */ "./src/components/PortraitList/PortraitList.css");
/* harmony import */ var _PortraitList_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_PortraitList_css__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var PortraitList =
/*#__PURE__*/
function (_Component) {
  _inherits(PortraitList, _Component);

  /**
   * This will be a HOC at some point.
   */
  function PortraitList(props) {
    var _this;

    _classCallCheck(this, PortraitList);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PortraitList).call(this, props));
    _this.target = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    _this.portraits = _this.props.portraits;
    _this.state = {
      portraits: []
    };
    return _this;
  }

  _createClass(PortraitList, [{
    key: "updatePortraitsList",
    value: function updatePortraitsList() {
      var currentWidth = this.target.current.offsetWidth;
      var nPortraits = Math.floor(currentWidth / 120);
      this.setState({
        portraits: this.portraits.slice(0, nPortraits)
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.updatePortraitsList();
      window.addEventListener("resize", this.updatePortraitsList.bind(this));
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("resize", this.updatePortraitsList.bind(this));
    }
  }, {
    key: "render",
    value: function render() {
      var portraits = this.state.portraits;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        ref: this.target,
        className: "portrait-list"
      }, portraits.map(function (v, i) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          key: i,
          className: "portrait-list__item"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          className: "portrait-list__item__img",
          key: i,
          src: v,
          alt: ""
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          className: "portrait-list__item__name"
        }, "One Piece Chapter aaaa"));
      }));
    }
  }]);

  return PortraitList;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (PortraitList);

/***/ }),

/***/ "./src/components/SearchBar/SearchBar.js":
/*!***********************************************!*\
  !*** ./src/components/SearchBar/SearchBar.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SearchBar_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchBar.css */ "./src/components/SearchBar/SearchBar.css");
/* harmony import */ var _SearchBar_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_SearchBar_css__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


 // import icon from "/static/theme/img/search-engine.svg";

var SearchBar =
/*#__PURE__*/
function (_Component) {
  _inherits(SearchBar, _Component);

  function SearchBar() {
    _classCallCheck(this, SearchBar);

    return _possibleConstructorReturn(this, _getPrototypeOf(SearchBar).apply(this, arguments));
  }

  _createClass(SearchBar, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        className: "search-bar"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "search-bar__icon",
        src: "/static/theme/img/search-engine.svg",
        alt: ""
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "search-bar__input",
        type: "text",
        placeholder: "Search"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "search-bar__tags"
      }, "tags"));
    }
  }]);

  return SearchBar;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SearchBar);

/***/ }),

/***/ "./src/components/SectionContainer/SectionContainer.js":
/*!*************************************************************!*\
  !*** ./src/components/SectionContainer/SectionContainer.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SectionContainer_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SectionContainer.css */ "./src/components/SectionContainer/SectionContainer.css");
/* harmony import */ var _SectionContainer_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_SectionContainer_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _TitleBar_TitleBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../TitleBar/TitleBar */ "./src/components/TitleBar/TitleBar.js");



/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var icon = _ref.icon,
      title = _ref.title,
      bg = _ref.bg,
      children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      boxShadow: "5px 5p 5px ".concat(bg),
      border: "4px solid ".concat(bg)
    },
    className: "section-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TitleBar_TitleBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    cName: "section-container__title-bar",
    icon: icon,
    title: title,
    bg: bg
  }), children);
});

/***/ }),

/***/ "./src/components/TitleBar/TitleBar.js":
/*!*********************************************!*\
  !*** ./src/components/TitleBar/TitleBar.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TitleBar_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TitleBar.css */ "./src/components/TitleBar/TitleBar.css");
/* harmony import */ var _TitleBar_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_TitleBar_css__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var icon = _ref.icon,
      title = _ref.title,
      cName = _ref.cName,
      bg = _ref.bg;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      backgroundColor: bg
    },
    className: "title-bar " + cName
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "title-bar__icon",
    src: icon,
    alt: "popular"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "title-bar__text"
  }, title));
});

/***/ }),

/***/ "./src/components/UserProfile/UserProfile.js":
/*!***************************************************!*\
  !*** ./src/components/UserProfile/UserProfile.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _UserProfile_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserProfile.css */ "./src/components/UserProfile/UserProfile.css");
/* harmony import */ var _UserProfile_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_UserProfile_css__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var UserProfile =
/*#__PURE__*/
function (_Component) {
  _inherits(UserProfile, _Component);

  function UserProfile() {
    _classCallCheck(this, UserProfile);

    return _possibleConstructorReturn(this, _getPrototypeOf(UserProfile).apply(this, arguments));
  }

  _createClass(UserProfile, [{
    key: "render",
    value: function render() {
      var profileImg = this.props.profileImg;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "user-profile"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "user-profile__name"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "user-profile__name__p"
      }, "Anonymous User")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "user-profile__icon",
        src: profileImg,
        alt: "user-profile"
      })));
    }
  }]);

  return UserProfile;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (UserProfile);

/***/ }),

/***/ "./src/pages/Home.js":
/*!***************************!*\
  !*** ./src/pages/Home.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Home_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.css */ "./src/pages/Home.css");
/* harmony import */ var _Home_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Home_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _randomData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../randomData */ "./src/randomData.js");
/* harmony import */ var _components_SearchBar_SearchBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/SearchBar/SearchBar */ "./src/components/SearchBar/SearchBar.js");
/* harmony import */ var _components_SectionContainer_SectionContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/SectionContainer/SectionContainer */ "./src/components/SectionContainer/SectionContainer.js");
/* harmony import */ var _components_GenreList_GenreList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/GenreList/GenreList */ "./src/components/GenreList/GenreList.js");
/* harmony import */ var _components_PortraitList_PortraitList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/PortraitList/PortraitList */ "./src/components/PortraitList/PortraitList.js");
/* harmony import */ var _components_DoubleColumnFlexList_DoubleColumnFlexList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/DoubleColumnFlexList/DoubleColumnFlexList */ "./src/components/DoubleColumnFlexList/DoubleColumnFlexList.js");
/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Footer/Footer */ "./src/components/Footer/Footer.js");
/* harmony import */ var _components_ChaptersList_ChaptersList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/ChaptersList/ChaptersList */ "./src/components/ChaptersList/ChaptersList.js");
/* harmony import */ var _components_PortraitDisplay_PortraitDisplay__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/PortraitDisplay/PortraitDisplay */ "./src/components/PortraitDisplay/PortraitDisplay.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 // Components










var Home =
/*#__PURE__*/
function (_Component) {
  _inherits(Home, _Component);

  function Home() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Home);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Home)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      data: []
    });

    return _this;
  }

  _createClass(Home, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      fetch("https://manga-cradle.com/api/v1/manga?fields=title+portrait+chaptersList").then(function (response) {
        return response.json();
      }).then(function (json) {
        _this2.setState({
          data: json
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var latestItemsToRender = this.state.data.map(function (v, i) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PortraitDisplay_PortraitDisplay__WEBPACK_IMPORTED_MODULE_10__["default"], {
          src: v.portrait,
          size: {
            width: "66px",
            height: "91px"
          }
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ChaptersList_ChaptersList__WEBPACK_IMPORTED_MODULE_9__["default"], {
          title: v.title,
          chapters: v.chaptersList
        }));
      });
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "main-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "searchbar-container-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SearchBar_SearchBar__WEBPACK_IMPORTED_MODULE_3__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "popular-manga-container-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SectionContainer_SectionContainer__WEBPACK_IMPORTED_MODULE_4__["default"], {
        icon: _randomData__WEBPACK_IMPORTED_MODULE_2__["popIcon"],
        title: "Popular Manga",
        bg: "rgb(140, 132, 185)"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PortraitList_PortraitList__WEBPACK_IMPORTED_MODULE_6__["default"], {
        portraits: _randomData__WEBPACK_IMPORTED_MODULE_2__["portraits"]
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "latest-manga-container-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SectionContainer_SectionContainer__WEBPACK_IMPORTED_MODULE_4__["default"], {
        icon: _randomData__WEBPACK_IMPORTED_MODULE_2__["latIcon"],
        title: "Latest Manga",
        bg: "red"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_DoubleColumnFlexList_DoubleColumnFlexList__WEBPACK_IMPORTED_MODULE_7__["default"], {
        items: latestItemsToRender
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "genres-manga-container-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SectionContainer_SectionContainer__WEBPACK_IMPORTED_MODULE_4__["default"], {
        icon: _randomData__WEBPACK_IMPORTED_MODULE_2__["genIcon"],
        title: "Genres",
        bg: "#16a085"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_GenreList_GenreList__WEBPACK_IMPORTED_MODULE_5__["default"], {
        items: _randomData__WEBPACK_IMPORTED_MODULE_2__["genres"]
      }))));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/randomData.js":
/*!***************************!*\
  !*** ./src/randomData.js ***!
  \***************************/
/*! exports provided: mock1, mock2, mock3, mock4, portraits, popIcon, latIcon, genIcon, logoFont, logo, userIcon, items, genres, states, chaptersList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mock1", function() { return mock1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mock2", function() { return mock2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mock3", function() { return mock3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mock4", function() { return mock4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "portraits", function() { return portraits; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "popIcon", function() { return popIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "latIcon", function() { return latIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "genIcon", function() { return genIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoFont", function() { return logoFont; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logo", function() { return logo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userIcon", function() { return userIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "items", function() { return items; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "genres", function() { return genres; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "states", function() { return states; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chaptersList", function() { return chaptersList; });
var popIcon = "/static/theme/img/popular.svg";
var latIcon = "/static/theme/img/stopwatch.svg";
var genIcon = "/static/theme/img/price-tag.svg";
var userIcon = "/static/theme/img/avatar.svg";
var logo = "/static/theme/img/cradle.svg";
var logoFont = "/static/theme/img/image.png";
var mock1 = "/static/theme/img/mock-portrait-1.jpg";
var mock2 = "/static/theme/img/mock-portrait-2.jpg";
var mock3 = "/static/theme/img/mock-portrait-3.jpg";
var mock4 = "/static/theme/img/mock-portrait-4.jpg"; // mock portraits

var portraits = [mock1, mock2, mock3, mock4, mock1, mock2, mock3, mock4];
 // titlebars icons

 // main images + userIcon


var items_ = [{
  title: "One Piece",
  chapters: [{
    name: "Chapter 129801 One piece es lo mejor",
    date: "11-30 23:51"
  }, {
    name: "Chapter 129801 One piece es lo mejor",
    date: "11-30 23:51"
  }, {
    name: "Chapter 129801 One piece es lo mejor",
    date: "11-30 23:51"
  }],
  src: mock1,
  synopsis: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est error provident consequatur distinctio delectus repellendus, facilis veritatis fugit, qui, aperiam repellat. Maiores molestiae vitae fugiat facere pariatur repellendus fugit molestias earum maxime ut, similique, iusto qui perferendis eos sed esse inventore culpa cum quisquam quas consectetur tempore animi distinctio quo. Tenetur illum laboriosam facilis molestiae officiis laudantium voluptatibus officia optio."
}, {
  title: "One Piece",
  chapters: [{
    name: "Chapter 129801 One piece es lo mejor",
    date: "11-30 23:51"
  }, {
    name: "Chapter 129801 One piece es lo mejor",
    date: "11-30 23:51"
  }, {
    name: "Chapter 129801 One piece es lo mejor",
    date: "11-30 23:51"
  }],
  src: mock2,
  synopsis: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est error provident consequatur distinctio delectus repellendus, facilis veritatis fugit, qui, aperiam repellat. Maiores molestiae vitae fugiat facere pariatur repellendus fugit molestias earum maxime ut, similique, iusto qui perferendis eos sed esse inventore culpa cum quisquam quas consectetur tempore animi distinctio quo. Tenetur illum laboriosam facilis molestiae officiis laudantium voluptatibus officia optio."
}, {
  title: "One Piece",
  chapters: [{
    name: "Chapter 129801 One piece es lo mejor",
    date: "11-30 23:51"
  }, {
    name: "Chapter 129801 One piece es lo mejor",
    date: "11-30 23:51"
  }, {
    name: "Chapter 129801 One piece es lo mejor",
    date: "11-30 23:51"
  }],
  src: mock3,
  synopsis: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est error provident consequatur distinctio delectus repellendus, facilis veritatis fugit, qui, aperiam repellat. Maiores molestiae vitae fugiat facere pariatur repellendus fugit molestias earum maxime ut, similique, iusto qui perferendis eos sed esse inventore culpa cum quisquam quas consectetur tempore animi distinctio quo. Tenetur illum laboriosam facilis molestiae officiis laudantium voluptatibus officia optio."
}, {
  title: "One Piece",
  chapters: [{
    name: "Chapter 129801 One piece es lo mejor",
    date: "11-30 23:51"
  }, {
    name: "Chapter 129801 One piece es lo mejor",
    date: "11-30 23:51"
  }, {
    name: "Chapter 129801 One piece es lo mejor",
    date: "11-30 23:51"
  }],
  src: mock4,
  synopsis: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est error provident consequatur distinctio delectus repellendus, facilis veritatis fugit, qui, aperiam repellat. Maiores molestiae vitae fugiat facere pariatur repellendus fugit molestias earum maxime ut, similique, iusto qui perferendis eos sed esse inventore culpa cum quisquam quas consectetur tempore animi distinctio quo. Tenetur illum laboriosam facilis molestiae officiis laudantium voluptatibus officia optio."
}];
var genres = ["All", "Action", "Adult", "Adventure", "Comedy", "Ecchi", "Fantasy", "Gender bender", "Harem", "Historical", "Horror", "Josei", "Manhua", "Manhwa", "Martial arts", "Mature", "Mecha", "Medical", "Mystery", "One shot", "Psychological", "Romance", "School life", "Schi fi", "Seinen", "Shoujo", "Shoujo ai", "Shounen", "Shounen ai", "Slice of life", "Smut", "Sports", "Supernatural", "Tragedy", "Webtoons", "Yaoi", "Yuri"];
var states = ["All", "Completed", "Ongoing", "Drop", "Top read", "Newest", "Latest"];
var items = [].concat(items_, items_, items_, items_, items_, items_);

var chaptersList_ = [{
  title: "Chapter 394: Luffy and his epic aventures!",
  views: "483",
  date: "08-25 12:36"
}, {
  title: "Chapter 394: Luffy and his epic aventures!",
  views: "483",
  date: "08-25 12:36"
}, {
  title: "Chapter 394: Luffy and his epic aventures!",
  views: "483",
  date: "08-25 12:36"
}, {
  title: "Chapter 394: Luffy and his epic aventures!",
  views: "483",
  date: "08-25 12:36"
}, {
  title: "Chapter 394: Luffy and his epic aventures!",
  views: "483",
  date: "08-25 12:36"
}];
var chaptersList = [].concat(chaptersList_, chaptersList_, chaptersList_, chaptersList_, chaptersList_, chaptersList_, chaptersList_, chaptersList_, chaptersList_, chaptersList_, chaptersList_, chaptersList_, chaptersList_, chaptersList_);


/***/ }),

/***/ 1:
/*!*****************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F&absolutePagePath=%2Fhome%2Fantonio%2FCode%2FMangaCradle%2Fmanga-server%2Fpages%2Findex.js ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2F&absolutePagePath=%2Fhome%2Fantonio%2FCode%2FMangaCradle%2Fmanga-server%2Fpages%2Findex.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2Fhome%2Fantonio%2FCode%2FMangaCradle%2Fmanga-server%2Fpages%2Findex.js!./");


/***/ }),

/***/ "dll-reference dll_96c69c45183c2218b5af":
/*!*******************************************!*\
  !*** external "dll_96c69c45183c2218b5af" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_96c69c45183c2218b5af;

/***/ })

},[[1,"static/runtime/webpack.js","styles"]]]));;
//# sourceMappingURL=index.js.map