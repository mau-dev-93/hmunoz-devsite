import { createTheme } from '@mui/material/styles';
import { palette } from './palette';
import { typography } from './typography';
import { componentOverrides } from './overrides';

const theme = createTheme({
  palette,
  typography,
  components: componentOverrides,
});

export default theme;