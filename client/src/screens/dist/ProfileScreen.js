"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var ProfileScreen = function (_a) {
    var navigation = _a.navigation;
    var _b = react_1.useState(0), active = _b[0], setActive = _b[1];
    var user = react_redux_1.useSelector(function (state) { return state.user; }).user;
    var posts = react_redux_1.useSelector(function (state) { return state.post; }).posts;
    var _c = react_1.useState([]), data = _c[0], setData = _c[1];
    var _d = react_1.useState([]), repliesData = _d[0], setRepliesData = _d[1];
    var dispatch = react_redux_1.useDispatch();
    return (react_1["default"].createElement(react_native_1.ScrollView, { className: 'flex-1' },
        react_1["default"].createElement(react_native_1.View, { className: 'p-4' },
            react_1["default"].createElement(react_native_1.Image, { source: { uri: user === null || user === void 0 ? void 0 : user.avatar.url }, className: 'w-32 h-32 rounded-full' }),
            react_1["default"].createElement(react_native_1.Text, { className: 'text-xl font-bold my-2' }, user === null || user === void 0 ? void 0 : user.name),
            react_1["default"].createElement(react_native_1.Text, { className: 'text-gray-500 mb-4' },
                "@", user === null || user === void 0 ? void 0 :
                user.name),
            react_1["default"].createElement(react_native_1.View, { className: 'flex-row justify-between' },
                react_1["default"].createElement(react_native_1.Text, { className: 'text-lg font-semibold' }, "Posts"),
                react_1["default"].createElement(react_native_1.Text, { className: 'text-lg font-semibold' }, "Followers"),
                react_1["default"].createElement(react_native_1.Text, { className: 'text-lg font-semibold' }, "Following")),
            react_1["default"].createElement(react_native_1.View, { className: 'flex-row justify-between' },
                react_1["default"].createElement(react_native_1.Text, { className: 'text-xl font-bold' }, "0"),
                react_1["default"].createElement(react_native_1.Text, { className: 'text-xl font-bold' }, "0"),
                react_1["default"].createElement(react_native_1.Text, { className: 'text-xl font-bold' }, "0"))),
        react_1["default"].createElement(react_native_1.Text, { onPress: function () { return navigation.navigate("Home"); } }, "Return")));
};
exports["default"] = ProfileScreen;
