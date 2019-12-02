import { StyleSheet } from "react-native"
import Constants from "expo-constants";
import fonts from "./fonts";
import colors from "./colors";
import sizes from "./sizes";

export default StyleSheet.create({
    
    /* View */

    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
        // marginHorizontal: sizes.xs,
    },

    title: {
        textAlign: "center",
        marginVertical: sizes.xxs,
        fontFamily: fonts.ubuntuLight,
        fontSize: 22,
    },

    fixToText: {
        flexDirection: "row",
        justifyContent: "space-between",
    },

    separator: {
        marginVertical: sizes.xxs,
        borderBottomColor: colors.primary,
        borderBottomWidth: StyleSheet.hairlineWidth,
    },

    flexContainerNoGutter: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: Constants.statusBarHeight,
        resizeMode: "cover",
    },

    flexContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: Constants.statusBarHeight,
        marginHorizontal: sizes.xs,
        resizeMode: "cover"
    },

    /* Intro */

    introTop: {
        marginTop: sizes.nNormal,
        marginBottom: sizes.lg,
        marginHorizontal: sizes.sm,
        alignSelf: "stretch",
        textAlign: "center",
    },

    introTopIcon: {
        width: sizes.lg, 
        height: sizes.lg,
    },

    introTitle: {
        textAlign: "center",
        marginVertical: sizes.xxs,
        marginHorizontal: sizes.sm,
        fontFamily: fonts.ubuntuBold,
        fontSize: 24,
        color: colors.hardBlue,
    },

    introSubTitle: {
        textAlign: "center",
        marginVertical: sizes.xxs,
        marginHorizontal: sizes.sm,
        fontFamily: fonts.ubuntuLight,
        fontSize: 16,
        color: colors.hardBlue,
        lineHeight: sizes.lhCopy,
    },

    introIcon: {
        width: 266, 
        height: 214,
        marginVertical: sizes.sm,
    },

    introButton: {
        marginTop: sizes.xs,
    },

    introButtonImage: {
        width: 236, 
        height: 84,
    },

    /* Button */

    button: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.hardBlue,
        borderRadius: sizes.bdr50,
        width: 200,
        height: sizes.lg,
        marginTop: sizes.xs,
    },

    buttonText: {
        fontFamily: fonts.ubuntuBold,
        fontSize: 16,
        color: colors.white,
    },

    /* Bottom Bar */

    bottomBar: {
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
        bottom: 0,
        left: 0,
        right: 0,
        height: 80,
        backgroundColor: colors.white,
        borderTopColor: colors.strokeGray,
        borderTopWidth: StyleSheet.hairlineWidth,
    },

    bottomBarHomeButton: {
        width: sizes.normal, 
        height: sizes.normal,
    },

    bottomBarAlertButton: {
        position: "absolute",
        right: sizes.normal,
        width: sizes.normal, 
        height: sizes.normal,
    },

    /* Home */

    homeSindLogoIcon: {
        width: 112, 
        height: 112,
    },

    homeMenu: {
        alignSelf: "stretch",
        marginTop: 96,
    },

    homeMenuButtons: {
        backgroundColor: colors.white,
        borderBottomColor: colors.strokeGray,
        borderBottomWidth: StyleSheet.hairlineWidth,
    },

    homeMenuButtonsLast: {
        backgroundColor: colors.white,
    },

    homeMenuButtonsText: {
        marginVertical: sizes.xs,
        fontFamily: fonts.ubuntuRegular,
        fontSize: 22,
        color: colors.secondary,
        textAlign: "center",
    },

});
