"use strict";
exports.__esModule = true;
var native_base_1 = require("native-base");
var react_1 = require("react");
var Loader = function (props) {
    return (react_1["default"].createElement(native_base_1.HStack, { flex: 1, justifyContent: "center", alignItems: "center" },
        react_1["default"].createElement(native_base_1.Spinner, { size: "lg" })));
};
exports["default"] = (function () {
    return (react_1["default"].createElement(native_base_1.NativeBaseProvider, null,
        react_1["default"].createElement(native_base_1.Center, { flex: 1, px: "3" },
            react_1["default"].createElement(Loader, null))));
});
