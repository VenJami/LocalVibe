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
var react_redux_1 = require("react-redux");
var react_native_2 = require("react-native");
var userAction_1 = require("../../redux/actions/userAction");
var width = react_native_2.Dimensions.get('window').width;
var ProfileScreen = function (_a) {
    var navigation = _a.navigation;
    var _b = react_1.useState(0), active = _b[0], setActive = _b[1];
    var user = react_redux_1.useSelector(function (state) { return state.user; }).user;
    var posts = react_redux_1.useSelector(function (state) { return state.post; }).posts;
    var _c = react_1.useState([]), data = _c[0], setData = _c[1];
    var _d = react_1.useState([]), repliesData = _d[0], setRepliesData = _d[1];
    var dispatch = react_redux_1.useDispatch();
    var logoutHandler = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            console.log('logout submitted');
            userAction_1.logoutUser()(dispatch);
            return [2 /*return*/];
        });
    }); };
    react_1.useEffect(function () {
        if (posts && user) {
            var myPosts = posts.filter(function (post) { return post.user._id === user._id; });
            setData(myPosts);
        }
    }, [posts, user]);
    react_1.useEffect(function () {
        if (posts && user) {
            var myReplies = posts.filter(function (post) {
                return post.replies.some(function (reply) { return reply.user._id === user._id; });
            });
            setRepliesData(myReplies.filter(function (post) { return post.replies.length > 0; }));
        }
    }, [posts, user]);
    return (react_1["default"].createElement(react_native_1.ScrollView, { showsVerticalScrollIndicator: false },
        react_1["default"].createElement(react_native_1.SafeAreaView, { className: "relative" },
            react_1["default"].createElement(react_native_1.View, { className: "flex-row justify-between", style: { width: width, padding: 10 } },
                react_1["default"].createElement(react_native_1.View, null,
                    react_1["default"].createElement(react_native_1.Text, { className: "text-[#000] text-[30px]" }, user === null || user === void 0 ? void 0 : user.name),
                    react_1["default"].createElement(react_native_1.Text, { className: "text-[#0000009d] text-[20px]" }, user === null || user === void 0 ? void 0 : user.userName)),
                react_1["default"].createElement(react_native_1.Image, { source: { uri: user.avatar.url }, height: 80, width: 80, borderRadius: 100 })),
            react_1["default"].createElement(react_native_1.Text, { className: "p-3 mt-[-20] text-[#000] font-sans leading-6 text-[18px]" }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est voluptatibus molestias soluta non commodi placeat quidem repudiandae eos eius possimus blanditiis, veniam temporibus harum sunt vel tenetur rem rerum inventore!"),
            react_1["default"].createElement(react_native_1.View, { className: "p-3" },
                react_1["default"].createElement(react_native_1.Text, { className: "text-[16px]" }, user === null || user === void 0 ? void 0 :
                    user.followers.length,
                    " followers")),
            react_1["default"].createElement(react_native_1.View, { className: "px-5 py-3 flex-row w-full items-center" },
                react_1["default"].createElement(react_native_1.TouchableOpacity, null,
                    react_1["default"].createElement(react_native_1.Text, { className: "w-[100] pt-1 text-center h-[30px] text-[#000]", style: {
                            borderColor: '#333',
                            borderWidth: 1,
                            backgroundColor: 'transparent'
                        } }, "Edit Profile")),
                react_1["default"].createElement(react_native_1.TouchableOpacity, { className: "ml-5", onPress: logoutHandler },
                    react_1["default"].createElement(react_native_1.Text, { className: "w-[100] pt-1 text-center h-[30px] text-[#000]", style: {
                            borderColor: '#333',
                            borderWidth: 1,
                            backgroundColor: 'transparent'
                        } }, "Log out"))),
            react_1["default"].createElement(react_native_1.View, { className: "border-b border-b-[#00000032] px-4 py-3", style: { width: '100%' } },
                react_1["default"].createElement(react_native_1.View, { className: "w-[80%] m-auto flex-row justify-between" },
                    react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: function () { return setActive(0); } },
                        react_1["default"].createElement(react_native_1.Text, { className: "text-[18px] pl-3 text-[#000]", style: { opacity: active === 0 ? 1 : 0.6 } }, "Posts")),
                    react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: function () { return setActive(1); } },
                        react_1["default"].createElement(react_native_1.Text, { className: "text-[18px] pl-3 text-[#000]", style: { opacity: active === 1 ? 1 : 0.6 } }, "Media")))),
            react_1["default"].createElement(react_native_1.Button, { title: "Go to Home", onPress: function () { return navigation.navigate('Home'); } }))));
};
exports["default"] = ProfileScreen;
