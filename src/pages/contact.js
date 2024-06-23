import * as React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

const ContactPage = () => {
  return (
    <Layout>
      <div className="py-20 grid content-center gap-10 h-screen justify-self-center md:px-36">
        <form name="contact" method="POST" data-netlify="true">
          <div className="grid grid-cols-1 gap-6">
            <label className="block">
              <span className="text-black font-mono">Your Name</span>
              <input
                type="text"
                name="name"
                className="mt-1 block w-full h-10 rounded-md border border-black p-4"
                placeholder="martin"
              />
            </label>
            <label className="block">
              <span className="text-black font-mono">Your Email Address</span>
              <input
                type="text"
                name="email"
                className="mt-1 block w-full h-10 rounded-md border border-black p-4"
                placeholder="martin@mail.com"
              />
            </label>
            <label className="block">
              <span className="text-black font-mono">What?</span>
              <textarea
                type="text"
                name="comment"
                className="mt-1 block w-full h-full rounded-md border border-black p-4"
                placeholder="nice one"
                row="5"
              />
            </label>
            <button type="submit" className="bg-black rounded-md h-10 my-5">
              <span className="text-white font-mono font-bold">Submit</span>
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export const Head = () => (
  <Seo title="Contact" description="something friendly"></Seo>
);

export default ContactPage;
