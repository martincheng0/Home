import * as React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

const IndexPage = () => {
  return (
    <Layout>
      <div className="grid content-center h-screen">
        <svg
          className="mx-auto my-4 fill-white bg-cyan-500 rounded-full w-40 h-40"
          viewBox="-180 -200 900 900"
          preserveAspectRatio="xMidYMid meet"
        >
          <path d="M442.62,1.51,534,465.24H484.14l-60-326.4L267.61,450.55,111.75,138.84,50.43,465.24H.61L93.23,2.78,267.61,342Z" />
        </svg>
        <h1 className="text-7xl font-black mx-auto p-5 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-500">
          Hello there 
        </h1>
      </div>
    </Layout>
  );
};

export const Head = () => (
  <Seo title="Home" description="something feels like home"></Seo>
);

export default IndexPage;

