import colors from "./colors";

export const palette = {
    primary: {
        main: colors.cyanPurpleBlue,
        // contrastText: colors.nightSkyBlack

    },
    secondary: {
        main: colors.bluePurpleAccent,
    },
    error: {
        main: colors.redError,
    },
    warning: {
        main: colors.orangeWarning,
    },
    info: {
        main: colors.blueInfo
    },
    success: {
        main: colors.greenSuccess
    },
    background: {
        default: colors.darkBluishBlack,
        section: colors.deepBlueGray,
        paper: colors.deepBlueGray2,
    },
    navbar: {
        main: colors.darkBluishBlack,
        transparent: colors.translucentBlackNavbar
    },
    text: {
        primary: colors.softWhite,
        secondary: colors.lightGray,
        disabled: colors.disabledGray
    },
    divider: colors.borderGray
};