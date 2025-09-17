export const resolveMain = (theme, color) => {
    const maybe = theme.palette?.[color]?.main;
    return maybe || color;
}

export const resolveContrast = (theme, color) => {
    const maybe = theme.palette?.[color]?.contrastText;
    return maybe || "#ffffff";
};

export const resolveGradient = (theme, color) => {
    const maybe = theme.palette?.[color]?.gradient;
    return maybe || color;
};

export const resolveColor = (theme, color, prop) => {
    const maybe = theme.palette?.[color]?.[prop];
    return maybe || color;
};

export const resolveColor2 = (theme, color) => {
    const keys = color.split('.');
    const value = keys.reduce((acc, key) => acc?.[key], theme.palette);
    return value || color;
};