import SG from "@/styles";
import { ProfitItemProps } from "../atoms/ProfitItem";
import ProfitItem from "../atoms/ProfitItem";
import styled from "styled-components";

export type ProfitsProps = {
  profitsList: ProfitItemProps[];
};

const ProfitsList: React.FC<ProfitsProps> = ({ profitsList }) => {
  return (
    <Profits>
      <ListBackground>
        <SG.Container>
          <List>
            {profitsList.map((item) => (
              <ProfitItem key={item.id} {...item} />
            ))}
          </List>
        </SG.Container>
      </ListBackground>
    </Profits>
  );
};

const ListBackground = styled.div`
  padding-top: 148px;
  padding-bottom: 54px;

  min-width: 100%;
  min-height: 461px;

  background-color: ${({ theme }) => theme.bagePrimary};
`;

const Profits = styled.div`
  width: 100%;
`;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 51px;
`;

export default ProfitsList;
