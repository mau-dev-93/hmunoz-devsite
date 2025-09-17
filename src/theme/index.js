import { createTheme } from '@mui/material/styles';
import { palette } from './palette';
import { typography } from './typography';
import { componentOverrides } from './overrides';

const theme = createTheme({
    palette,
    typography,
});

theme.components = {
    ...componentOverrides(theme),
};

export default theme;