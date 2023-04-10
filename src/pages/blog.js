import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import PostCard from "../components/PostCard";

const BlogPage = ({ data }) => {
  const user = data.hashnode.user;

  return (
    <Layout>
      <div className="py-20">
        <section>
          {user.publication.posts.map((node) => (
            <PostCard key={node._id} post={node} />
          ))}
        </section>
      </div>
    </Layout>
  );
};

export const Head = ({ data }) => (
  <SEO
    title="Blog"
    description="something technical"
    image={data.hashnode.user.photo}
  ></SEO>
);

export default BlogPage;

export const pageQuery = graphql`
  query PostQuery {
    hashnode {
      user(username: "martincheng0") {
        name
        photo
        publication {
          posts {
            _id
            cuid
            slug
            title
            type
            popularity
            isActive
            dateAdded
            brief
            coverImage
            dateUpdated
            contentMarkdown
          }
        }
      }
    }
  }
`;
