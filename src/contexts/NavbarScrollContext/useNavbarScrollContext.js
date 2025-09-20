import { useContext } from "react";
import { NavbarScrollContext } from "./navbarScrollContext";

export const useNavbarScrollContext = () => {
    const context = useContext(NavbarScrollContext);
    if (!context) throw new Error("useNavbarScrollContext debe usarse dentro de <NavbarScrollProvider>");
    return context;
}
