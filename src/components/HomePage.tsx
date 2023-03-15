import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Layout from "@/components/Layout";

import testData from "@/testData";

import SectionHero from "./SectionHero/SectionHero";
import SectionFeatures from "./SectionFeatures/SectionFeatures";
import SectionShedulingInfo from "./SectionShedulingInfo/SectionShedulingInfo";
import SectionDownloadApp from "./SectionDownloadApp/SectionDownloadApp";
// import SectionBuyNow from '../SectionBuyNow/SectionBuyNow';
import SectionFAQ from "./SectionFAQ/SectionFAQ";

const HomePage: React.FC = () => {
  const { shedulingSectionData } = testData;
  return (
    <Layout>
      <Header />
      <main>
        <SectionHero />

        <SectionFeatures />

        <SectionShedulingInfo {...shedulingSectionData} />

        <SectionDownloadApp />

        <SectionFAQ />

        {/* <SectionBuyNow /> */}
      </main>
      <Footer />
    </Layout>
  );
};

export default HomePage;
