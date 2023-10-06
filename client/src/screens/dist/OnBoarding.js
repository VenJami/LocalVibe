"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_native_onboarding_swiper_1 = require("react-native-onboarding-swiper");
var lottie_react_native_1 = require("lottie-react-native");
var react_1 = require("react");
function OnBoarding() {
    return (react_1["default"].createElement(react_native_1.View, { className: "bg-white justify-center items-center flex-1" },
        react_1["default"].createElement(react_native_onboarding_swiper_1["default"], { pages: [
                {
                    backgroundColor: '#fff',
                    image: (react_1["default"].createElement(react_native_1.View, { className: 'w-[300px] h-auto' },
                        react_1["default"].createElement(lottie_react_native_1["default"], { source: require('../animation/gettingstarted_animation.json'), autoPlay: true, loop: true }))),
                    title: 'Connect with the Community!',
                    subtitle: "Step into LocalVibe, where unity, friendships, and belonging flourish. Let's create a thriving community together!"
                },
                {
                    backgroundColor: '#fff',
                    image: (react_1["default"].createElement(react_native_1.View, null,
                        react_1["default"].createElement(react_native_1.Text, null, "3RD PAGE"))),
                    title: 'Promote local commerce and discovery!',
                    subtitle: 'Explore local treasures, support businesses, and foster community with LocalVibe. Join the journey!'
                },
                {
                    backgroundColor: '#fff',
                    image: (react_1["default"].createElement(react_native_1.View, null,
                        react_1["default"].createElement(react_native_1.Text, null, "3RD PAGE"))),
                    title: 'Proximity-Based Feeds!',
                    subtitle: 'Discover the magic of proximity with LocalVibe! Our Proximity-Based Feeds keep '
                },
                {
                    backgroundColor: '#fff',
                    image: (react_1["default"].createElement(react_native_1.View, null,
                        react_1["default"].createElement(react_native_1.Text, null, "3RD PAGE"))),
                    title: 'Event creation and participation!',
                    subtitle: 'Elevate your events with LocalVibe! Bring people together like never before.'
                },
                {
                    backgroundColor: '#fff',
                    image: (react_1["default"].createElement(react_native_1.View, null,
                        react_1["default"].createElement(react_native_1.Text, null, "3RD PAGE"))),
                    title: 'Express your appreciation for posts!',
                    subtitle: 'Effortlessly show support on LocalVibe! Express appreciation for posts you love.'
                },
            ] })));
}
exports["default"] = OnBoarding;
