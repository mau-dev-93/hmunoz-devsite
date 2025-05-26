import styled from "styled-components";
import { Link as ScrollLink } from "react-scroll";

const NavbarLink = styled(ScrollLink)`
    cursor: pointer;
    color: ${({ theme }) => theme.colors.softWhite};
    margin: 0 1rem;
    font-weight: 600;
    text-decoration: none;
    transition: color 0.2s;
    &:hover {
        color: ${({ theme }) => theme.colors.cyanPurpleBlue};
    }
`;

export default NavbarLink;