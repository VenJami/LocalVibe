"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var react_native_image_crop_picker_1 = require("react-native-image-crop-picker");
var react_native_safe_area_context_1 = require("react-native-safe-area-context");
var react_redux_1 = require("react-redux");
var postAction_1 = require("../../redux/actions/postAction");
var PostScreen = function (_a) {
    var navigation = _a.navigation;
    var user = react_redux_1.useSelector(function (state) { return state.user; }).user;
    var _b = react_redux_1.useSelector(function (state) { return state.post; }), isSuccess = _b.isSuccess, isLoading = _b.isLoading;
    var dispatch = react_redux_1.useDispatch();
    var _c = react_1.useState(''), title = _c[0], setTitle = _c[1];
    var _d = react_1.useState(''), image = _d[0], setImage = _d[1];
    react_1.useEffect(function () {
        if (replies.length === 1 &&
            replies[0].title === '' &&
            replies[0].image === '') {
            setReplies([]);
        }
        if (isSuccess) {
            navigation.goBack();
        }
        setReplies([]);
        setTitle('');
        setImage('');
    }, [isSuccess]);
    var _e = react_1.useState([
        {
            title: '',
            image: '',
            user: ''
        },
    ]), replies = _e[0], setReplies = _e[1];
    var postImageUpload = function () {
        react_native_image_crop_picker_1["default"].openPicker({
            width: 300,
            height: 300,
            cropping: true,
            compressImageQuality: 0.8,
            includeBase64: true
        }).then(function (image) {
            if (image) {
                setImage('data:image/jpeg;base64,' + image.data);
            }
        });
    };
    var createPost = function () {
        if (title !== '' || (image !== '' && !isLoading)) {
            postAction_1.createPostAction(title, image, user, replies)(dispatch);
        }
    };
    return (react_1["default"].createElement(react_native_safe_area_context_1.SafeAreaView, { className: "flex-1 justify-between bg-green-50" },
        react_1["default"].createElement(react_native_1.View, null,
            react_1["default"].createElement(react_native_1.View, { className: "w-full flex-row items-center bg-white" },
                react_1["default"].createElement(react_native_1.TouchableOpacity, { className: "p-2", onPress: function () { return navigation.goBack(); } },
                    react_1["default"].createElement(react_native_1.Image, { source: require('../assets/back.png') })),
                react_1["default"].createElement(react_native_1.Text, { className: "pl-4 text-[20px] font-[500] text-emerald-700" }, "Post Vibe")),
            react_1["default"].createElement(react_native_1.View, { className: "mt-1 flex-row bg-white" },
                react_1["default"].createElement(react_native_1.Image, { source: { uri: user === null || user === void 0 ? void 0 : user.avatar.url }, style: { width: 50, height: 50 }, className: "m-2.5", borderRadius: 100 }),
                react_1["default"].createElement(react_native_1.View, { className: "" },
                    react_1["default"].createElement(react_native_1.View, { className: "w-[70%] flex-row justify-between" },
                        react_1["default"].createElement(react_native_1.Text, { className: "text-[20px] mt-2 font-[600] text-black" }, user === null || user === void 0 ? void 0 : user.name)),
                    react_1["default"].createElement(react_native_1.TextInput, { placeholder: "What is happening...", placeholderTextColor: '#000', value: title, onChangeText: function (text) { return setTitle(text); }, className: "text-gray text-[16px]" }),
                    react_1["default"].createElement(react_native_1.TouchableOpacity, { className: "my-2", onPress: postImageUpload },
                        react_1["default"].createElement(react_native_1.Image, { source: require('../assets/newsfeed/upload.png'), style: { width: 20, height: 20 } })))),
            image && (react_1["default"].createElement(react_native_1.View, { className: "m-2" },
                react_1["default"].createElement(react_native_1.Image, { source: { uri: image }, width: 200, height: 300, resizeMethod: "auto", alt: "" })))),
        react_1["default"].createElement(react_native_1.View, { className: "p-2 flex-row justify-between" },
            react_1["default"].createElement(react_native_1.Text, null, "Everyone will see this post"),
            react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: createPost },
                react_1["default"].createElement(react_native_1.Text, { className: "text-emerald-700" }, "Post")))));
};
exports["default"] = PostScreen;
