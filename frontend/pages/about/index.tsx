import React from "react";
import Layout from "@/components/layout";
import Seo from "@/components/seo";

const About = ({ global }) => {
  return (
    <Layout global={global}>
      <Seo seo={global?.attributes?.seo} />
      <div>
        About
      </div>
    </Layout>
  );
};

export default About;