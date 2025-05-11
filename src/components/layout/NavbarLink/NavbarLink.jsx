import styled from "styled-components";
import { Link as ScrollLink } from "react-scroll";

const NavbarLink = styled(ScrollLink)`
    cursor: pointer;
    // color: ${({ theme }) => theme.palette.text.primary};
    margin: 0 1rem;
    // font-weight: 500;
    text-decoration: none;
    transition: color 0.2s;
    // &:hover {
    //     color: ${({ theme }) => theme.palette.primary.main};
    // }
`;

export default NavbarLink;