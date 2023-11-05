"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_redux_1 = require("react-redux");
var userAction_1 = require("../../redux/actions/userAction");
var LoginScreen = function (_a) {
    var navigation = _a.navigation;
    var _b = react_redux_1.useSelector(function (state) { return state.user; }), error = _b.error, isAuthenticated = _b.isAuthenticated;
    var backgroundImage = require('../assets/background.png');
    var logo = require('../assets/logo.png');
    var _c = react_1.useState(''), email = _c[0], setEmail = _c[1];
    var _d = react_1.useState(''), password = _d[0], setPassword = _d[1];
    var dispatch = react_redux_1.useDispatch();
    var submitHandler = function (e) {
        console.log("login submitted");
        userAction_1.loginUser(email, password)(dispatch);
    };
    react_1.useEffect(function () {
        if (error) {
            react_native_1.Alert.alert("Login failed!!");
            react_native_1.Alert.alert(error);
        }
        if (isAuthenticated) {
            react_native_1.Alert.alert("Login Successful!");
            navigation.navigate('Home');
            userAction_1.loadUser()(dispatch);
        }
    }, [isAuthenticated]);
    return (react_1["default"].createElement(react_native_1.View, { className: "bg-teal-50 justify-center items-center flex-1" },
        react_1["default"].createElement(react_native_1.StatusBar, { backgroundColor: "#017E5E", barStyle: "dark-content" }),
        react_1["default"].createElement(react_native_1.Image, { className: "absolute top-0\t w-full h-full", source: backgroundImage }),
        react_1["default"].createElement(react_native_1.View, { className: "body flex-col justify-center items-center gap-y-[140px]" },
            react_1["default"].createElement(react_native_1.View, { className: "Logo h-[179px] shadow-inner flex-col justify-center items-center " },
                react_1["default"].createElement(react_native_1.View, { className: "LoginLogo justify-center items-center flex" },
                    react_1["default"].createElement(react_native_1.View, { className: "Frame16 justify-center items-center flex" },
                        react_1["default"].createElement(react_native_1.View, { className: "Frame15 justify-center items-center flex" },
                            react_1["default"].createElement(react_native_1.View, { className: "Frame12 justify-center items-center flex" },
                                react_1["default"].createElement(react_native_1.View, { className: "Rectangle23 w-[177.73px] h-[179px] bg-gradient-to-b from-white to-white rounded-[22.50px] shadow" })))),
                    react_1["default"].createElement(react_native_1.View, { className: "Frame14 justify-center items-center gap-2.5 flex" },
                        react_1["default"].createElement(react_native_1.View, { className: "Frame13 justify-center items-center gap-2.5 flex" },
                            react_1["default"].createElement(react_native_1.Image, { className: "w-[163.77px] h-[163.77px]", source: logo }))))),
            react_1["default"].createElement(react_native_1.View, { className: "GettingStarterBlock flex-col justify-center items-start gap-y-[18px]" },
                react_1["default"].createElement(react_native_1.View, { className: "Forms flex-col justify-center items-start gap-y-1" },
                    react_1["default"].createElement(react_native_1.View, { className: "LoginBlock flex-col justify-center items-start gap-y-[20px]" },
                        react_1["default"].createElement(react_native_1.View, { className: "GettingStarted flex-col justify-start items-start" },
                            react_1["default"].createElement(react_native_1.Text, { className: "GettingStarted w-[148px] text-black text-xl font-bold font-Roboto tracking-tight" }, "Getting Started"),
                            react_1["default"].createElement(react_native_1.Text, { className: "JoinToExplore w-[148px] text-black text-xs font-light font-Roboto tracking-tight" }, "Join to explore!")),
                        react_1["default"].createElement(react_native_1.View, { className: "LoginPass flex-col justify-center items-start gap-y-[30px]" },
                            react_1["default"].createElement(react_native_1.View, { className: "Email h-[60px] flex-col justify-center items-start gap-y-1.5" },
                                react_1["default"].createElement(react_native_1.Text, { className: "EmailOrPhoneNumber w-[148px] h-[15px] text-black text-[13px] font-bold font-Roboto tracking-tight" }, "Email or Phone Number"),
                                react_1["default"].createElement(react_native_1.TextInput, { placeholder: "Email or Phone Number", value: email, onChangeText: function (text) { return setEmail(text); }, className: "Rectangle25 w-[341px] h-[39px] bg-white rounded-[10px] shadow-2xl border border-neutral-400 border-opacity-20" })),
                            react_1["default"].createElement(react_native_1.View, { className: "Pasword h-[60px] flex-col justify-center items-start gap-y-1.5" },
                                react_1["default"].createElement(react_native_1.Text, { className: "Password w-[148px] h-[15px] text-black text-[13px] font-bold font-Roboto tracking-tight" }, "Password"),
                                react_1["default"].createElement(react_native_1.TextInput, { placeholder: "Password", value: password, onChangeText: function (text) { return setPassword(text); }, className: "Rectangle25 w-[341px] h-[39px] bg-white rounded-[10px] shadow border border-neutral-400 border-opacity-20", secureTextEntry: true })))),
                    react_1["default"].createElement(react_native_1.View, { className: "ForgotPassword w-[353px] justify-end items-end gap-y-2.5" },
                        react_1["default"].createElement(react_native_1.Text, { className: "ForgotPassword w-[92px] text-center text-emerald-700 text-[11px] font-normal font-Roboto tracking-tight", onPress: function () { return navigation.navigate(''); } }, "Forget Password?"))),
                react_1["default"].createElement(react_native_1.View, { className: "SignInSignup flex-col justify-center items-start gap-y-[13px]" },
                    react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: submitHandler },
                        react_1["default"].createElement(react_native_1.View, { className: "Frame19 w-[341px] h-[39px] px-[142px] bg-emerald-700 rounded-[10px] shadow justify-center items-center" },
                            react_1["default"].createElement(react_native_1.Text, { className: "SignIn text-center text-white text-sm font-bold font-Roboto tracking-tight" }, "Sign In"))),
                    react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: function () { return navigation.navigate('Signup'); } },
                        react_1["default"].createElement(react_native_1.View, { className: "Frame20 w-[341px] h-[39px] bg-white rounded-[10px] shadow justify-center items-center" },
                            react_1["default"].createElement(react_native_1.Text, { className: "SignUp text-center text-emerald-700 text-sm font-bold font-Roboto tracking-tight" }, "Sign Up"))))))));
};
exports["default"] = LoginScreen;
