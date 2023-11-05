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
var notificationAction_1 = require("../../redux/actions/notificationAction");
var react_redux_1 = require("react-redux");
var TimeGenerator_1 = require("../common/TimeGenerator");
var axios_1 = require("axios");
var URI_1 = require("../../redux/URI");
var Loader_1 = require("../common/Loader");
var NotificationScreen = function (_a) {
    var navigation = _a.navigation;
    var dispatch = react_redux_1.useDispatch();
    var _b = react_redux_1.useSelector(function (state) { return state.notification; }), notifications = _b.notifications, isLoading = _b.isLoading;
    var _c = react_1.useState(false), refreshing = _c[0], setRefreshing = _c[1];
    var posts = react_redux_1.useSelector(function (state) { return state.post; }).posts;
    var _d = react_redux_1.useSelector(function (state) { return state.user; }), token = _d.token, users = _d.users;
    var _e = react_1.useState(0), active = _e[0], setActive = _e[1];
    var refreshingHeight = 100;
    var labels = ['All', 'Replies', 'Mentions'];
    var handleTabPress = function (index) {
        setActive(index);
    };
    react_1.useEffect(function () {
        notificationAction_1.getNotifications()(dispatch);
    }, []);
    return (react_1["default"].createElement(react_1["default"].Fragment, null, isLoading ? (react_1["default"].createElement(Loader_1["default"], null)) : (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(react_native_1.SafeAreaView, null,
            react_1["default"].createElement(react_native_1.View, { className: "p-3 mb-[190px]" },
                react_1["default"].createElement(react_native_1.Text, { className: "text-3xl font-[700] text-black" }, "Activity"),
                react_1["default"].createElement(react_native_1.View, { className: "w-full flex-row my-3 justify-between" }, labels.map(function (label, index) { return (react_1["default"].createElement(react_native_1.TouchableOpacity, { key: index, className: "w-[105px] h-[38px] rounded-[8px]", style: {
                        backgroundColor: active === index ? 'black' : '#fff',
                        borderWidth: active === index ? 1 : 0,
                        borderColor: 'rgba(0,0,0,0.29)'
                    }, onPress: function () { return handleTabPress(index); } },
                    react_1["default"].createElement(react_native_1.Text, { className: (active !== index ? 'text-black' : 'text-[#fff]') + " text-[20px] font-[600] text-center pt-[6px]" }, label))); })),
                active === 0 && notifications.length === 0 && (react_1["default"].createElement(react_native_1.View, { className: "w-full h-[80px] flex items-center justify-center" },
                    react_1["default"].createElement(react_native_1.Text, { className: 'text-[16px] text-black mt-5' }, "You have no activity yet!"))),
                active === 1 && (react_1["default"].createElement(react_native_1.View, { className: "w-full h-[80px] flex items-center justify-center" },
                    react_1["default"].createElement(react_native_1.Text, { className: 'text-[16px] text-black mt-5' }, "You have no replies yet!"))),
                active === 2 && (react_1["default"].createElement(react_native_1.View, { className: "w-full h-[80px] flex items-center justify-center" },
                    react_1["default"].createElement(react_native_1.Text, { className: 'text-[16px] text-black mt-5' }, "You have no mentions yet!"))),
                active === 0 && (react_1["default"].createElement(react_native_1.FlatList, { data: notifications, refreshControl: react_1["default"].createElement(react_native_1.RefreshControl, { refreshing: refreshing, onRefresh: function () {
                            setRefreshing(true);
                            notificationAction_1.getNotifications()(dispatch).then(function () {
                                setRefreshing(false);
                            });
                        }, progressViewOffset: refreshingHeight }), showsVerticalScrollIndicator: false, renderItem: function (_a) {
                        var _b;
                        var item = _a.item;
                        var time = item.createdAt;
                        var formattedDuration = TimeGenerator_1["default"](time);
                        var handleNavigation = function (e) { return __awaiter(void 0, void 0, void 0, function () {
                            var id;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        id = item.creator._id;
                                        return [4 /*yield*/, axios_1["default"]
                                                .get(URI_1.URI + "/get-user/" + id, {
                                                headers: { Authorization: "Bearer " + token }
                                            })
                                                .then(function (res) {
                                                if (item.type === "Follow") {
                                                    navigation.navigate('UserProfile', {
                                                        item: res.data.user
                                                    });
                                                }
                                                else {
                                                    navigation.navigate('PostDetails', {
                                                        data: posts.find(function (i) { return i._id === item.postId; })
                                                    });
                                                }
                                            })];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); };
                        return (react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: function () { return handleNavigation(item); } },
                            react_1["default"].createElement(react_native_1.View, { className: "flex-row", key: item._id },
                                react_1["default"].createElement(react_native_1.View, { className: "relative" },
                                    react_1["default"].createElement(react_native_1.Image, { source: {
                                            uri: (_b = users.find(function (user) { return user._id === item.creator._id; })) === null || _b === void 0 ? void 0 : _b.avatar.url
                                        }, width: 40, height: 40, borderRadius: 100 }),
                                    item.type === 'Like' && (react_1["default"].createElement(react_native_1.View, { className: "absolute bottom-5 border-[2px] border-[#fff] right-[-5px] h-[25px] w-[25px] bg-[#eb4545] rounded-full items-center justify-center flex-row" },
                                        react_1["default"].createElement(react_native_1.Image, { source: {
                                                uri: 'https://cdn-icons-png.flaticon.com/512/2589/2589175.png'
                                            }, tintColor: '#fff', width: 15, height: 15 }))),
                                    item.type === 'Follow' && (react_1["default"].createElement(react_native_1.View, { className: "absolute bottom-5 border-[2px] border-[#fff] right-[-5px] h-[25px] w-[25px] bg-[#5a49d6] rounded-full items-center justify-center flex-row" },
                                        react_1["default"].createElement(react_native_1.Image, { source: {
                                                uri: 'https://cdn-icons-png.flaticon.com/512/1077/1077114.png'
                                            }, tintColor: '#fff', width: 12, height: 12 })))),
                                react_1["default"].createElement(react_native_1.View, { className: "pl-3 my-2" },
                                    react_1["default"].createElement(react_native_1.View, { className: "flex-row w-full items-center border-b pb-3 border-[#0000003b]" },
                                        react_1["default"].createElement(react_native_1.View, { className: "w-full" },
                                            react_1["default"].createElement(react_native_1.View, { className: "flex-row items-center" },
                                                react_1["default"].createElement(react_native_1.Text, { className: "text-[18px] text-black font-[600]" }, item.creator.name),
                                                react_1["default"].createElement(react_native_1.Text, { className: "pl-2 text-[16px] text-[#000000b3] font-[600]" }, formattedDuration)),
                                            react_1["default"].createElement(react_native_1.Text, { className: "text-[16px] text-[#000000b3] font-[600]" }, item.title)))))));
                    } }))))))));
};
exports["default"] = NotificationScreen;
