import { ThemeType } from "@/styles/theme";
import testData from "@/testData";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const SectionDownloadApp: React.FC = () => {
  const { downloadAppSectionData, globals } = testData;
  return (
    <Section>
      <ImageSide>
        <Image
          src={downloadAppSectionData.phoneImage.image}
          alt={downloadAppSectionData.phoneImage.alt}
        />
      </ImageSide>

      <TextSide>
        <Title>{downloadAppSectionData.title}</Title>

        <SubTitle>{downloadAppSectionData.descr}</SubTitle>

        <DownloadButtons>
          <GetAppLink href={globals.downloadApp.googleLink.link}></GetAppLink>

          <GetAppLink href={globals.downloadApp.appleLink.link}></GetAppLink>
        </DownloadButtons>
      </TextSide>
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: center;

  background: ${({ theme }: { theme: ThemeType }) => theme.backgroundGradient};

  @media screen and (max-width: 768px) {
    flex-wrap: wrap-reverse;
  }
`;

const ImageSide = styled.div`
  align-self: flex-end;
  max-width: 693px;
`;

const TextSide = styled.div`
  padding: 0 15px 150px 15px;

  @media screen and (min-width: 960px) {
    min-width: 600px;
  }
`;

const Title = styled.h3`
  font-weight: 800;
  font-size: 52px;
  line-height: 1;
  color: var(--brownPrimeClr);

  margin-top: calc(263px - 115px);
  margin-bottom: 32px;
`;

const SubTitle = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 1.89;
  color: var(--textBlackClr);

  max-width: 573px;

  margin-bottom: 40px;
`;

const DownloadButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

const GetAppLink = styled(Link)`
  display: grid;
  grid-template-columns: min-content 1fr;
  grid-template-columns: 1fr 1.2fr;
  gap: 4px;

  color: #fff;

  height: 44px;
  width: 150px;
  min-width: 150px;

  padding: 6px 10px;

  border-radius: 6px;
  background-color: #2b2f36;
  border: 1px solid #a6a6a6;
  &:hover {
    border-color: var(--actionOrangeClr);
  }
`;

export default SectionDownloadApp;
