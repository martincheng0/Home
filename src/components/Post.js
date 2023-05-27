import React from "react";
import { graphql } from "gatsby";
import Layout from "./Layout";
import SEO from "./SEO";
import ReactMarkdown from "react-markdown";
// import "github-markdown-css/github-markdown-light.css";

const Post = ({ data }) => {
  const post = data.hashnode.post;

  return (
    <Layout>
      <div className="py-20">
        <article>
          {post.coverImage ? (
            <figure className="max-w-4xl mx-auto">
              <img
                src={post.coverImage}
                alt={post.title}
                className=" rounded-xl"
              />
            </figure>
          ) : null}
          <section>
            <h1 className="text-4xl my-8 font-bold text-center">
              {post.title}
            </h1>

            <div>
              <ReactMarkdown
                children={post.contentMarkdown}
                className="text-lg max-w-md md:max-w-4xl mx-auto m-4"
                components={{
                  p: ({ node, ...props }) => <p className="mb-4" {...props} />,
                  code: ({ node, ...props }) => (
                    <span className="p-1 rounded-md bg-gray-200" {...props} />
                  ),
                  a: ({ node, ...props }) => (
                    <a className="underline" {...props} />
                  ),
                }}
              ></ReactMarkdown>
            </div>
          </section>
        </article>
      </div>
      <div className="flex my-14">
        <a href={"https://" + post.author.publicationDomain}>
          <div>
            <img
              className="shrink-0 w-20 h-20 rounded-full"
              src={post.author.photo}
              alt={post.author.name}
            />
          </div>
        </a>
        <div className="ml-3 rtl:ml-0 rtl:mr-3 self-center">
          <p className="text-md font-medium text-black ">{post.author.name}</p>
          <p className="text-md font-medium text-black ">
            {post.author.tagline}
          </p>
          <p className="text-md font-medium text-slate-500 ">
            {post.dateAdded.split("T")[0]}
          </p>
        </div>
      </div>
    </Layout>
  );
};

export const Head = ({ data }) => (
  <SEO
    title="Blog Post"
    description="something more technical"
    image={data.hashnode.post.coverImage}
  ></SEO>
);

export default Post;

export const postQuery = graphql`
  query ($slug: String!) {
    hashnode {
      post(hostname: "https://blog.martincheng0.com", slug: $slug) {
        title
        slug
        dateAdded
        contentMarkdown
        coverImage
        author {
          name
          tagline
          photo
          publicationDomain
        }
      }
    }
  }
`;
