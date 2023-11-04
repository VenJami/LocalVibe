"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.unfollowUserAction = exports.followUserAction = exports.getAllUsers = exports.logoutUser = exports.loginUser = exports.loadUser = exports.registerUser = void 0;
var axios_1 = require("axios");
var URI_1 = require("../URI");
var async_storage_1 = require("@react-native-async-storage/async-storage");
// register user
exports.registerUser = function (name, email, password, avatar) {
    return function (dispatch) { return __awaiter(void 0, void 0, void 0, function () {
        var config, data, error_1;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 3, , 4]);
                    dispatch({
                        type: 'userRegisterRequest'
                    });
                    config = { headers: { 'Content-Type': 'application/json' } };
                    return [4 /*yield*/, axios_1["default"].post(URI_1.URI + "/registration", { name: name, email: email, password: password, avatar: avatar }, config)];
                case 1:
                    data = (_b.sent()).data;
                    dispatch({
                        type: 'userRegisterSuccess',
                        payload: data.user
                    });
                    return [4 /*yield*/, async_storage_1["default"].setItem('token', data.token)];
                case 2:
                    _b.sent();
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _b.sent();
                    dispatch({
                        type: 'userRegisterFailed',
                        payload: (_a = error_1.response) === null || _a === void 0 ? void 0 : _a.data.message
                    });
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
};
// load user
exports.loadUser = function () { return function (dispatch) { return __awaiter(void 0, void 0, void 0, function () {
    var token, data, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                dispatch({
                    type: 'userLoadRequest'
                });
                return [4 /*yield*/, async_storage_1["default"].getItem('token')];
            case 1:
                token = _a.sent();
                return [4 /*yield*/, axios_1["default"].get(URI_1.URI + "/me", {
                        headers: { Authorization: "Bearer " + token }
                    })];
            case 2:
                data = (_a.sent()).data;
                dispatch({
                    type: 'userLoadSuccess',
                    payload: {
                        user: data.user,
                        token: token
                    }
                });
                return [3 /*break*/, 4];
            case 3:
                error_2 = _a.sent();
                dispatch({
                    type: 'userLoadFailed',
                    payload: error_2.response.data.message
                });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); }; };
// login user
exports.loginUser = function (email, password) { return function (dispatch) { return __awaiter(void 0, void 0, void 0, function () {
    var config, data, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 4, , 5]);
                dispatch({
                    type: 'userLoginRequest'
                });
                config = { headers: { 'Content-Type': 'application/json' } };
                return [4 /*yield*/, axios_1["default"].post(URI_1.URI + "/login", { email: email, password: password }, config)];
            case 1:
                data = (_a.sent()).data;
                dispatch({
                    type: 'userLoginSuccess',
                    payload: data.user
                });
                if (!data.token) return [3 /*break*/, 3];
                return [4 /*yield*/, async_storage_1["default"].setItem('token', data.token)];
            case 2:
                _a.sent();
                _a.label = 3;
            case 3: return [3 /*break*/, 5];
            case 4:
                error_3 = _a.sent();
                dispatch({
                    type: 'userLoginFailed',
                    payload: error_3.response.data.message
                });
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); }; };
// log out user
exports.logoutUser = function () { return function (dispatch) { return __awaiter(void 0, void 0, void 0, function () {
    var error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                dispatch({
                    type: 'userLogoutRequest'
                });
                return [4 /*yield*/, async_storage_1["default"].setItem('token', '')];
            case 1:
                _a.sent();
                dispatch({
                    type: 'userLogoutSuccess',
                    payload: {}
                });
                return [3 /*break*/, 3];
            case 2:
                error_4 = _a.sent();
                dispatch({
                    type: 'userLogoutFailed'
                });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); }; };
// get all users
exports.getAllUsers = function () { return function (dispatch) { return __awaiter(void 0, void 0, void 0, function () {
    var token, data, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                dispatch({
                    type: 'getUsersRequest'
                });
                return [4 /*yield*/, async_storage_1["default"].getItem('token')];
            case 1:
                token = _a.sent();
                return [4 /*yield*/, axios_1["default"].get(URI_1.URI + "/users", {
                        headers: { Authorization: "Bearer " + token }
                    })];
            case 2:
                data = (_a.sent()).data;
                dispatch({
                    type: 'getUsersSuccess',
                    payload: data.users
                });
                return [3 /*break*/, 4];
            case 3:
                error_5 = _a.sent();
                dispatch({
                    type: 'getUsersFailed',
                    payload: error_5.response.data.message
                });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); }; };
// follow user
exports.followUserAction = function (_a) {
    var userId = _a.userId, users = _a.users, followUserId = _a.followUserId;
    return function (dispatch) { return __awaiter(void 0, void 0, void 0, function () {
        var token, updatedUsers, error_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, async_storage_1["default"].getItem('token')];
                case 1:
                    token = _a.sent();
                    updatedUsers = users.map(function (userObj) {
                        return userObj._id === followUserId
                            ? __assign(__assign({}, userObj), { followers: __spreadArrays(userObj.followers, [{ userId: userId }]) }) : userObj;
                    });
                    // update our users state
                    dispatch({
                        type: 'getUsersSuccess',
                        payload: updatedUsers
                    });
                    return [4 /*yield*/, axios_1["default"].put(URI_1.URI + "/add-user", { followUserId: followUserId }, {
                            headers: {
                                Authorization: "Bearer " + token
                            }
                        })];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    error_6 = _a.sent();
                    console.log('Error following user:', error_6);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
};
// unfollow user
exports.unfollowUserAction = function (_a) {
    var userId = _a.userId, users = _a.users, followUserId = _a.followUserId;
    return function (dispatch) { return __awaiter(void 0, void 0, void 0, function () {
        var token, updatedUsers, error_7;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, async_storage_1["default"].getItem('token')];
                case 1:
                    token = _a.sent();
                    updatedUsers = users.map(function (userObj) {
                        return userObj._id === followUserId
                            ? __assign(__assign({}, userObj), { followers: userObj.followers.filter(function (follower) { return follower.userId !== userId; }) }) : userObj;
                    });
                    // update our users state
                    dispatch({
                        type: 'getUsersSuccess',
                        payload: updatedUsers
                    });
                    return [4 /*yield*/, axios_1["default"].put(URI_1.URI + "/add-user", { followUserId: followUserId }, {
                            headers: {
                                Authorization: "Bearer " + token
                            }
                        })];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    error_7 = _a.sent();
                    console.log('Error following user:', error_7);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
};
