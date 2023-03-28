import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { TitleH2, SubTitle } from "../atoms";

export type SectionDownloadAppProps = {
  title: string;
  descr: string;
  heroImage: {
    imageURL: string | StaticImageData;
    alt: string;
  };
  downloadAppLinks: {
    imageURL: string | StaticImageData;
    alt: string;
    link: string;
  }[];
};

const SectionDownloadApp: React.FC<SectionDownloadAppProps> = ({
  heroImage,
  title,
  descr,
  downloadAppLinks,
}) => {
  return (
    <Section>
      <ImageSide>
        <Image src={heroImage.imageURL} alt={heroImage.alt} />
      </ImageSide>

      <TextSide>
        <TitleH2
          fontWeight={800}
          fontSize={52}
          margin="148px 0 32px"
          textAlign="start"
        >
          {title}
        </TitleH2>

        <SubTitle margin="0 0 40px" textAlign="start" lineHeight={1.89}>
          {descr}
        </SubTitle>

        <DownloadLinks>
          {downloadAppLinks.map(({ link, imageURL, alt }) => (
            <GetAppLink key={alt} href={link}>
              <Image src={imageURL} alt={alt} width={150} />
            </GetAppLink>
          ))}
        </DownloadLinks>
      </TextSide>
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: center;

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

  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 960px) {
    align-items: flex-start;
    min-width: 600px;
  }
`;

const DownloadLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

const GetAppLink = styled(Link)`
  width: 150px;
  min-width: 150px;
`;

export default SectionDownloadApp;
