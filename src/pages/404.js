import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

const NotFoundPage = () => {
  return (
    <Layout>
      <main>
        <div className="text-center">
          <h1 className="text-9xl font-extrabold py-44 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-500">
            404
          </h1>
          <Link
            to="/"
            className="px-4 py-3 rounded-md text-sm font-medium bg-gray-700 text-white hover:bg-gray-900"
          >
            Go Back Home
          </Link>
        </div>
      </main>
    </Layout>
  );
};

export const Head = () => (
  <Seo title="404 Not Found" description="something forgotten"></Seo>
);

export default NotFoundPage;
