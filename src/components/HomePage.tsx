import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Layout from "@/components/Layout";

import SectionHero from "./SectionHero/SectionHero";
// import SectionBuyNow from '../SectionBuyNow/SectionBuyNow';
// import SectionDownloadApp from '../SectionDownloadApp/SectionDownloadApp';
// import SectionFAQ from '../SectionFAQ/SectionFAQ';
// import SectionFeatures from '../SectionFeatures/SectionFeatures';
// import SectionShedulingInfo from '../SectionShedulingInfo/SectionShedulingInfo';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <Header />
      <main>
        <SectionHero />
        {/* <SectionFeatures /> */}
        {/* <SectionShedulingInfo /> */}
        {/* <SectionDownloadApp /> */}
        {/* <SectionByCustomers /> */}
        {/* <SectionFAQ /> */}
        {/* <SectionBuyNow /> */}
      </main>
      <Footer />
    </Layout>
  );
};

export default HomePage;
