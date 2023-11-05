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
var userAction_1 = require("../../redux/actions/userAction");
var UserProfileScreen = function (_a) {
    var navigation = _a.navigation, route = _a.route;
    var _b = react_redux_1.useSelector(function (state) { return state.user; }), users = _b.users, user = _b.user, isLoading = _b.isLoading;
    var _c = react_1.useState(false), imagePreview = _c[0], setImagePreview = _c[1];
    var _d = react_1.useState(0), active = _d[0], setActive = _d[1];
    var posts = react_redux_1.useSelector(function (state) { return state.post; }).posts;
    var _e = react_1.useState([]), postData = _e[0], setPostsData = _e[1];
    var _f = react_1.useState([]), repliesData = _f[0], setRepliesData = _f[1];
    var d = route.params.item;
    var _g = react_1.useState(d), data = _g[0], setData = _g[1];
    var dispatch = react_redux_1.useDispatch();
    react_1.useEffect(function () {
        if (users) {
            var userData = users.find(function (i) { return i._id === (d === null || d === void 0 ? void 0 : d._id); });
            setData(userData);
        }
        if (posts) {
            var myPosts = posts.filter(function (post) {
                return post.replies.some(function (reply) { return reply.user._id === d._id; });
            });
            setRepliesData(myPosts.filter(function (post) { return post.replies.length > 0; }));
            var myUserPosts = posts.filter(function (post) { return post.user._id === d._id; });
            setPostsData(myUserPosts);
        }
    }, [users, route.params.item, posts, d]);
    var FollowUnfollowHandler = function () { return __awaiter(void 0, void 0, void 0, function () {
        var error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, , 6]);
                    if (!data.followers.find(function (i) { return i.userId === user._id; })) return [3 /*break*/, 2];
                    return [4 /*yield*/, userAction_1.unfollowUserAction({
                            userId: user._id,
                            users: users,
                            followUserId: data._id
                        })(dispatch)];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 2: return [4 /*yield*/, userAction_1.followUserAction({
                        userId: user._id,
                        users: users,
                        followUserId: data._id
                    })(dispatch)];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4: return [3 /*break*/, 6];
                case 5:
                    error_1 = _a.sent();
                    console.log(error_1, 'error');
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    }); };
    return (react_1["default"].createElement(react_1["default"].Fragment, null, data && (react_1["default"].createElement(react_native_1.SafeAreaView, null, imagePreview ? (react_1["default"].createElement(react_native_1.TouchableOpacity, { className: "h-screen bg-white w-full items-center justify-center", onPress: function () { return setImagePreview(!imagePreview); } },
        react_1["default"].createElement(react_native_1.Image, { source: { uri: data.avatar.url }, width: 250, height: 250, borderRadius: 500 }))) : (react_1["default"].createElement(react_native_1.View, { className: "p-2" },
        react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: function () { return navigation.goBack(); } },
            react_1["default"].createElement(react_native_1.Image, { source: {
                    uri: 'https://cdn-icons-png.flaticon.com/512/2223/2223615.png'
                }, height: 25, width: 25 })),
        react_1["default"].createElement(react_native_1.ScrollView, { showsVerticalScrollIndicator: false },
            react_1["default"].createElement(react_native_1.View, { className: "w-full flex-row" },
                react_1["default"].createElement(react_native_1.View, { className: 'w-[80%]' },
                    react_1["default"].createElement(react_native_1.Text, { className: "pt-3 text-[22px] text-black" }, data.name),
                    data.userName && (react_1["default"].createElement(react_native_1.Text, { className: "py-2 text-[16px] text-[#0000009d]" }, data.userName)),
                    data.bio && (react_1["default"].createElement(react_native_1.Text, { className: "py-2 text-[16px] text-[#000000c4]" }, data.bio)),
                    react_1["default"].createElement(react_native_1.TouchableOpacity, null,
                        react_1["default"].createElement(react_native_1.Text, { className: "py-2 text-[18px] text-[#000000c7]" },
                            data.followers.length,
                            " followers"))),
                react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: function () { return setImagePreview(!imagePreview); } },
                    react_1["default"].createElement(react_native_1.View, { className: "relative" },
                        react_1["default"].createElement(react_native_1.Image, { source: { uri: data.avatar.url }, width: 60, height: 60, borderRadius: 100 })))),
            react_1["default"].createElement(react_native_1.TouchableOpacity, { className: "mt-2 rounded-[8px] w-full flex-row justify-center items-center h-[38px] bg-black", onPress: FollowUnfollowHandler },
                react_1["default"].createElement(react_native_1.Text, { className: "text-white text-[18px]" }, data.followers.find(function (i) { return i.userId === user._id; })
                    ? 'Following'
                    : 'Follow')),
            react_1["default"].createElement(react_native_1.View, { className: "w-full border-b border-b-[#00000032] pt-5 pb-2 relative" },
                react_1["default"].createElement(react_native_1.View, { className: "w-[70%] m-auto flex-row justify-between" },
                    react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: function () { return setActive(0); } },
                        react_1["default"].createElement(react_native_1.Text, { className: "text-[18px] pl-3 text-black", style: { opacity: active === 0 ? 1 : 0.6 } },
                            ' ',
                            "Post")),
                    react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: function () { return setActive(1); } },
                        react_1["default"].createElement(react_native_1.Text, { className: "text-[18px] pl-3 text-black", style: { opacity: active === 1 ? 1 : 0.6 } },
                            ' ',
                            "Media"))),
                active === 0 ? (react_1["default"].createElement(react_native_1.View, { className: "w-[50%] absolute h-[1px] bg-black left-[-10px] bottom-0" })) : (react_1["default"].createElement(react_native_1.View, { className: "w-[50%] absolute h-[1px] bg-black right-[-10px] bottom-0" }))))))))));
};
exports["default"] = UserProfileScreen;
