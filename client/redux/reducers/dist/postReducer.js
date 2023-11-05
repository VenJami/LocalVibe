"use strict";
exports.__esModule = true;
exports.postReducer = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var intialState = {
    posts: [],
    post: {},
    error: null,
    isSuccess: false,
    isLoading: true
};
exports.postReducer = toolkit_1.createReducer(intialState, {
    postCreateRequest: function (state) {
        state.isLoading = true;
    },
    postCreateSuccess: function (state, action) {
        state.isLoading = false;
        state.post = action.payload;
        state.isSuccess = true;
    },
    postCreateFailed: function (state, action) {
        state.isLoading = false;
        state.error = action.payload;
    },
    getAllPostsRequest: function (state) {
        state.isLoading = true;
    },
    getAllPostsSuccess: function (state, action) {
        state.isLoading = false;
        state.posts = action.payload;
    },
    getAllPostsFailed: function (state, action) {
        state.isLoading = false;
        state.error = action.payload;
    },
    clearErrors: function (state) {
        state.error = null;
    }
});
