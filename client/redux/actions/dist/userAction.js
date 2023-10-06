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
exports.registerUser = void 0;
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
                    console.log('Received logs for useraction');
                    config = { headers: { 'Content-Type': 'application/json' } };
                    return [4 /*yield*/, axios_1["default"].post(URI_1.URI + "/registration", { name: name, email: email, password: password, avatar: avatar }, config)];
                case 1:
                    data = (_b.sent()).data;
                    console.log('After POST request');
                    console.log('Response data:', data);
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
// // load user
// export const loadUser = () => async (dispatch: Dispatch<any>) => {
//   try {
//     dispatch({
//       type: 'userLoadRequest',
//     });
//     const token = await AsyncStorage.getItem('token');
//     const {data} = await axios.get(`${URI}/me`, {
//       headers: {Authorization: `Bearer ${token}`},
//     });
//     dispatch({
//       type: 'userLoadSuccess',
//       payload: {
//         user: data.user,
//         token,
//       },
//     });
//   } catch (error: any) {
//     dispatch({
//       type: 'userLoadFailed',
//       payload: error.response.data.message,
//     });
//   }
// };
// // login user
// export const loginUser =
//   (email: string, password: string) => async (dispatch: Dispatch<any>) => {
//     try {
//       dispatch({
//         type: 'userLoginRequest',
//       });
//       const config = {headers: {'Content-Type': 'application/json'}};
//       const {data} = await axios.post(
//         `${URI}/login`,
//         {email, password},
//         config,
//       );
//       dispatch({
//         type: 'userLoginSuccess',
//         payload: data.user,
//       });
//       if (data.token) {
//         await AsyncStorage.setItem('token', data.token);
//       }
//     } catch (error: any) {
//       dispatch({
//         type: 'userLoginFailed',
//         payload: error.response.data.message,
//       });
//     }
//   };
// // log out user
// export const logoutUser = () => async (dispatch: Dispatch<any>) => {
//   try {
//     dispatch({
//       type: 'userLogoutRequest',
//     });
//     await AsyncStorage.setItem('token', '');
//     dispatch({
//       type: 'userLogoutSuccess',
//       payload: {},
//     });
//   } catch (error) {
//     dispatch({
//       type: 'userLogoutFailed',
//     });
//   }
// };
// // get all users
// export const getAllUsers = () => async (dispatch: Dispatch<any>) => {
//   try {
//     dispatch({
//       type: 'getUsersRequest',
//     });
//     const token = await AsyncStorage.getItem('token');
//     const {data} = await axios.get(`${URI}/users`, {
//       headers: {Authorization: `Bearer ${token}`},
//     });
//     dispatch({
//       type: 'getUsersSuccess',
//       payload: data.users,
//     });
//   } catch (error: any) {
//     dispatch({
//       type: 'getUsersFailed',
//       payload: error.response.data.message,
//     });
//   }
// };
// interface FollowUnfollowParams {
//   userId: string;
//   followUserId: string;
//   users: any;
// }
// // follow user
// export const followUserAction =
//   ({userId, users, followUserId}: FollowUnfollowParams) =>
//   async (dispatch: Dispatch<any>) => {
//     try {
//       const token = await AsyncStorage.getItem('token');
//       const updatedUsers = users.map((userObj: any) =>
//         userObj._id === followUserId
//           ? {
//               ...userObj,
//               followers: [...userObj.followers, {userId}],
//             }
//           : userObj,
//       );
//       // update our users state
//       dispatch({
//         type: 'getUsersSuccess',
//         payload: updatedUsers,
//       });
//       await axios.put(
//         `${URI}/add-user`,
//         {followUserId},
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         },
//       );
//     } catch (error) {
//       console.log('Error following user:', error);
//     }
//   };
// // unfollow user
// export const unfollowUserAction =
//   ({userId, users, followUserId}: FollowUnfollowParams) =>
//   async (dispatch: Dispatch<any>) => {
//     try {
//       const token = await AsyncStorage.getItem('token');
//       const updatedUsers = users.map((userObj: any) =>
//         userObj._id === followUserId
//           ? {
//               ...userObj,
//               followers: userObj.followers.filter(
//                 (follower: any) => follower.userId !== userId,
//               ),
//             }
//           : userObj,
//       );
//       // update our users state
//       dispatch({
//         type: 'getUsersSuccess',
//         payload: updatedUsers,
//       });
//       await axios.put(
//         `${URI}/add-user`,
//         {followUserId},
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         },
//       );
//     } catch (error) {
//       console.log('Error following user:', error);
//     }
//   };
