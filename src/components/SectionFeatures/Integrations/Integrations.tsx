import IntegrationItem, { IntegrationItemProps } from "./IntegrationItem";
import styled from "styled-components";

export type IntegrationsProps = {
  title: string;
  subTitle: string;
  list: IntegrationItemProps[];
};

const Integrations: React.FC<IntegrationsProps> = ({
  title,
  subTitle,
  list,
}) => {
  return (
    <>
      <IntegrationsContainer>
        <StyledIntegrations>
          <IntegrationsTitle>{title}</IntegrationsTitle>

          <IntegrationsSubTitle>{subTitle}</IntegrationsSubTitle>

          <IntegrationsList>
            {list.map((item) => (
              <IntegrationItem key={item?._id} {...item} />
            ))}
          </IntegrationsList>
        </StyledIntegrations>
      </IntegrationsContainer>
    </>
  );
};

export const IntegrationsContainer = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;

    padding: 0 138px;
  }
`;

export const StyledIntegrations = styled.div`
  margin: 0 auto;

  min-height: 300px;
  width: 100%;
  max-width: 1164px;

  background-color: ${({ theme }) => theme.bageLight};
  border-radius: 20px;

  padding: 58px 58px 78px;
`;

export const IntegrationsTitle = styled.h3`
  font-weight: 600;
  font-size: 40px;
  line-height: 1.3;
  text-align: center;

  margin-bottom: 8px;

  color: ${({ theme }) => theme.brownPrime};
`;
export const IntegrationsSubTitle = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 1.89;
  text-align: center;

  margin-bottom: 63px;

  color: ${({ theme }) => theme.blackPrimary};
`;
export const IntegrationsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 62px;
  justify-content: space-between;
`;

export default Integrations;
