"use strict";
exports.__esModule = true;
var toolkit_1 = require("@reduxjs/toolkit");
var userReducer_1 = require("./reducers/userReducer");
var postReducer_1 = require("./reducers/postReducer");
// import { notificationReducer } from "./reducers/notificationReducer";
var Store = toolkit_1.configureStore({
    reducer: {
        user: userReducer_1.userReducer,
        post: postReducer_1.postReducer
    },
    middleware: function (getDefaultMiddleware) {
        return getDefaultMiddleware({
            immutableCheck: false,
            serializableCheck: false
        });
    }
});
exports["default"] = Store;
