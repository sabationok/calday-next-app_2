// import SvgIcons, { IconsMap } from "@/components/SvgIcon/SvgIcons";
import styled from "styled-components";

export type TransferItemType = {
  from: string;
  to: string;
  fill: string;
  descrList: string[];
};

const TransferItem: React.FC<TransferItemType> = ({
  from,
  to,
  fill,
  descrList,
}) => {
  return (
    <StyledTransferItem fill={fill}>
      <TitleWrapper>
        <Title>{from}</Title>

        {/* <SvgIcons icon={IconsMap.muiTransferArrows} /> */}

        <Title>{to}</Title>
      </TitleWrapper>

      <DescrList>
        {descrList.map((item, idx) => (
          <DescrListItem key={idx}>{item}</DescrListItem>
        ))}
      </DescrList>
    </StyledTransferItem>
  );
};

const StyledTransferItem = styled.li<{ fill: string }>`
  display: flex;
  flex-direction: column;

  fill: ${({ fill }) => fill};

  padding: 30px 20px 20px;

  width: 100%;
  height: 335px;

  /* flex-basis: 230px;
flex-grow: 1; */

  background: #feffdf;
  border-radius: 10px;
  @media screen and (min-width: 480px) {
    max-width: 335px;
  }
  @media screen and (min-width: 768px) {
    padding: 36px 30px 24px;
  }
`;
// const TransferWrapper = styled.div`
//   display: flex;
//   align-items: center;
// `;
const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  margin-bottom: 28px;
`;
const Title = styled.p`
  font-weight: 700;
  font-size: 24px;
  line-height: 1.08;
  color: var(--blackPrimary);
`;
const DescrList = styled.ul`
  display: flex;
  flex-direction: column;

  list-style: disc;

  padding-left: 20px;
`;
const DescrListItem = styled.li`
  font-weight: 450;
  font-size: 16px;
  line-height: 2;
`;

export default TransferItem;
