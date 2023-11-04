"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_native_safe_area_context_1 = require("react-native-safe-area-context");
var react_redux_1 = require("react-redux");
var HomeScreen = function (_a) {
    var navigation = _a.navigation;
    var user = react_redux_1.useSelector(function (state) { return state.user; }).user;
    return (react_1["default"].createElement(react_native_safe_area_context_1.SafeAreaView, { className: "flex-1 bg-green-50" },
        react_1["default"].createElement(react_native_1.StatusBar, { backgroundColor: "#fff", barStyle: "dark-content" }),
        react_1["default"].createElement(react_native_1.View, { className: "flex flex-row p-2 justify-between bg-white" },
            react_1["default"].createElement(react_native_1.View, null,
                react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: function () { return navigation.navigate('Home'); } },
                    react_1["default"].createElement(react_native_1.Image, { source: require('../assets/wordlogo.png') }))),
            react_1["default"].createElement(react_native_1.View, { className: "flex flex-row p-2 justify-between" },
                react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: function () { return navigation.navigate('Search'); }, className: "rounded-full p-2 mx-2 bg-green-50" },
                    react_1["default"].createElement(react_native_1.Image, { source: require('../assets/newsfeed/search.png') })),
                react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: function () { return navigation.navigate('Profile'); } },
                    react_1["default"].createElement(react_native_1.Image, { source: { uri: user === null || user === void 0 ? void 0 : user.avatar.url }, style: { width: 40, height: 40 }, borderRadius: 100 })))),
        react_1["default"].createElement(react_native_1.View, { className: "flex-1 my-1" },
            react_1["default"].createElement(react_native_1.TouchableOpacity, { className: "w-full bg-white items-center p-2", onPress: function () { return navigation.navigate('Post'); } },
                react_1["default"].createElement(react_native_1.Image, { source: require('../assets/newsfeed/post.png') })))));
};
exports["default"] = HomeScreen;
