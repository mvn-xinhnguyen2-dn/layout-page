import type { ReactElement } from "react";
import {
  Banner,
  MainDemo,
  Services,
  Reason,
  Contact,
} from "../components/featureHome";
import Layout from "../components/layout";

const Home = () => {
  return (
    <>
      <main className="page-main">
        <Banner />
        <MainDemo />
        <Services />
        <Reason />
        <Contact />
      </main>
    </>
  );
};
Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
export default Home;
