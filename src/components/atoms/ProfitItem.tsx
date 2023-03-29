import Image, { StaticImageData } from "next/image";
import styled from "styled-components";

export type ProfitItemProps = {
  id?: string;
  icon: string | StaticImageData;
  alt: string;
  title?: string;
  descr?: string;
};
const ProfitItem: React.FC<ProfitItemProps> = ({ icon, alt, title, descr }) => {
  return (
    <StyledProfitItem>
      <ProfitItemImg>
        <Image src={icon} alt={alt} />
      </ProfitItemImg>

      <ProfitItemTitle>{title}</ProfitItemTitle>

      <ProfitItemDescr>{descr}</ProfitItemDescr>
    </StyledProfitItem>
  );
};

const StyledProfitItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 265px;
`;

const ProfitItemImg = styled.div`
  margin-bottom: 28px;
`;

const ProfitItemTitle = styled.p`
  font-weight: 800;
  font-size: 26px;
  line-height: 1;

  color: var(--blackPrimary);

  margin-bottom: 16px;
`;

const ProfitItemDescr = styled.span`
  font-weight: 450;
  font-size: 15px;
  line-height: 1.73;
`;

export default ProfitItem;
