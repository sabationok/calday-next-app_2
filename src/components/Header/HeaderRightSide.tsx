import LinkIcon from "../atoms/LinkIcon";
import NavMenuMobile from "./NavMenuMobile/NavMenuMobile";
import styled from "styled-components";

const HeaderRightSide: React.FC = () => {
  return (
    <SignUpBox>
      <LinkIcon variant="outlinedSmall" />

      <NavMenuMobile />
    </SignUpBox>
  );
};

const SignUpBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 16px;
`;

export default HeaderRightSide;
