"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var SignupScreen = function (_a) {
    var navigation = _a.navigation;
    var backgroundImage = require('../assets/background.png');
    var logo = require('../assets/logo.png');
    var _b = react_1.useState(''), email = _b[0], setEmail = _b[1];
    var _c = react_1.useState(''), password = _c[0], setPassword = _c[1];
    var _d = react_1.useState(''), confirmPassword = _d[0], setConfirmPassword = _d[1];
    var handleSignUpPress = function () {
        if (password === confirmPassword) {
            // Passwords match, navigate to the second page with the values
            var valuesToPass = {
                email: email,
                password: password
            };
            navigation.navigate('Signinfo', valuesToPass);
        }
        else {
            // Passwords do not match, show an error message
            react_native_1.Alert.alert('Passwords do not match');
        }
    };
    return (react_1["default"].createElement(react_native_1.View, { className: "bg-teal-50 justify-center items-center flex" },
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
                            react_1["default"].createElement(react_native_1.Image, { className: " w-[163.77px] h-[163.77px]", source: logo }))))),
            react_1["default"].createElement(react_native_1.View, { className: "GettingStarterBlock flex-col justify-center items-start gap-y-[18px]" },
                react_1["default"].createElement(react_native_1.View, { className: "Forms flex-col justify-center items-start gap-y-1" },
                    react_1["default"].createElement(react_native_1.View, { className: "LoginBlock flex-col justify-center items-start gap-y-[20px]" },
                        react_1["default"].createElement(react_native_1.View, { className: "GettingStarted flex-col justify-start items-start" },
                            react_1["default"].createElement(react_native_1.Text, { className: "GettingStarted w-[148px] text-black text-xl font-bold font-Roboto tracking-tight" }, "Join LocalVibe"),
                            react_1["default"].createElement(react_native_1.Text, { className: "JoinToExplore w-[148px] text-black text-xs font-light font-Roboto tracking-tight" }, "Join to explore!")),
                        react_1["default"].createElement(react_native_1.View, { className: "LoginPass flex-col justify-center items-start gap-y-[10px]" },
                            react_1["default"].createElement(react_native_1.View, { className: "Email h-[60px] flex-col justify-center items-start gap-y-1.5" },
                                react_1["default"].createElement(react_native_1.Text, { className: "EmailOrPhoneNumber w-[148px] h-[15px] text-black text-[13px] font-bold font-Roboto tracking-tight" }, "Email or Phone Number"),
                                react_1["default"].createElement(react_native_1.TextInput, { placeholder: "Email or Phone Number", value: email, onChangeText: function (text) { return setEmail(text); }, className: "Rectangle25 w-[341px] h-[39px] bg-white rounded-[10px] shadow-2xl border border-neutral-400 border-opacity-20" })),
                            react_1["default"].createElement(react_native_1.View, { className: "Pasword h-[60px] flex-col justify-center items-start gap-y-1.5" },
                                react_1["default"].createElement(react_native_1.Text, { className: "Password w-[148px] h-[15px] text-black text-[13px] font-bold font-Roboto tracking-tight" }, "Password"),
                                react_1["default"].createElement(react_native_1.TextInput, { placeholder: "Password", value: password, onChangeText: function (text) { return setPassword(text); }, className: "Rectangle25 w-[341px] h-[39px] bg-white rounded-[10px] shadow border border-neutral-400 border-opacity-20", secureTextEntry: true })),
                            react_1["default"].createElement(react_native_1.View, { className: "Pasword h-[60px] flex-col justify-center items-start gap-y-1.5" },
                                react_1["default"].createElement(react_native_1.Text, { className: "Password w-[148px] h-[15px] text-black text-[13px] font-bold font-Roboto tracking-tight" }, "Confirm Password"),
                                react_1["default"].createElement(react_native_1.TextInput, { placeholder: "Confirm Password", value: confirmPassword, onChangeText: function (text) { return setConfirmPassword(text); }, className: "Rectangle25 w-[341px] h-[39px] bg-white rounded-[10px] shadow border border-neutral-400 border-opacity-20", secureTextEntry: true }))))),
                react_1["default"].createElement(react_native_1.View, { className: "SignInSignup flex-col justify-center items-start gap-y-[13px]" },
                    react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: handleSignUpPress },
                        react_1["default"].createElement(react_native_1.View, { className: "Frame19 w-[341px] h-[39px] px-[142px] bg-emerald-700 rounded-[10px] shadow justify-center items-center" },
                            react_1["default"].createElement(react_native_1.Text, { className: "SignIn text-center text-white font-bold font-Roboto tracking-tight" }, "Sign Up"))),
                    react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: function () { return navigation.navigate('Login'); } },
                        react_1["default"].createElement(react_native_1.View, { className: "Frame20 w-[341px] h-[39px] bg-white rounded-[10px] shadow justify-center items-center" },
                            react_1["default"].createElement(react_native_1.Text, { className: "SignUp text-center text-emerald-700 text-sm font-bold font-Roboto tracking-tight" }, "Sign In"))))))));
};
exports["default"] = SignupScreen;
