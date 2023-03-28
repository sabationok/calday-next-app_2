import Layout from "@/components/Layout";

import SectionHero from "./SectionHero/SectionHero";
import SectionFeatures from "./SectionFeatures/SectionFeatures";
import SectionShedulingInfo from "./SectionShedulingInfo/SectionShedulingInfo";
import SectionDownloadApp from "./SectionDownloadApp/SectionDownloadApp";
import SectionFAQ from "./SectionFAQ/SectionFAQ";
import SectionBuyNow from "./SectionBuyNow/SectionBuyNow";

import testData from "@/testData";
import { BackgroundGradient } from "./atoms";

const HomePage: React.FC = () => {
  const { shedulingSectionData, faqSectionData, downloadAppSectionData } =
    testData;
  return (
    <Layout>
      <BackgroundGradient>
        <SectionHero />
      </BackgroundGradient>

      <SectionFeatures />

      <BackgroundGradient>
        <SectionShedulingInfo {...shedulingSectionData} />

        <SectionDownloadApp {...downloadAppSectionData} />
      </BackgroundGradient>

      <SectionFAQ {...faqSectionData} />

      <BackgroundGradient>
        <SectionBuyNow />
      </BackgroundGradient>
    </Layout>
  );
};

export default HomePage;
