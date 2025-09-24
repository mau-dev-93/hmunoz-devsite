import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { palette } from './palette';
import { typography } from './typography';
import { componentOverrides } from './overrides';

let theme = createTheme({
    palette,
    typography,
});

theme = responsiveFontSizes(theme, {
    factor: 2,
    breakpoints: ["xs", "sm", "md", "lg"],
    disableAlign: false
});

theme.components = {
    ...componentOverrides(theme),
};

export default theme;