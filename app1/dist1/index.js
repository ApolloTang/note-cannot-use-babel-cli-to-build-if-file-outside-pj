"use strict";

var _foo = _interopRequireDefault(require("./foo"));

var _outside = _interopRequireDefault(require("../outside1"));

var _outside2 = _interopRequireDefault(require("../../outside2"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log('src/index.ts is running');
(0, _foo.default)(); // fooIgnore()

(0, _outside.default)();
(0, _outside2.default)();