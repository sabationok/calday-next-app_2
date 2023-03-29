import images from "@/img";
import Image from "next/image";
import styled from "styled-components";

const Logo: React.FC = () => {
  return (
    <LogoBox>
      <Image src={images.CaldayLogo} alt={"logo"} />
    </LogoBox>
  );
};

const LogoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  width: 96px;
`;

export default Logo;
