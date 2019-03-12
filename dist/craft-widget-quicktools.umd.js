(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("Craft"));
	else if(typeof define === 'function' && define.amd)
		define(["Craft"], factory);
	else if(typeof exports === 'object')
		exports["QuickTools"] = factory(require("Craft"));
	else
		root["QuickTools"] = factory(root["Craft"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_craft_uikit__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nconst QuickTools = __webpack_require__(/*! ./main.js */ \"./main.js\");\n\nmodule.exports = QuickTools.default || QuickTools;\n\n\n//# sourceURL=webpack://QuickTools/./index.js?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_PlainButton_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/PlainButton.js */ \"./src/PlainButton.js\");\n/* harmony import */ var _src_IconButton_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/IconButton.js */ \"./src/IconButton.js\");\n/* harmony import */ var _src_ActionSheet_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/ActionSheet.js */ \"./src/ActionSheet.js\");\n/* harmony import */ var _src_ActionPanel_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/ActionPanel.js */ \"./src/ActionPanel.js\");\n/* harmony import */ var _src_TipsPanel_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/TipsPanel.js */ \"./src/TipsPanel.js\");\n/* harmony import */ var _src_TipsPanelable_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/TipsPanelable.js */ \"./src/TipsPanelable.js\");\n\n\n\n\n\n\n\n\nconst Packages = {\n\tPlainButton   : _src_PlainButton_js__WEBPACK_IMPORTED_MODULE_0__[\"PlainButton\"],\n\tIconButton    : _src_IconButton_js__WEBPACK_IMPORTED_MODULE_1__[\"IconButton\"],\n\tActionSheet   : _src_ActionSheet_js__WEBPACK_IMPORTED_MODULE_2__[\"ActionSheet\"],\n\tActionPanel   : _src_ActionPanel_js__WEBPACK_IMPORTED_MODULE_3__[\"ActionPanel\"],\n\tTipsPanel     : _src_TipsPanel_js__WEBPACK_IMPORTED_MODULE_4__[\"TipsPanel\"],\n\tTipsPanelable : _src_TipsPanelable_js__WEBPACK_IMPORTED_MODULE_5__[\"TipsPanelable\"]\n};\n\nPackages.inject = function(Craft){\n\tCraft.Widget = Craft.Widget || {};\n\tif( !Craft.Widget.QuickTools ){\n\t\tCraft.Widget.QuickTools = Packages;\n\t}\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Packages);\n\n\n\n//# sourceURL=webpack://QuickTools/./main.js?");

/***/ }),

/***/ "./src/ActionPanel.js":
/*!****************************!*\
  !*** ./src/ActionPanel.js ***!
  \****************************/
/*! exports provided: ActionPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ActionPanel\", function() { return ActionPanel; });\n/* harmony import */ var craft_uikit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! craft-uikit */ \"craft-uikit\");\n/* harmony import */ var craft_uikit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(craft_uikit__WEBPACK_IMPORTED_MODULE_0__);\n\n\n\n/** \n * ActionPanel : panel on the element  \n * \n * NOTE:  \n * This widget does not work well in mobile device mode of desktop browser, \n * because of UIEvent object in desktop browser does not have pageX/pageY.\n * \n * NOTE:\n * If your click target have margin or padding, you should adjust panel position by setting top_margin argument.\n * This module does not treat target structure.\n * \n * This widget requires touch(or click) event named as \"ContentTapped\" fired by Craft.Core.NotificationCenter.  \n * Craft.UI.DefaultRootViewController supports it.\n * \n * @packagename Craft.Widget.QuickTools.ActionPanel\n * \n * @example\n * \n * viewDidLoad(callback){\n *     this.actionPanel = new Craft.Widget.QuickTools.ActionPanel();\n *     this.actionPanel.loadView();\n *     this.actionPanel.setContent(new PanelContent());\n *     if(callback){ callback(); }\n * }\n * \n * showPanel(target){\n *     this.actionPanel.showPanel({\n *         target : target\n *     });\n * }\n * \n * template(cid){\n *     return `<div onclick=\"${cid}.showPanel(this)\">click me</div>`;\n * }\n * \n */\nclass ActionPanel extends craft_uikit__WEBPACK_IMPORTED_MODULE_0__[\"UI\"].View {\n\t\n\t/**\n\t * BackButton constructor\n\t * \n\t * @param {Object} options - options\n\t * @param {Element} options.target - click source element\n\t */\n\tconstructor(options){\n\t\tsuper();\n\t\t\n\t\tthis.packagename = 'Craft.Widget.QuickTools.ActionPanel';\n\t\t\n\t\tif( !options ){ options = {}; }\n\t\t\n\t\tthis.target  = options.target;\n\t\tthis.content = options.content; // content\n\t\t\n\t\tthis.right_margin  = 22; // default: save 22px at right\n\t\tthis.top_margin    = 0;  // default: no margin\n\t\tthis.bottom_margin = 7;  // default: save 7px at bottom\n\t\t\n\t\tthis.listener_serial = ''; // listener with serial number\n\t}\n\t\n\t/** \n\t * Set inner content\n\t * \n\t * @param {Craft.UI.View} content\n\t */\n\tsetContent(content){\n\t\tif( !content.isViewLoaded ){\n\t\t\tcontent.loadView();\n\t\t}\n\t\tthis.content = content;\n\t\tthis.root.appendChild(content.view);\n\t}\n\t\n\t/** \n\t * Hide panel if the outside of the panel was tapped : work with ContentTapped event fired by Craft.Core.DefaultRootViewController\n\t * @private\n\t * @panel {UIEvent|MouseEvent} event - TouchEvent|MouseEvent\n\t */\n\thandleTouch(event){\n\t\tif( !event ){\n\t\t\t// unexpected, but might be called from user program, force close panel and return.\n\t\t\tthis.hidePanel();\n\t\t\treturn false;\n\t\t}\n\t\t\n\t\tlet pageX = event.pageX;\n\t\tlet pageY = event.pageY;\n\t\t\n\t\tlet panel_rect = this.view.getBoundingClientRect();\n\t\tlet panel_width = this.view.clientWidth;\n\t\tlet panel_height = this.view.clientHeight;\n\t\t\n\t\tif( panel_rect.left < pageX && pageX < panel_rect.left + panel_width && panel_rect.top < pageY && pageY < panel_rect.top + panel_height ){\n\t\t\t// the tap is inside of this panel\n\t\t\treturn false;\n\t\t}\n\t\t// the tap is outside of this panel\n\t\tthis.hidePanel();\n\t\treturn false; // false: no more event propagation, true: continue to propagate event\n\t}\n\t\n\t/** \n\t * Clean up memory\n\t */\n\tunloadView(){\n\t\tthis.content.unloadView();\n\t\tsuper.unloadView();\n\t}\n\t\n\t/** \n\t * Show panel\n\t * \n\t * @param {Object} options - options\n\t * @param {Element} options.target - place on the element (optional)\n\t * @param {Number} options.right_margin - margin right side (optional)\n\t * @param {Number} options.left_margin - margin left side (optional)\n\t */\n\tshowPanel(options){\n\t\tthis.target = options.target || this.target; // clicked element\n\t\t\n\t\tthis.right_margin  = options.right_margin  || this.right_margin;\n\t\tthis.top_margin    = options.top_margin    || this.top_margin;\n\t\tthis.bottom_margin = options.bottom_margin || this.bottom_margin;\n\t\t\n\t\tthis.content.viewWillAppear();\n\t\tcraft_uikit__WEBPACK_IMPORTED_MODULE_0__[\"Core\"].Context.getRootViewController().appendView(this);\n\t\tthis.content.viewDidAppear();\n\t\t\n\t\tthis.locatePanel();\n\t\t\n\t\tthis.listener_serial = craft_uikit__WEBPACK_IMPORTED_MODULE_0__[\"Core\"].NotificationCenter.listen(\"ContentTapped\",(ev) => {\n\t\t\tthis.handleTouch(ev);\n\t\t});\n\t\tthis.listener_serial = craft_uikit__WEBPACK_IMPORTED_MODULE_0__[\"Core\"].NotificationCenter.listen(\"Craft.Widget.QuickTools.ActionPanel.hidePanel\",(ev) => {\n\t\t\tthis.hidePanel(ev);\n\t\t});\n\t\tcraft_uikit__WEBPACK_IMPORTED_MODULE_0__[\"Core\"].Transition.animate({\n\t\t\telement    : this.view,\n\t\t\tproperties : { opacity: 1 },\n\t\t\tduration   : 50,\n\t\t});\n\t}\n\t\n\t/** \n\t * locate panel\n\t */\n\tlocatePanel(){\n\t\tlet target_rect = this.target.getBoundingClientRect(); // this.content is the click target\n\t\t\n\t\tlet panel_posY = target_rect.bottom;\n\t\tlet panel_posX = target_rect.left;\n\t\t\n\t\tthis.view.style['top']  = String( panel_posY )+'px';\n\t\tthis.view.style['left'] = String( panel_posX )+'px';\n\t\t\n\t\t// adjust to the screen\n\t\tlet doc_width = window.innerWidth;\n\t\tlet panel_width = this.view.clientWidth;\n\t\tif( panel_posX + panel_width > doc_width ){\n\t\t\tthis.view.style['left'] = String( doc_width - panel_width )+'px';\n\t\t}\n\t\tlet doc_height = window.innerHeight;\n\t\tlet panel_height = this.view.clientHeight;\n\t\tif( panel_posY + panel_height > doc_height ){\n\t\t\tthis.view.style['top'] = String( target_rect.top - panel_height )+'px';\n\t\t}\n\t}\n\t\n\t/** \n\t * Hide panel\n\t */\n\thidePanel(){\n\t\tcraft_uikit__WEBPACK_IMPORTED_MODULE_0__[\"Core\"].NotificationCenter.remove(\"ContentTapped\",this.listener_serial);\n\t\tcraft_uikit__WEBPACK_IMPORTED_MODULE_0__[\"Core\"].Transition.animate({\n\t\t\telement    : this.view,\n\t\t\tproperties : { opacity: 1 },\n\t\t\tduration   : 50,\n\t\t\tcallback   : () => {\n\t\t\t\tthis.content.viewWillDisappear();\n\t\t\t\tthis.view.remove();\n\t\t\t\tthis.content.viewDidDisappear();\n\t\t\t}\n\t\t});\n\t}\n\t\n\t/** \n\t * style\n\t * @protected\n\t */\n\tstyle(componentId){\n\t\treturn `\n\t\t\t:host {\n\t\t\t\tdisplay: block;\n\t\t\t\tbox-sizing: border-box;\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: 0px;\n\t\t\t\tcolor: #aaa;\n\t\t\t\tbackground-color: #fff;\n\t\t\t\tborder-radius: 3px;\n\t\t\t\t-webkit-box-shadow: 0 1px 10px rgba(0, 0, 0, 0.2);\n\t\t\t\t-moz-box-shadow: 0 1px 10px rgba(0, 0, 0, 0.2);\n\t\t\t\tbox-shadow: 0 1px 10px rgba(0, 0, 0, 0.2);\n\t\t\t\t-webkit-overflow-scrolling: touch;\n\t\t\t\toverflow: auto;\n\t\t\t\topacity: 0;\n\t\t\t}\n\t\t`;\n\t}\n\t\n\t/** \n\t * template\n\t * @protected\n\t */\n\ttemplate(componentId){\n\t\treturn `\n\t\t\t<div class=\"root\"></div>\n\t\t`;\n\t}\n\n}\n\n\n//# sourceURL=webpack://QuickTools/./src/ActionPanel.js?");

/***/ }),

/***/ "./src/ActionSheet.js":
/*!****************************!*\
  !*** ./src/ActionSheet.js ***!
  \****************************/
/*! exports provided: ActionSheet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ActionSheet\", function() { return ActionSheet; });\n/* harmony import */ var craft_uikit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! craft-uikit */ \"craft-uikit\");\n/* harmony import */ var craft_uikit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(craft_uikit__WEBPACK_IMPORTED_MODULE_0__);\n\n\n\n/** \n * ActionSheet \n * \n * @packagename Craft.Widget.QuickTools.ActionSheet\n * \n * @example\n * \n * this.actionSheet = new Craft.Widget.QuickTools.ActionSheet({\n *     iconSource : \"//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\",\n *     closeHandler : () => { modalViewController.unloadView(); },\n *     actions : [{\n *         icon        : \"fa fa-thumbs-o-up\",          // icon font\n *         title       : \"Wow\",                        // button title\n *         handler     : () => { console.log(\"wow\") }, // action handler\n *         destructive : false,                        // true to show as RED\n *     }]\n * });\n * \n */\nclass ActionSheet extends craft_uikit__WEBPACK_IMPORTED_MODULE_0__[\"UI\"].View {\n\t\n\t/**\n\t * ActionSheet constructor\n\t * \n\t * @param {Object} options - options\n\t * @param {String} options.iconSource - icon font location\n\t * @param {Function} options.closeHandler - close handler (optional)\n\t * @param {Object} options.actions - array of action\n\t * @param {String} options.actions.icon - icon font: ex) 'fa-sort-numeric-desc'\n\t * @param {String} options.actions.title - button title\n\t * @param {Function} options.actions.handler - action handler\n\t * @param {Boolean} options.actions.destructive - true to show as RED\n\t */\n\tconstructor(options){\n\t\tsuper();\n\t\t\n\t\tthis.packagename = 'Craft.Widget.QuickTools.ActionSheet';\n\t\t\n\t\tif( !options ){ options = {}; }\n\t\t\n\t\tthis.handlers = {};\n\t\tfor( let i=0; i<options.actions.length; i++ ){\n\t\t\toptions.actions[i][\"num\"] = i;\n\t\t\tthis.handlers[i] = options.actions[i].handler;\n\t\t}\n\t\tthis.actions = options.actions;\n\t\t\n\t\tthis.closeHandler = options.closeHandler;\n\t\t\n\t\tthis.link = document.createElement('link');\n\t\tthis.link.href = options.iconSource;\n\t\tthis.link.rel = 'stylesheet';\n\t\tthis.shadow.appendChild(this.link);\n\t}\n\t\n\t/** \n\t * Invoke action\n\t * @param {Number} num - num(index) of target action\n\t */\n\taction(num){\n\t\tthis.handlers[num]();\n\t\tthis.closeActionSheet();\n\t}\n\t\n\t/** \n\t * Close the sheet\n\t */\n\tcloseActionSheet(){\n\t\tthis.viewController.hideContent( () => {\n\t\t\tif( this.closeHandler ){ this.closeHandler(); }\n\t\t});\n\t}\n\t\n\t/** \n\t * style\n\t * @protected\n\t */\n\tstyle(componentId){ \n\t\treturn `\n\t\t\t* { \n\t\t\t\tbox-sizing:border-box; margin:0; padding:0;\n\t\t\t}\n\t\t\t:host {\n\t\t\t\twidth: 100vw;\n\t\t\t\theight: 100vh;\n\t\t\t\toverflow: hidden;\n\t\t\t\tmargin:0;\n\t\t\t\tpadding-left: 0px;\n\t\t\t\tpadding-right: 0px;\n\t\t\t\ttouch-action: manipulation;\n\t\t\t}\n\t\t\t.root {\n\t\t\t\tdisplay: block;\n\t\t\t\tposition: absolute;\n\t\t\t\twidth: 100vw;\n\t\t\t\theight: calc( 100vh - env(safe-area-inset-bottom) - env(safe-area-inset-top) ); /* should be fit in the safe area */\n\t\t\t\toverflow-x: hidden;\n\t\t\t\toverflow-y: hidden;\n\t\t\t}\n\t\t\t.container {\n\t\t\t\tdisplay: block;\n\t\t\t\tposition: absolute;\n\t\t\t\tbottom: 0px;\n\t\t\t\twidth: 100vw;\n\t\t\t\toverflow-x: hidden;\n\t\t\t\toverflow-y: hidden;\n\t\t\t}\n\t\t\t.list {\n\t\t\t\tdisplay: block;\n\t\t\t\tmargin-left: auto;\n\t\t\t\tmargin-right: auto;\n\t\t\t\tborder: 0px;\n\t\t\t\tborder-radius: 10px;\n\t\t\t\tbackground-color: #ffffff;\n\t\t\t\toverflow-x: hidden;\n\t\t\t\toverflow-y: hidden;\n\t\t\t\twidth: calc( 95% - env(safe-area-inset-left) - env(safe-area-inset-right) );\n\t\t\t}\n\t\t\t.btn {\n\t\t\t\tdisplay: block;\n\t\t\t\toverflow-x: hidden;\n\t\t\t\toverflow-y: hidden;\n\t\t\t\twidth: 100%;\n\t\t\t\theight: 44px;\n\t\t\t\tmargin-left: auto;\n\t\t\t\tmargin-right: auto;\n\t\t\t\tcolor: #2facff;\n\t\t\t\tfont-size: 20px;\n\t\t\t\tline-height: 30px;\n\t\t\t\tborder-top: 0px;\n\t\t\t\tborder-left: 0px;\n\t\t\t\tborder-right: 0px;\n\t\t\t\tborder-bottom: 1px solid rgba(0,0,0,0.1);\n\t\t\t\tbackground-color: #ffffff;\n\t\t\t\tcursor: pointer;\n\t\t\t\t-webkit-tap-highlight-color:rgba(0,0,0,0);\n\t\t\t\t-webkit-touch-callout: none;\n\t\t\t}\n\t\t\t.btn:active {\n\t\t\t\tbackground-color: #ffffff;\n\t\t\t}\n\t\t\t.btn:focus {\n\t\t\t\toutline: 0px;\n\t\t\t}\n\t\t\t.btn:active {\n\t\t\t\tbackground-color: #f0f0f0;\n\t\t\t}\n\t\t\t.btn-cancel {\n\t\t\t\tdisplay: block;\n\t\t\t\toverflow-x: hidden;\n\t\t\t\toverflow-y: hidden;\n\t\t\t\theight: 44px;\n\t\t\t\tmargin-left: auto;\n\t\t\t\tmargin-right: auto;\n\t\t\t\tborder:0px;\n\t\t\t\tborder-radius: 10px;\n\t\t\t\tmargin-top: 10px;\n\t\t\t\tmargin-bottom: 10px;\n\t\t\t\tcolor: #2facff;\n\t\t\t\tfont-size: 20px;\n\t\t\t\tline-height: 30px;\n\t\t\t\tfont-weight: bold;\n\t\t\t\tbackground-color: #ffffff;\n\t\t\t\tcursor: pointer;\n\t\t\t\t-webkit-tap-highlight-color:rgba(0,0,0,0);\n\t\t\t\t-webkit-touch-callout: none;\n\t\t\t\t${ craft_uikit__WEBPACK_IMPORTED_MODULE_0__[\"UI\"].Device.hasDisplayCutout() \n\t\t\t\t\t? `width: calc( 95% - env(safe-area-inset-left) - env(safe-area-inset-right) );`\n\t\t\t\t\t: `width: 95%;`\n\t\t\t\t}\n\t\t\t}\n\t\t\t.btn-cancel:active {\n\t\t\t\tbackground-color: #ffffff;\n\t\t\t}\n\t\t\t.btn-cancel:focus {\n\t\t\t\toutline: 0px;\n\t\t\t}\n\t\t\t.btn-cancel:active {\n\t\t\t\tbackground-color: #f0f0f0;\n\t\t\t}\n\t\t\t.btn-destructive {\n\t\t\t\tdisplay: block;\n\t\t\t\toverflow-x: hidden;\n\t\t\t\toverflow-y: hidden;\n\t\t\t\twidth: 100%;\n\t\t\t\theight: 44px;\n\t\t\t\tmargin-left: auto;\n\t\t\t\tmargin-right: auto;\n\t\t\t\tcolor: #eb6767;\n\t\t\t\tfont-size: 20px;\n\t\t\t\tline-height: 30px;\n\t\t\t\tborder-top: 0px;\n\t\t\t\tborder-left: 0px;\n\t\t\t\tborder-right: 0px;\n\t\t\t\tborder-bottom: 1px solid rgba(0,0,0,0.1);\n\t\t\t\tbackground-color: #ffffff;\n\t\t\t\tcursor: pointer;\n\t\t\t\t-webkit-tap-highlight-color:rgba(0,0,0,0);\n\t\t\t\t-webkit-touch-callout: none;\n\t\t\t}\n\t\t\t.btn-destructive:active {\n\t\t\t\tbackground-color: #ffffff;\n\t\t\t}\n\t\t\t.btn-destructive:focus {\n\t\t\t\toutline: 0px;\n\t\t\t}\n\t\t\t.btn-destructive:active {\n\t\t\t\tbackground-color: #f0f0f0;\n\t\t\t}\n\t\t`;\n\t}\n\t\n\t/** \n\t * template\n\t * @protected\n\t */\n\ttemplate(componentId){\n\t\treturn `\n\t\t\t<div class=\"root\">\n\t\t\t\t<div class=\"container\">\n\t\t\t\t\t<div class=\"list\">\n\t\t\t\t\t\t${this.actions.map( action => \n\t\t\t\t\t\t\t`${action.destructive ? \n\t\t\t\t\t\t\t\t`<button type=\"submit\" class=\"btn-destructive\" \n\t\t\t\t\t\t\t\t\tonclick=\"Craft.Core.ComponentStack.get('${componentId}').action(${action.num});\">\n\t\t\t\t\t\t\t\t\t${action.icon ? `<i class=\"${action.icon}\" style=\"margin-right:22px;\"></i>` : `` }\n\t\t\t\t\t\t\t\t\t${action.title}\n\t\t\t\t\t\t\t\t</button>`\n\t\t\t\t\t\t\t:\n\t\t\t\t\t\t\t\t`<button type=\"submit\" class=\"btn\" \n\t\t\t\t\t\t\t\t\tonclick=\"Craft.Core.ComponentStack.get('${componentId}').action(${action.num});\">\n\t\t\t\t\t\t\t\t\t${action.icon ? `<i class=\"${action.icon}\" style=\"margin-right:22px;\"></i>` : `` }\n\t\t\t\t\t\t\t\t\t${action.title}\n\t\t\t\t\t\t\t\t</button>`\n\t\t\t\t\t\t\t}`\n\t\t\t\t\t\t).join('')}\n\t\t\t\t\t</div>\n\t\t\t\t\t<button type=\"submit\" class=\"btn-cancel\" \n\t\t\t\t\t\tonclick=\"Craft.Core.ComponentStack.get('${componentId}').closeActionSheet();\">Cancel</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t`;\n\t}\n\n}\n\n\n//# sourceURL=webpack://QuickTools/./src/ActionSheet.js?");

/***/ }),

/***/ "./src/IconButton.js":
/*!***************************!*\
  !*** ./src/IconButton.js ***!
  \***************************/
/*! exports provided: IconButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"IconButton\", function() { return IconButton; });\n/* harmony import */ var craft_uikit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! craft-uikit */ \"craft-uikit\");\n/* harmony import */ var craft_uikit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(craft_uikit__WEBPACK_IMPORTED_MODULE_0__);\n\n\n\n/** \n * IconButton \n * \n * @packagename Craft.Widget.QuickTools.IconButton\n * \n * @example\n * \n * this.btn = new IconButton({\n *     href    : \"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\",\n *     icon    : \"fa-ellipsis-v\",\n *     handler : () => { this.action(); }\n * });\n * \n */\nclass IconButton extends craft_uikit__WEBPACK_IMPORTED_MODULE_0__[\"UI\"].View {\n\t\n\t/**\n\t * IconButton constructor\n\t * \n\t * @param {Object} options - options\n\t * @param {String} options.iconSource - link target style sheet\n\t * @param {String} options.icon - font-awesome icon name\n\t * @param {Function} options.handler - click handler\n\t */\n\tconstructor(options){\n\t\tsuper();\n\t\t\n\t\tthis.packagename = 'Craft.Widget.QuickTools.IconButton';\n\t\t\n\t\tthis.icon    = options.icon; // font-awesome icon name\n\t\tthis.handler = options.handler;\n\t\t\n\t\tthis.link = document.createElement('link');\n\t\tthis.link.href = options.iconSource;\n\t\tthis.link.rel = 'stylesheet';\n\t\tthis.shadow.appendChild(this.link);\n\t}\n\t\n\t/**\n\t * Invoke your handler\n\t */\n\taction(){\n\t\tthis.handler();\n\t}\n\t\n\t/**\n\t * style\n\t * @protected\n\t */\n\tstyle(componentId){\n\t\treturn `\n\t\t\t.root {\n\t\t\t\tfloat: left;\n\t\t\t\twidth: 44px;\n\t\t\t\theight: 44px;\n\t\t\t\tmargin-left: 0px;\n\t\t\t\tcolor: #007aff;\n\t\t\t\tfont-size: 36px;\n\t\t\t\tline-height: 44px;\n\t\t\t\tcursor: pointer;\n\t\t\t}\n\t\t`;\n\t}\n\t\n\t/**\n\t * template\n\t * @protected\n\t */\n\ttemplate(componentId){\n\t\treturn `\n\t\t\t<div class=\"root\" onclick=\"window.Craft.Core.ComponentStack.get('${componentId}').action();\">\n\t\t\t\t<i class=\"${this.icon}\"></i>\n\t\t\t</div>\n\t\t`;\n\t}\n\t\n}\n\n\n//# sourceURL=webpack://QuickTools/./src/IconButton.js?");

/***/ }),

/***/ "./src/PlainButton.js":
/*!****************************!*\
  !*** ./src/PlainButton.js ***!
  \****************************/
/*! exports provided: PlainButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PlainButton\", function() { return PlainButton; });\n/* harmony import */ var craft_uikit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! craft-uikit */ \"craft-uikit\");\n/* harmony import */ var craft_uikit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(craft_uikit__WEBPACK_IMPORTED_MODULE_0__);\n\n\n\n/** \n * PlainButton \n * \n * @packagename Craft.Widget.QuickTools.PlainButton\n * \n * @example\n * \n * const btn = new Craft.Widget.QuickTools.PlainButton({\n *     label   : \"My first button\",\n *     handler : () => { alert(\"Wow\"); }\n * });\n * btn.loadView();\n * \n */\nclass PlainButton extends craft_uikit__WEBPACK_IMPORTED_MODULE_0__[\"UI\"].View {\n\t\n\t/**\n\t * PlainButton constructor\n\t * \n\t * @param {Object} options - options\n\t * @param {String} options.label - label\n\t * @param {Function} options.handler - click handler\n\t */\n\tconstructor(options){\n\t\tsuper();\n\t\tthis.packagename = 'Craft.Widget.QuickTools.PlainButton';\n\t\t\n\t\tif( !options ){ options = {}; }\n\t\t\n\t\tthis.label   = options.label;\n\t\tthis.handler = options.handler;\n\t}\n\t\n\t/**\n\t * Invoke your handler\n\t */\n\taction(){\n\t\tthis.handler();\n\t}\n\t\n\t/**\n\t * style\n\t * @protected\n\t */\n\tstyle(componentId){\n\t\treturn `\n\t\t\t.root {\n\t\t\t\tbox-sizing: border-box;\n\t\t\t\tdisplay: block;\n\t\t\t\theight: 44px;\n\t\t\t\tmargin-top: 5px;\n\t\t\t\tborder-radius: 5px;\n\t\t\t\tcolor: #007aff;\n\t\t\t\tline-height: 44px;\n\t\t\t\ttext-align: center;\n\t\t\t\tbackground-color: #fff;\n\t\t\t\tborder-color: #ccc;\n\t\t\t\tborder-width: 1px;\n\t\t\t\tborder-style: solid;\n\t\t\t\tcursor: pointer;\n\t\t\t}\n\t\t\t.root:hover {\n\t\t\t\tbackground-color: #f0f0f0;\n\t\t\t}\n\t\t`;\n\t}\n\t\n\t/**\n\t * template\n\t * @protected\n\t */\n\ttemplate(componentId){\n\t\treturn `\n\t\t\t<div class=\"root\" onclick=\"Craft.Core.ComponentStack.get('${componentId}').action();\">\n\t\t\t\t${this.label}\n\t\t\t</div>\n\t\t`;\n\t}\n\t\n}\n\n\n//# sourceURL=webpack://QuickTools/./src/PlainButton.js?");

/***/ }),

/***/ "./src/TipsPanel.js":
/*!**************************!*\
  !*** ./src/TipsPanel.js ***!
  \**************************/
/*! exports provided: TipsPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TipsPanel\", function() { return TipsPanel; });\n/* harmony import */ var craft_uikit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! craft-uikit */ \"craft-uikit\");\n/* harmony import */ var craft_uikit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(craft_uikit__WEBPACK_IMPORTED_MODULE_0__);\n\n\n\n/** \n * TipsPanel : small tip on the element \n * \n * @packagename Craft.Widget.QuickTools.TipsPanel\n */\nclass TipsPanel extends craft_uikit__WEBPACK_IMPORTED_MODULE_0__[\"UI\"].View {\n\t\n\t/**\n\t * BackButton constructor\n\t * @param {Object} options - options\n\t * @param {Object} options.text - tip text\n\t */\n\tconstructor(options){\n\t\tsuper();\n\t\tthis.packagename = 'Craft.Widget.QuickTools.TipsPanel';\n\t\t\n\t\tif( !options ){ options = {}; }\n\t\t\n\t\tthis.panel = ''; // will be injected by TipPanelProtocol\n\t\tthis.text  = options.text;\n\t}\n\t\n\t/** \n\t * Close tips view\n\t */\n\tclosePanel(){\n\t\tthis.panel.hidePanel(); // call the injected panel method\n\t}\n\t\n\t/** \n\t * style\n\t * @protected\n\t */\n\tstyle(componentId){\n\t\treturn `\n\t\t\t:host {\n\t\t\t\tposition: relative;\n\t\t\t}\n\t\t\t.root {\n\t\t\t\tbox-sizing: border-box;\n\t\t\t\twidth: 100%;\n\t\t\t\tpadding-left: 11px;\n\t\t\t\tpadding-right: 11px;\n\t\t\t\tpadding-top: 5px;\n\t\t\t\tpadding-bottom: 5px;\n\t\t\t\tcolor: #fff;\n\t\t\t\tbackground-color: #444;\n\t\t\t}\n\t\t`;\n\t}\n\t\n\t/** \n\t * template\n\t * @protected\n\t */\n\ttemplate(componentId){\n\t\treturn `\n\t\t\t<div class=\"root\">${this.text}</div>\n\t\t`;\n\t}\n\n}\n\n\n//# sourceURL=webpack://QuickTools/./src/TipsPanel.js?");

/***/ }),

/***/ "./src/TipsPanelable.js":
/*!******************************!*\
  !*** ./src/TipsPanelable.js ***!
  \******************************/
/*! exports provided: TipsPanelable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TipsPanelable\", function() { return TipsPanelable; });\n/* harmony import */ var craft_uikit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! craft-uikit */ \"craft-uikit\");\n/* harmony import */ var craft_uikit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(craft_uikit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _TipsPanel_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TipsPanel.js */ \"./src/TipsPanel.js\");\n/* harmony import */ var _ActionPanel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ActionPanel.js */ \"./src/ActionPanel.js\");\n\n\n\n\n\n\n/** \n * Wrapping your component with tip\n * \n * @packagename Craft.Widget.QuickTools.TipsPanelable\n * \n * @example\n * \n * let tipable_component = Craft.Widget.QuickTools.TipsPanelable({\n *     content : component,\n *     tip     : \"This is info\"\n * });\n * this.appendView(tipable_component);\n * \n */\nclass TipsPanelable extends craft_uikit__WEBPACK_IMPORTED_MODULE_0__[\"UI\"].View {\n\t\n\t/**\n\t * TipsPanelProtocol constructor : (never used)\n\t * \n\t * @param {String} tips - place on the element\n\t * @param {Object} options - options\n\t * @param {String} options.tips - tips text (optional)\n\t * @param {Craft.UI.View} options.content - content of panelable element (optional)\n\t * @param {Craft.UI.View} options.text - text content of panelable element (optional)\n\t * @param {Craft.UI.View} options.panelClass - Class of tips (optional)\n\t */\n\tconstructor(options){\n\t\tsuper();\n\t\tthis.packagename = 'Craft.Widget.QuickTools.TipsPanelable';\n\t\t\n\t\tif( !options ){ options = {}; }\n\t\t\n\t\tthis.tips       = options.tips;\n\t\tthis.content    = options.content;\n\t\tthis.text       = options.text;\n\t\tthis.panelClass = options.panelClass || _TipsPanel_js__WEBPACK_IMPORTED_MODULE_1__[\"TipsPanel\"];\n\t}\n\t\n\t/** \n\t * viewDidLoad setup panel and its content\n\t * @protected\n\t */\n\tviewDidLoad(callback){\n\t\tthis.tipsPanel = new this.panelClass({\n\t\t\ttext : this.tips\n\t\t});\n\t\tthis.tipsPanel.setViewController(this.viewController);\n\t\tthis.tipsPanel.loadView();\n\t\t\n\t\tif( this.content ){\n\t\t\tthis.setContent(this.content);\n\t\t}else{\n\t\t\tthis.setText(this.text);\n\t\t}\n\t\t\n\t\tif( callback ){ callback(); }\n\t}\n\t\n\t/** \n\t * Hide tips\n\t */\n\thideTipsPanel(){\n\t\tif( this.tipsPanel ){\n\t\t\tthis.tipsPanel.closePanel();\n\t\t}\n\t}\n\t\n\t/** \n\t * Set inner content\n\t * \n\t * @param {Craft.UI.View} content\n\t */\n\tsetContent(content){\n\t\tif( !content.isViewLoaded ){\n\t\t\tcontent.loadView();\n\t\t}\n\t\tthis.content = content;\n\t\tthis.root.appendChild(content.view);\n\t}\n\t\n\t/** \n\t * Set inner text\n\t * \n\t * @param {String} text\n\t */\n\tsetText(text){\n\t\tthis.content = new craft_uikit__WEBPACK_IMPORTED_MODULE_0__[\"UI\"].View();\n\t\tthis.content.loadView();\n\t\tthis.content.root.innerHTML = text;\n\t\tthis.root.appendChild(this.content.view);\n\t}\n\t\n\t/** \n\t * Show tips\n\t */\n\tshowTipsPanel(){\n\t\tthis.actionPanel = new _ActionPanel_js__WEBPACK_IMPORTED_MODULE_2__[\"ActionPanel\"]({\n\t\t\tbase : this\n\t\t});\n\t\tthis.actionPanel.setViewController(this.viewController);\n\t\tthis.actionPanel.loadView();\n\t\t\n\t\tthis.actionPanel.setContent(this.tipsPanel);\n\t\tthis.actionPanel.showPanel({\n\t\t\ttarget : this.root\n\t\t});\n\t\t\n\t\tthis.tipsPanel.panel = this.actionPanel; // inject the panel object to be able to call actionPanel.unloadView()\n\t\t\n\t\tthis.actionPanel.viewWillAppear();\n\t\tcraft_uikit__WEBPACK_IMPORTED_MODULE_0__[\"Core\"].Context.getRootViewController().appendView(this.actionPanel);\n\t\tthis.actionPanel.viewDidAppear();\n\t\t\n\t\tthis.locatePanel();\n\t}\n\t\n\t/** \n\t * locate panel\n\t */\n\tlocatePanel(){\n\t\tlet content_rect = this.content.root.getBoundingClientRect(); // this.content is the hover target\n\t\t\n\t\tlet panel_posY = content_rect.bottom;\n\t\tlet panel_posX = content_rect.left;\n\t\t\n\t\tthis.actionPanel.view.style['top']  = String( panel_posY )+'px';\n\t\tthis.actionPanel.view.style['left'] = String( panel_posX )+'px';\n\t\t\n\t\t// adjust to the screen\n\t\tlet doc_width = window.innerWidth;\n\t\tlet panel_width = this.actionPanel.view.clientWidth;\n\t\tif( panel_posX + panel_width > doc_width ){\n\t\t\tthis.actionPanel.view.style['left'] = String( doc_width - panel_width )+'px';\n\t\t}\n\t\tlet doc_height = window.innerHeight;\n\t\tlet panel_height = this.actionPanel.view.clientHeight;\n\t\tif( panel_posY + panel_height > doc_height ){\n\t\t\tthis.actionPanel.view.style['top'] = String( content_rect.top - panel_height )+'px';\n\t\t}\n\t}\n\t\n\t/** \n\t * style\n\t * @protected\n\t */\n\tstyle(componentId){\n\t\treturn `\n\t\t\t:host {\n\t\t\t\tdisplay: inline-block;\n\t\t\t}\n\t\t\t.root {\n\t\t\t\tcursor: pointer;\n\t\t\t}\n\t\t`;\n\t}\n\t\n\t/** \n\t * template\n\t * @protected\n\t */\n\ttemplate(componentId){\n\t\tif( 'ontouchend' in window ){\n\t\t\t// ignore mobile device\n\t\t\treturn `<div class=\"root\"></div>`;\n\t\t}else{\n\t\t\treturn `\n\t\t\t\t<div class=\"root\" \n\t\t\t\t\tonclick=\"${componentId}.hideTipsPanel();\" \n\t\t\t\t\tonmouseover=\"${componentId}.showTipsPanel();\" \n\t\t\t\t\tonmouseout=\"${componentId}.hideTipsPanel();\" \n\t\t\t\t\tonblur=\"${componentId}.hideTipsPanel();\">\n\t\t\t\t</div>\n\t\t\t`;\n\t\t}\n\t}\n\t\n}\n\n\n//# sourceURL=webpack://QuickTools/./src/TipsPanelable.js?");

/***/ }),

/***/ "craft-uikit":
/*!************************!*\
  !*** external "Craft" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_craft_uikit__;\n\n//# sourceURL=webpack://QuickTools/external_%22Craft%22?");

/***/ })

/******/ });
});