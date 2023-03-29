// import SvgIcons, { IconsMap } from "@/components/SvgIcon/SvgIcons";
import styled from "styled-components";
import Icon, { IconId } from "./Icon";

export type TransferItemType = {
  _id?: string;
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
    <StyledTransferItem>
      <TitleWrapper>
        <Title>{from}</Title>

        <ItemIcon id={IconId.transfer_arrows} color={fill} size="24px" />

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

const StyledTransferItem = styled.li`
  display: flex;
  flex-direction: column;

  padding: 30px 20px 20px;

  width: 100%;
  height: 335px;

  background: #feffdf;
  border-radius: 10px;
  @media screen and (min-width: 480px) {
    max-width: 335px;
  }
  @media screen and (min-width: 768px) {
    padding: 36px 30px 24px;
  }
`;
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
const ItemIcon = styled(Icon)<{ color?: string }>`
  color: ${({ color }) => color};
`;

export default TransferItem;
