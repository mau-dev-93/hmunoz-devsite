import { createTheme } from '@mui/material/styles';
import { palette } from './palette';
import { typography } from './typography';
import { componentOverrides } from './overrides';
// import colors from './colors';

const theme = createTheme({
  palette,
  typography,
  components: componentOverrides,
  // colors
});

export default theme;