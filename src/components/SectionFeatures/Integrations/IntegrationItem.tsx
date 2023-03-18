import { ThemeType } from "@/styles/theme";
import Image, { StaticImageData } from "next/image";
import styled from "styled-components";

export type IntegrationItemProps = {
  icon: string | StaticImageData;
  alt: string;
  descr?: string;
};

const IntegrationItem: React.FC<IntegrationItemProps> = ({
  icon,
  alt,
  descr,
}) => {
  return (
    <StyledIntegrationItem>
      <IntegrationItemImgBox>
        <Image src={icon} alt={alt} width={76} />
      </IntegrationItemImgBox>

      <IntegrationItemDescr>{descr}</IntegrationItemDescr>
    </StyledIntegrationItem>
  );
};

export const StyledIntegrationItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 21px;

  /* max-width: 215px; */

  flex-basis: 180px;
  flex-grow: 1;
`;

export const IntegrationItemImgBox = styled.div`
  width: 76px;
  height: 76px;
`;
export const IntegrationItemDescr = styled.span`
  font-family: "Mark Pro", sans-serif;
  font-weight: 450;
  font-size: 15px;
  line-height: 1.73;
  text-align: center;

  color: ${({ theme }: { theme: ThemeType }) => theme.graySecondary};
`;

export default IntegrationItem;
