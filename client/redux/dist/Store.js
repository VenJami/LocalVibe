"use strict";
exports.__esModule = true;
var toolkit_1 = require("@reduxjs/toolkit");
var userReducer_1 = require("./reducers/userReducer");
var postReducer_1 = require("./reducers/postReducer");
var notificationReducer_1 = require("./reducers/notificationReducer");
var Store = toolkit_1.configureStore({
    reducer: {
        user: userReducer_1.userReducer,
        post: postReducer_1.postReducer,
        notification: notificationReducer_1.notificationReducer
    },
    middleware: function (getDefaultMiddleware) {
        return getDefaultMiddleware({
            immutableCheck: false,
            serializableCheck: false
        });
    }
});
exports["default"] = Store;
