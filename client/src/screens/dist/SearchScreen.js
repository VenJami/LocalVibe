"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var SearchScreen = function (_a) {
    var navigation = _a.navigation;
    return (react_1["default"].createElement(react_native_1.View, null,
        react_1["default"].createElement(react_native_1.Text, { onPress: function () { return navigation.navigate("Home"); } }, "Return")));
};
exports["default"] = SearchScreen;
