import Layout from "@/components/Layout";

import SectionHero from "./SectionHero/SectionHero";
import SectionFeatures from "./SectionFeatures/SectionFeatures";
import SectionShedulingInfo from "./SectionShedulingInfo/SectionShedulingInfo";
import SectionDownloadApp from "./SectionDownloadApp/SectionDownloadApp";
import SectionFAQ from "./SectionFAQ/SectionFAQ";
// import SectionBuyNow from "./SectionBuyNow/SectionBuyNow";

import testData from "@/testData";

const HomePage: React.FC = () => {
  const { shedulingSectionData } = testData;
  return (
    <Layout>
      <SectionHero />

      <SectionFeatures />

      <SectionShedulingInfo {...shedulingSectionData} />

      <SectionDownloadApp />

      <SectionFAQ />

      {/* <SectionBuyNow /> */}
    </Layout>
  );
};

export default HomePage;
