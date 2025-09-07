import { alpha } from "@mui/system";

export const MuiButton = {
    styleOverrides: {
        root: (/*{ theme }*/) => ({
            borderRadius: '6px',
            textTransform: 'none',
            // fontWeight: 700,
            // mejor espaciado para iconos
            '& .MuiButton-startIcon, & .MuiButton-endIcon': {
                // marginInline: theme.spacing(0.75),
            },
        }),
    },
    variants: [
        {
            props: { variant: 'outlined', color: 'input' },
            style: ({ theme }) => ({
                color: theme.palette.input.contrastText,
                border: `1px solid ${alpha(theme.palette.input.main, 1)}`,
                backgroundColor: alpha(theme.palette.input.main, 0.3),
                // paddingInline: theme.spacing(2.5),
                // paddingBlock: theme.spacing(1),
                '&:hover': {
                    borderColor: alpha(theme.palette.input.main, 1),
                    backgroundColor: alpha(theme.palette.input.main, 0.6),
                    // boxShadow: `0 0 0 6px ${alpha('#FFFFFF', 0.06)} inset`,
                },
                // '&.Mui-disabled': {
                //     color: alpha('#FFFFFF', 0.4),
                //     borderColor: alpha('#FFFFFF', 0.1),
                // },
            }),
        },
    ],
};