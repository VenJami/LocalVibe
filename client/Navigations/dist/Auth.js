"use strict";
exports.__esModule = true;
var react_1 = require("react");
var LoginScreen_1 = require("../src/screens/LoginScreen");
var SignupScreen_1 = require("../src/screens/SignupScreen");
var SignupInfo_1 = require("../src/screens/SignupInfo");
var native_stack_1 = require("@react-navigation/native-stack");
var Auth = function () {
    var Stack = native_stack_1.createNativeStackNavigator();
    return (react_1["default"].createElement(Stack.Navigator, { initialRouteName: "Login", screenOptions: {
            headerShown: false
        } },
        react_1["default"].createElement(Stack.Screen, { name: "Login", component: LoginScreen_1["default"] }),
        react_1["default"].createElement(Stack.Screen, { name: "Signup", component: SignupScreen_1["default"] }),
        react_1["default"].createElement(Stack.Screen, { name: "Signinfo", component: SignupInfo_1["default"] })));
};
exports["default"] = Auth;
