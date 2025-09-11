import { colors } from "./colors";

export const palette = {
    primary: {
        main: colors.bluePrimary,
        contrastText: '#ffffff',
        gradient: "#4facfe"
    },
    secondary: {
        main: colors.orangeAccent,
        contrastText: '#0f0f0f',
        gradient: "#f7971e"
    },
    background: {
        default: colors.darkBlack,
        paper: colors.softBlack,
        section: colors.lightBlack30,
        paper20: colors.lightBlack20,
        paper50: colors.lightBlack50
    },
    navbar: {
        background: colors.navbarBack,
        border: colors.borderGray,
        contrastText: colors.whiteGray,
    },
    success: {
        main: colors.successGreen
    },
    error: {
        main: colors.errorRed
    },
    warning: {
        main: colors.warningYellow
    },
    info: {
        main: colors.infoSky
    },
    text: {
        primary: colors.whiteCream,
        secondary: colors.slateGray,
        disabled: colors.inputGray,
    },
    input: {
        main: colors.inputGray,
        contrastText: colors.foreground,
        border: colors.borderGray,
    },
    black: {
        main: colors.darkBlack,
        contrastText: colors.foreground,
    },
    progress: {
        background: colors.inputGray
    },
    divider: colors.borderGray
};