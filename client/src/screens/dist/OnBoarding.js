"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_native_onboarding_swiper_1 = require("react-native-onboarding-swiper");
var lottie_react_native_1 = require("lottie-react-native");
var react_1 = require("react");
var native_1 = require("@react-navigation/native");
var asyncStorage_1 = require("../../utils/asyncStorage");
var _a = react_native_1.Dimensions.get('window'), width = _a.width, height = _a.height;
function OnBoarding() {
    var navigation = native_1.useNavigation();
    var handleDone = function () {
        navigation.navigate('Home');
        asyncStorage_1.setItem('onBoarded', '1');
    };
    var doneButton = require('../assets/onboard/done.png');
    //   const CustomDoneButton = ({ ...props }) => {
    //     return (
    //       <TouchableOpacity {...props}>
    //         <Image source={doneButton} style={styles.done}/>
    //       </TouchableOpacity>
    //     );
    //   };
    var onboardingbg = require('../assets/onboardingbg.png');
    return (react_1["default"].createElement(react_native_1.View, { style: styles.container },
        react_1["default"].createElement(react_native_1.StatusBar, { backgroundColor: "#F1FFF8", barStyle: 'dark-content', showHideTransition: 'fade' }),
        react_1["default"].createElement(react_native_onboarding_swiper_1["default"], { onDone: handleDone, onSkip: handleDone, 
            // DoneButtonComponent={CustomDoneButton}
            containerStyles: { paddingHorizontal: 15 }, bottomBarColor: '#017E5E', pages: [
                {
                    backgroundColor: '#F1FFF8',
                    image: (react_1["default"].createElement(react_native_1.View, null,
                        react_1["default"].createElement(lottie_react_native_1["default"], { style: styles.lottie, source: require('../animation/gettingstarted_animation.json'), autoPlay: true, loop: true }))),
                    title: 'Connect with the Community!',
                    subtitle: "Step into LocalVibe, where unity, friendships, and belonging flourish. Let's create a thriving community together!"
                },
                {
                    backgroundColor: '#F1FFF8',
                    image: (react_1["default"].createElement(react_native_1.View, null,
                        react_1["default"].createElement(lottie_react_native_1["default"], { style: styles.lottie, source: require('../animation/onboarding2nd.json'), autoPlay: true, loop: true }))),
                    title: 'Promote local commerce and discovery!',
                    subtitle: 'Explore local treasures, support businesses, and foster community with LocalVibe. Join the journey!'
                },
                {
                    backgroundColor: '#F1FFF8',
                    image: (react_1["default"].createElement(react_native_1.View, null,
                        react_1["default"].createElement(lottie_react_native_1["default"], { style: styles.lottie, source: require('../animation/onboarding3rd.json'), autoPlay: true, loop: true }))),
                    title: 'Proximity-Based Feeds!',
                    subtitle: 'Discover the magic of proximity with LocalVibe! Our Proximity-Based Feeds keep '
                },
                {
                    backgroundColor: '#F1FFF8',
                    image: (react_1["default"].createElement(react_native_1.View, null,
                        react_1["default"].createElement(lottie_react_native_1["default"], { style: styles.lottie, source: require('../animation/onboarding4th.json'), autoPlay: true, loop: true }))),
                    title: 'Event creation and participation!',
                    subtitle: 'Elevate your events with LocalVibe! Bring people together like never before.'
                },
                {
                    backgroundColor: '#F1FFF8',
                    image: (react_1["default"].createElement(react_native_1.View, null,
                        react_1["default"].createElement(lottie_react_native_1["default"], { style: styles.lottie, source: require('../animation/onboarding5th.json'), autoPlay: true, loop: true }))),
                    title: 'Express your appreciation for posts!',
                    subtitle: 'Effortlessly show support on LocalVibe! Express appreciation for posts you love.'
                },
            ] })));
}
exports["default"] = OnBoarding;
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    lottie: {
        width: width * 0.9,
        height: width
    },
    done: {
        position: 'relative',
        width: width * 0.9,
        height: width * 0.1
    }
});
