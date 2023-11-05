"use strict";
exports.__esModule = true;
exports.notificationReducer = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = {
    isLoading: true,
    error: null,
    notifications: []
};
exports.notificationReducer = toolkit_1.createReducer(initialState, {
    getNotificationRequest: function (state) {
        state.isLoading = true;
    },
    getNotificationSuccess: function (state, action) {
        state.isLoading = false;
        state.notifications = action.payload;
    },
    getNotificationFailed: function (state, action) {
        state.isLoading = false;
        state.error = action.payload;
    },
    clearErrors: function (state) {
        state.error = null;
    }
});
