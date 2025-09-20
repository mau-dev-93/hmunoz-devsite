import { useMemo } from "react";
import { NavbarScrollContext } from "./navbarScrollContext";
import { useNavbarScroll } from "./../../hooks/useNavbarScroll";

export const NavbarScrollProvider = ({ sections, offsetTop = 64, children }) => {
    const { activeSection, scrollToSection } = useNavbarScroll(sections, offsetTop);
    const value = useMemo(() => ({ activeSection, scrollToSection }), [activeSection, scrollToSection]);
    return (
        <NavbarScrollContext.Provider value={value}>
            {children}
        </NavbarScrollContext.Provider>
    );
}
