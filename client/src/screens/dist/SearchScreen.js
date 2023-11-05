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
var react_native_safe_area_context_1 = require("react-native-safe-area-context");
var react_redux_1 = require("react-redux");
var userAction_1 = require("../../redux/actions/userAction");
var Loader_1 = require("../common/Loader");
var SearchScreen = function (_a) {
    var navigation = _a.navigation;
    var _b = react_1.useState([
        {
            name: '',
            userName: '',
            avatar: { url: '' },
            followers: []
        },
    ]), data = _b[0], setData = _b[1];
    var _c = react_redux_1.useSelector(function (state) { return state.user; }), users = _c.users, user = _c.user, isLoading = _c.isLoading;
    var dispatch = react_redux_1.useDispatch();
    react_1.useEffect(function () {
        userAction_1.getAllUsers()(dispatch);
    }, [dispatch]);
    react_1.useEffect(function () {
        if (users) {
            setData(users);
        }
    }, [users]);
    var handleSearchChange = function (e) {
        if (e.length !== 0) {
            var filteredUsers = users &&
                users.filter(function (i) {
                    return i.name.toLowerCase().includes(e.toLowerCase());
                });
            setData(filteredUsers);
        }
        else {
            setData(users);
        }
    };
    return (react_1["default"].createElement(react_1["default"].Fragment, null, isLoading ? (react_1["default"].createElement(Loader_1["default"], null)) : (react_1["default"].createElement(react_native_safe_area_context_1.SafeAreaView, null,
        react_1["default"].createElement(react_native_1.View, { className: "p-3" },
            react_1["default"].createElement(react_native_1.View, { className: "w-full flex-row items-center bg-white" },
                react_1["default"].createElement(react_native_1.TouchableOpacity, { className: "p-2", onPress: function () { return navigation.goBack(); } },
                    react_1["default"].createElement(react_native_1.Image, { source: require('../assets/back.png') })),
                react_1["default"].createElement(react_native_1.Text, { className: "pl-4 text-[20px] font-[500] text-emerald-700" }, "Search")),
            react_1["default"].createElement(react_native_1.View, { className: "relative" },
                react_1["default"].createElement(react_native_1.Image, { source: {
                        uri: 'https://cdn-icons-png.flaticon.com/512/2811/2811806.png'
                    }, height: 20, width: 20, className: "absolute top-[20px] left-2" }),
                react_1["default"].createElement(react_native_1.TextInput, { onChangeText: function (e) { return handleSearchChange(e); }, placeholder: "Search", placeholderTextColor: "#000", className: "w-full h-[38px] bg-[#0000000e] rounded-[8px] pl-8 text-[#000] mt-[10px]" })),
            isLoading ? (react_1["default"].createElement(Loader_1["default"], null)) : (react_1["default"].createElement(react_native_1.FlatList, { data: data, renderItem: function (_a) {
                    var item = _a.item;
                    var handleFollowUnfollow = function (e) { return __awaiter(void 0, void 0, void 0, function () {
                        var error_1;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    _a.trys.push([0, 5, , 6]);
                                    if (!e.followers.find(function (i) { return i.userId === user._id; })) return [3 /*break*/, 2];
                                    return [4 /*yield*/, userAction_1.unfollowUserAction({
                                            userId: user._id,
                                            users: users,
                                            followUserId: e._id
                                        })(dispatch)];
                                case 1:
                                    _a.sent();
                                    return [3 /*break*/, 4];
                                case 2: return [4 /*yield*/, userAction_1.followUserAction({
                                        userId: user._id,
                                        users: users,
                                        followUserId: e._id
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
                    return (react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: function () { return navigation.navigate('UserProfile', {
                            item: item
                        }); } },
                        react_1["default"].createElement(react_native_1.View, { className: "flex-row my-3" },
                            react_1["default"].createElement(react_native_1.Image, { source: { uri: item.avatar.url }, width: 30, height: 30, borderRadius: 100 }),
                            react_1["default"].createElement(react_native_1.View, { className: "w-[90%] flex-row justify-between border-b border-[#00000020] pb-2" },
                                react_1["default"].createElement(react_native_1.View, { className: "" },
                                    react_1["default"].createElement(react_native_1.Text, { className: "pl-3 text-[18px] text-black" }, item.name),
                                    react_1["default"].createElement(react_native_1.Text, { className: "pl-3 text-[18px] text-black" }, item.userName),
                                    react_1["default"].createElement(react_native_1.Text, { className: "pl-3 mt-1 text-[16px] text-[#444]" },
                                        item.followers.length,
                                        " followers")),
                                react_1["default"].createElement(react_native_1.View, null,
                                    react_1["default"].createElement(react_native_1.TouchableOpacity, { className: "rounded-[8px] w-[100px] flex-row justify-center items-center h-[35px] border border-[#0000004b]", onPress: function () { return handleFollowUnfollow(item); } },
                                        react_1["default"].createElement(react_native_1.Text, { className: "text-black" }, item.followers.find(function (i) { return i.userId === user._id; })
                                            ? 'Following'
                                            : 'Follow')))))));
                } })))))));
};
exports["default"] = SearchScreen;
