"use strict";
exports.__esModule = true;
var react_1 = require("react");
var bottom_tabs_1 = require("@react-navigation/bottom-tabs");
var HomeScreen_1 = require("../src/screens/HomeScreen");
var ChatScreen_1 = require("../src/screens/ChatScreen");
var MapScreen_1 = require("../src/screens/MapScreen");
var NotifScreen_1 = require("../src/screens/NotifScreen");
var FriendScreen_1 = require("../src/screens/FriendScreen");
var react_native_1 = require("react-native");
var Tab = bottom_tabs_1.createBottomTabNavigator();
var homeIcon = require('../src/assets/navbar/home.png');
var bellIcon = require('../src/assets/navbar/bell.png');
var mapIcon = require('../src/assets/navbar/map.png');
var messageIcon = require('../src/assets/navbar/messages.png');
var usersIcon = require('../src/assets/navbar/users.png');
var Tabs = function (props) {
    return (react_1["default"].createElement(Tab.Navigator, { initialRouteName: "Home", screenOptions: {
            headerShown: false,
            tabBarShowLabel: false,
            tabBarHideOnKeyboard: true
        } },
        react_1["default"].createElement(Tab.Screen, { name: "Home", component: HomeScreen_1["default"], options: function (_a) {
                var route = _a.route;
                return ({
                    tabBarIcon: function (_a) {
                        var focused = _a.focused;
                        return (react_1["default"].createElement(react_native_1.View, { style: {
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center'
                            } },
                            react_1["default"].createElement(react_native_1.Image, { source: homeIcon, style: { width: 30, height: 30 } }),
                            focused && react_1["default"].createElement(react_native_1.View, { style: styles.tabUnderline })));
                    }
                });
            } }),
        react_1["default"].createElement(Tab.Screen, { name: "Message", component: ChatScreen_1["default"], options: function (_a) {
                var route = _a.route;
                return ({
                    tabBarIcon: function (_a) {
                        var focused = _a.focused;
                        return (react_1["default"].createElement(react_native_1.View, { style: {
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center'
                            } },
                            react_1["default"].createElement(react_native_1.Image, { source: messageIcon, style: { width: 30, height: 30 } }),
                            focused && react_1["default"].createElement(react_native_1.View, { style: styles.tabUnderline })));
                    }
                });
            } }),
        react_1["default"].createElement(Tab.Screen, { name: "Map", component: MapScreen_1["default"], options: function (_a) {
                var route = _a.route;
                return ({
                    tabBarIcon: function (_a) {
                        var focused = _a.focused;
                        return (react_1["default"].createElement(react_native_1.View, { style: {
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center'
                            } },
                            react_1["default"].createElement(react_native_1.Image, { source: mapIcon, style: { width: 30, height: 30 } }),
                            focused && react_1["default"].createElement(react_native_1.View, { style: styles.tabUnderline })));
                    }
                });
            } }),
        react_1["default"].createElement(Tab.Screen, { name: "Notif", component: NotifScreen_1["default"], options: function (_a) {
                var route = _a.route;
                return ({
                    tabBarIcon: function (_a) {
                        var focused = _a.focused;
                        return (react_1["default"].createElement(react_native_1.View, { style: {
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center'
                            } },
                            react_1["default"].createElement(react_native_1.Image, { source: bellIcon, style: { width: 30, height: 30 } }),
                            focused && react_1["default"].createElement(react_native_1.View, { style: styles.tabUnderline })));
                    }
                });
            } }),
        react_1["default"].createElement(Tab.Screen, { name: "Friends", component: FriendScreen_1["default"], options: function (_a) {
                var route = _a.route;
                return ({
                    tabBarIcon: function (_a) {
                        var focused = _a.focused;
                        return (react_1["default"].createElement(react_native_1.View, { style: {
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center'
                            } },
                            react_1["default"].createElement(react_native_1.Image, { source: usersIcon, style: { width: 30, height: 30 } }),
                            focused && react_1["default"].createElement(react_native_1.View, { style: styles.tabUnderline })));
                    }
                });
            } })));
};
var styles = react_native_1.StyleSheet.create({
    tabUnderline: {
        height: 2,
        width: 20,
        backgroundColor: '#017E5E',
        marginTop: 4
    }
});
exports["default"] = Tabs;
