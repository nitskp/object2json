import { Link } from "react-router-dom";
import styled from "styled-components";

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 20px 30px;
  align-items: center;
`;
const BrandContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const NavLinks = styled.div`
  display: flex;
  align-items: center;
`;

const BrandSubtext = styled.span`
  font-size: 16px;
  color: gray;
`;
type LinkButtonProps = {
  color: string;
  bgcolor: string;
};

const LinkButton = styled(Link)<LinkButtonProps>`
  color: ${({ color }) => color};
  background: ${({ bgcolor }) => bgcolor};
  text-decoration: none;
  border: 1px solid;
  border-color: ${({ bgcolor }) => bgcolor};
  border-radius: 4px;
  font-size: 14px;
  margin: 0 5px;
  padding: 5px 8px;
`;

export { BrandContainer, NavbarContainer, BrandSubtext, NavLinks, LinkButton };
