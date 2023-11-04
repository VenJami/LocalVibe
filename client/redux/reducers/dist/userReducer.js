"use strict";
exports.__esModule = true;
exports.userReducer = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var intialState = {
    isAuthenticated: false,
    loading: false,
    isLoading: false,
    user: {},
    users: [],
    token: "",
    error: null
};
exports.userReducer = toolkit_1.createReducer(intialState, {
    userRegisterRequest: function (state) {
        state.loading = true;
        state.isAuthenticated = false;
    },
    userRegisterSuccess: function (state, action) {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload;
    },
    userRegisterFailed: function (state, action) {
        state.loading = false;
        state.isAuthenticated = false;
        state.error = action.payload;
    },
    userLoadRequest: function (state) {
        state.loading = true;
        state.isAuthenticated = false;
    },
    userLoadSuccess: function (state, action) {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
    },
    userLoadFailed: function (state, action) {
        state.loading = false;
        state.isAuthenticated = false;
    },
    userLoginRequest: function (state) {
        state.isAuthenticated = false;
        state.loading = true;
    },
    userLoginSuccess: function (state, action) {
        state.isAuthenticated = true;
        state.loading = false;
        state.user = action.payload;
    },
    userLoginFailed: function (state, action) {
        state.isAuthenticated = false;
        state.loading = false;
        state.error = action.payload;
        state.user = {};
    },
    userLogoutRequest: function (state) {
        state.loading = true;
    },
    userLogoutSuccess: function (state) {
        state.loading = false;
        state.isAuthenticated = false;
        state.user = {};
    },
    userLogoutFailed: function (state) {
        state.loading = false;
    },
    getUsersRequest: function (state) {
        state.isLoading = true;
    },
    getUsersSuccess: function (state, action) {
        state.isLoading = false;
        state.users = action.payload;
    },
    getUsersFailed: function (state, action) {
        state.isLoading = false;
        state.users = action.payload;
    },
    clearErrors: function (state) {
        state.error = null;
        state.isAuthenticated = false;
    }
});
