import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { TitleH2, SubTitle, Container } from "../atoms";
import PhoneImage, { DownloadSectionImgProps } from "./PhoneImage";

export type SectionDownloadAppProps = {
  title: string;
  descr: string;
  downloadAppLinks: {
    imageURL: string | StaticImageData;
    alt: string;
    link: string;
  }[];
};

const SectionDownloadApp: React.FC<
  SectionDownloadAppProps & DownloadSectionImgProps
> = ({ title, descr, downloadAppLinks, ...props }) => {
  return (
    <Container>
      <Section>
        <ImageSide>
          <PhoneImage {...props} />
        </ImageSide>

        <TextSide>
          <StTitleH2
            fontWeight={800}
            fontSize={52}
            margin="0 0 32px"
            textAlign="start"
          >
            {title}
          </StTitleH2>

          <StSubTitle margin="0 0 40px" textAlign="start" lineHeight={1.89}>
            {descr}
          </StSubTitle>

          <DownloadLinks>
            {downloadAppLinks.map(({ link, imageURL, alt }) => (
              <GetAppLink key={alt} href={link}>
                <Image src={imageURL} alt={alt} />
              </GetAppLink>
            ))}
          </DownloadLinks>
        </TextSide>
      </Section>
    </Container>
  );
};

const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;

  overflow: hidden;

  @media screen and (min-width: 960px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const ImageSide = styled.div`
  align-self: flex-end;

  padding-top: 40px;
  padding: 40px 50px 0 50px;

  /* min-width: 700px; */

  max-width: 750px;
  width: 100%;
  max-height: 630px;
  /* overflow: hidden; */
  @media screen and (min-width: 960px) {
    min-width: 650px;
  }
`;

const TextSide = styled.div`
  padding: 148px 15px 150px 15px;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 960px) {
    align-items: flex-start;
    /* min-width: 600px; */
  }
`;

const DownloadLinks = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;
`;

const StTitleH2 = styled(TitleH2)`
  font-size: 36px;
  text-align: center;
  @media screen and (min-width: 960px) {
    font-size: 52px;
    text-align: start;
  }
`;
const StSubTitle = styled(SubTitle)`
  text-align: center;
  @media screen and (min-width: 960px) {
    text-align: start;
  }
`;
const GetAppLink = styled(Link)`
  width: 150px;
  min-width: 150px;
`;

export default SectionDownloadApp;
