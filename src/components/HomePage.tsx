import Layout from "@/components/Layout";

import SectionHero from "./SectionHero/SectionHero";
import SectionFeatures from "./SectionFeatures/SectionFeatures";
import SectionShedulingInfo from "./SectionShedulingInfo/SectionShedulingInfo";
import SectionDownloadApp from "./SectionDownloadApp/SectionDownloadApp";
import SectionFAQ from "./SectionFAQ/SectionFAQ";
import SectionBuyNow from "./SectionBuyNow/SectionBuyNow";

import testData from "@/testData";
import SG from "@/styles";

const HomePage: React.FC = () => {
  const { shedulingSectionData } = testData;
  return (
    <Layout>
      <SG.BackgroundGradient>
        <SectionHero />
      </SG.BackgroundGradient>

      <SectionFeatures />

      <SG.BackgroundGradient>
        <SectionShedulingInfo {...shedulingSectionData} />

        <SectionDownloadApp />
      </SG.BackgroundGradient>

      <SectionFAQ />

      <SG.BackgroundGradient>
        <SectionBuyNow />
      </SG.BackgroundGradient>
    </Layout>
  );
};

export default HomePage;
