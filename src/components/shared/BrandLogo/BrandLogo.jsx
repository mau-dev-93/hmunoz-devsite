import { Box } from "@mui/material";
import { BRANDS_LOGOS, BRANDS_NAMES } from "../../../constants/brands";

const BrandLogo = ({
    brandId,
    size = 44,
    mode = 'dark',
}) => {
    const brandLogo = BRANDS_LOGOS[brandId]?.[mode];
    const brandName = BRANDS_NAMES[brandId];

    return (
        <Box
            component="img"
            src={brandLogo}
            alt={brandName}
            loading="lazy"
            sx={{
                height: size,
                objectFit: "contain",
                // filter: invert ? "invert(1) grayscale(1)" : "none",
            }}
        />
    );
}

export default BrandLogo;