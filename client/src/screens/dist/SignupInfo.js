"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var react_native_image_crop_picker_1 = require("react-native-image-crop-picker");
var react_redux_1 = require("react-redux");
var userAction_1 = require("../../redux/actions/userAction");
var SignupScreen = function (_a) {
    var navigation = _a.navigation, route = _a.route;
    var backgroundImage = require('../assets/2ndbackground.png');
    var logo = require('../assets/logo.png');
    var dispatch = react_redux_1.useDispatch();
    var _b = react_redux_1.useSelector(function (state) { return state.user; }), error = _b.error, isAuthenticated = _b.isAuthenticated;
    react_1.useEffect(function () {
        if (error) {
            react_native_1.Alert.alert(error);
        }
        if (isAuthenticated) {
            react_native_1.Alert.alert("Account Creation Successful!");
            navigation.navigate("Home");
        }
    }, [error, isAuthenticated]);
    var _c = react_1.useState(''), name = _c[0], setName = _c[1];
    var _d = react_1.useState(''), avatar = _d[0], setAvatar = _d[1];
    var _e = route.params, _f = _e.email, email = _f === void 0 ? react_1.useState('') : _f, _g = _e.password, password = _g === void 0 ? react_1.useState('') : _g;
    var uploadImage = function () {
        react_native_image_crop_picker_1["default"].openPicker({
            width: 300,
            height: 300,
            cropping: true,
            compressImageQuality: 0.8,
            includeBase64: true
        }).then(function (image) {
            if (image) {
                setAvatar('data:image/jpeg;base64,' + image.data);
            }
            else {
                // Handle the case where image is null or undefined
                react_native_1.Alert.alert('No image selected');
            }
        })["catch"](function (error) {
            // Handle any errors that occur during image picking
            console.error('Image picking error:', error);
        });
    };
    var submitHandler = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    react_native_1.Alert.alert('Registration Successful!');
                    return [4 /*yield*/, userAction_1.registerUser(name, email, password, avatar)(dispatch)];
                case 1:
                    _a.sent();
                    navigation.navigate('Home');
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    // Handle the error here
                    console.error('An error occurred:', error_1);
                    // You can also show an error message to the user if needed
                    react_native_1.Alert.alert('Error', 'An error occurred while processing your request.');
                    navigation.navigate('Signup');
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    return (react_1["default"].createElement(react_native_1.View, { className: "w-full h-full flex-col justify-start items-center" },
        react_1["default"].createElement(react_native_1.ImageBackground, { className: "w-full h-full top-0 absolute top", source: backgroundImage }),
        react_1["default"].createElement(react_native_1.View, { className: "self-stretch flex-col justify-center items-center" },
            react_1["default"].createElement(react_native_1.View, { className: "shadow-inner justify-center items-center" },
                react_1["default"].createElement(react_native_1.Text, { className: "w-[239px] text-center text-white text-[52px] font-bold font-['Roboto'] tracking-tight" }, "LocalVibe"),
                react_1["default"].createElement(react_native_1.View, { className: "w-56 h-56 relative" },
                    react_1["default"].createElement(react_native_1.Image, { className: "w-[60.57px] h-[61px] relative", source: logo }))),
            react_1["default"].createElement(react_native_1.View, { className: "flex-col justify-center items-start gap-[5px] " },
                react_1["default"].createElement(react_native_1.View, { className: "SettingIcon w-full h-[67] justify-start items-start flex-row " },
                    react_1["default"].createElement(react_native_1.View, { className: "GettingStarted flex-col justify-start items-start flex" },
                        react_1["default"].createElement(react_native_1.Text, { className: "SettingUpProfile w-[165] text-black text-xl font-bold font-['Roboto'] tracking-tight" }, "Setting up profile"),
                        react_1["default"].createElement(react_native_1.Text, { className: "JoinToExplore w-[148] text-black text-xs font-extralight font-['Roboto'] tracking-tight" }, "Join to explore!")),
                    react_1["default"].createElement(react_native_1.TouchableOpacity, { className: "Profileicon h-[67] justify-start items-center pl-6 gap-[20] flex-row", onPress: uploadImage },
                        react_1["default"].createElement(react_native_1.Image, { className: "w-[70] h-[70] rounded-[90px]", source: {
                                uri: avatar
                                    ? avatar
                                    : 'https://cdn-icons-png.flaticon.com/512/8801/8801434.png'
                            } }),
                        react_1["default"].createElement(react_native_1.Text, { className: "ProfileIcon text-black text-13 font-bold font-['Roboto'] tracking-tight", onPress: uploadImage }, "Profile Icon"))),
                react_1["default"].createElement(react_native_1.View, { className: "flex-col justify-center items-start gap-y-8" },
                    react_1["default"].createElement(react_native_1.View, { className: "flex-row justify-between items-center gap-x-6" },
                        react_1["default"].createElement(react_native_1.View, { className: "flex-col justify-center items-start gap-y-1.5" },
                            react_1["default"].createElement(react_native_1.Text, { className: "text-black text-[13px] font-bold font-roboto tracking-tight" }, "Full name"),
                            react_1["default"].createElement(react_native_1.TextInput, { placeholder: "First Name", value: name, onChangeText: function (text) { return setName(text); }, className: "w-[356px] h-[39px] bg-white rounded-[10px] shadow border border-neutral-400 border-opacity-20" }))),
                    react_1["default"].createElement(react_native_1.View, { className: "flex-col justify-start items-start" },
                        react_1["default"].createElement(react_native_1.Text, { className: "text-black text-[13px] font-bold font-roboto tracking-tight" }, "Address"),
                        react_1["default"].createElement(react_native_1.TextInput, { placeholder: "Address", className: "w-[356px] h-[39px] bg-white rounded-[10px] shadow border border-neutral-400 border-opacity-20" })),
                    react_1["default"].createElement(react_native_1.View, { className: "flex-row justify-between items-center gap-x-6" },
                        react_1["default"].createElement(react_native_1.View, { className: "flex-col justify-center items-start gap-y-1.5" },
                            react_1["default"].createElement(react_native_1.Text, { className: "text-black text-[13px] font-bold font-roboto tracking-tight" }, "Gender"),
                            react_1["default"].createElement(react_native_1.TextInput, { placeholder: "Gender", className: "w-[166px] h-[39px] bg-white rounded-[10px] shadow border border-neutral-400 border-opacity-20" })),
                        react_1["default"].createElement(react_native_1.View, { className: "flex-col justify-center items-start gap-y-1.5" },
                            react_1["default"].createElement(react_native_1.Text, { className: "text-black text-[13px] font-bold font-roboto tracking-tight" }, "Account Type"),
                            react_1["default"].createElement(react_native_1.TextInput, { placeholder: "Account Type", className: "w-[166px] h-[39px] bg-white rounded-[10px] shadow border border-neutral-400 border-opacity-20" })))),
                react_1["default"].createElement(react_native_1.View, null,
                    react_1["default"].createElement(react_native_1.View, { className: "TermsAgreementBox w-[353px] justify-end gap-y-2.5" },
                        react_1["default"].createElement(react_native_1.Text, { className: "TermsAgreement w-full" },
                            react_1["default"].createElement(react_native_1.Text, { style: {
                                    color: 'black',
                                    fontSize: 11,
                                    fontWeight: 'normal',
                                    fontFamily: 'Roboto',
                                    letterSpacing: -0.5
                                } }, "Agree to"),
                            react_1["default"].createElement(react_native_1.Text, { style: {
                                    color: 'green',
                                    fontSize: 11,
                                    fontWeight: 'bold',
                                    fontFamily: 'Roboto',
                                    letterSpacing: -0.5
                                }, onPress: function () { return navigation.navigate(''); } },
                                ' ',
                                "Terms"),
                            react_1["default"].createElement(react_native_1.Text, { style: {
                                    color: 'black',
                                    fontSize: 11,
                                    fontWeight: 'normal',
                                    fontFamily: 'Roboto',
                                    letterSpacing: -0.5
                                } },
                                ' ',
                                "and"),
                            react_1["default"].createElement(react_native_1.Text, { style: {
                                    color: 'green',
                                    fontSize: 11,
                                    fontWeight: 'bold',
                                    fontFamily: 'Roboto',
                                    letterSpacing: -0.5
                                }, onPress: function () { return navigation.navigate(''); } },
                                ' ',
                                "Conditions")))),
                react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: submitHandler, className: "Frame19 w-[341px] h-[39px] px-[142px] bg-emerald-700 rounded-[10px] shadow justify-center items-center" },
                    react_1["default"].createElement(react_native_1.Text, { className: "Finish w-full text-center text-white font-bold font-Roboto tracking-tight" }, "Finish"))))));
};
exports["default"] = SignupScreen;
