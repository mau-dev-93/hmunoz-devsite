import { alpha } from "@mui/system";
import { resolveColor2 } from "../../utils/paletteUtils";

export const CardOverrides = (theme) => {
    const color = resolveColor2(theme, "background.paper");

    return {
        MuiCard: {
            variants: [
                {
                    props: { variant: "sharp" },
                    style: {
                        borderRadius: '0px !important',
                        border: "none",
                        borderColor: "divider",
                        boxShadow: "none",
                        backgroundColor: `${alpha(color, 0.7)} !important`,
                    },
                },
            ],
        }
    }
};