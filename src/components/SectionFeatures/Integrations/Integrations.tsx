import testData from "@/testData";
// import Image from "next/image";
import IntegrationItem from "./IntegrationItem";
import styled from "styled-components";
import { ThemeType } from "@/styles/theme";

const { integrations } = testData.featuresSectionData;

const Integrations: React.FC = () => {
  return (
    <>
      <IntegrationsContainer>
        <StyledIntegrations>
          <IntegrationsTitle>
            <>{testData.featuresSectionData.integrations.title}</>
          </IntegrationsTitle>

          <IntegrationsSubTitle>
            <>{testData.featuresSectionData.integrations.subTitle}</>
          </IntegrationsSubTitle>

          <IntegrationsList>
            {integrations.integrationsList.map((item) => (
              <IntegrationItem key={item.id} {...item} />
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

  background-color: ${({ theme }: { theme: ThemeType }) => theme.bageLight};
  border-radius: 20px;

  padding: 58px 58px 78px;
`;

export const IntegrationsTitle = styled.h3`
  font-weight: 600;
  font-size: 40px;
  line-height: 1.3;
  text-align: center;

  margin-bottom: 8px;

  color: ${({ theme }: { theme: ThemeType }) => theme.brownPrime};
`;
export const IntegrationsSubTitle = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 1.89;
  text-align: center;

  margin-bottom: 63px;

  color: ${({ theme }: { theme: ThemeType }) => theme.blackPrimary};
`;
export const IntegrationsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 62px;
  justify-content: space-between;
`;

export default Integrations;
