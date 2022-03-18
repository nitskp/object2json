import Brand from "../Brand/Brand";
import {
  BrandContainer,
  BrandSubtext,
  LinkButton,
  NavbarContainer,
  NavLinks,
} from "./Navbar.styled";
import { BsGithub } from "react-icons/bs";
import {FaDonate} from "react-icons/fa"
import { Link } from "react-router-dom";

const Navbar = () => {
  // need to have an image for the brandName
  const brandName = "Object String 2 json";
  const brandSubText = "Convert your language object to string";
  return (
    <>
      <NavbarContainer>
        <BrandContainer>
          <Brand brandName={brandName} />
          <BrandSubtext>{brandSubText}</BrandSubtext>
        </BrandContainer>
        <NavLinks>
          <Link to={"/"}>
            <BsGithub />
          </Link>
          <LinkButton to={"/"} color={"white"} bgcolor={"black"}>
            {"About Us"}
          </LinkButton>
          <LinkButton to={"/"} color={"white"} bgcolor={"green"}>
              {/* need icon for donate  */}
              <FaDonate />
            {"Donate"}
          </LinkButton>
        </NavLinks>
      </NavbarContainer>
    </>
  );
};

export default Navbar;
