import { MuiButton } from './button';
import { CardOverrides } from './card';
import { MuiIconButton } from './iconbutton';

export const componentOverrides = (theme) => ({
    MuiButton,
    MuiIconButton,
    ...CardOverrides(theme)
});