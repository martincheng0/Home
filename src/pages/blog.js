import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import PostCard from "../components/PostCard";

const BlogPage = ({ data }) => {
  const user = data.hashnode.user;

  return (
    <Layout>
      <div className="py-20">
        <section>
          {user.publications.edges[0].node.posts.edges.map((node) => (
            <PostCard key={node.node.id} post={node.node} />
          ))}
        </section>
      </div>
    </Layout>
  );
};

export const Head = ({ data }) => (
  <Seo
    title="Blog"
    description="something technical"
    image={data.hashnode.user.profilePicture}
  ></Seo>
);

export default BlogPage;

export const pageQuery = graphql`
  query pageQuery {
    hashnode {
      user(username: "martincheng0") {
        name
        profilePicture
        publications(first: 1) {
          edges {
            node {
              title
              displayTitle
              posts(first: 10) {
                edges {
                  node {
                    id
                    cuid
                    slug
                    title
                    __typename
                    views
                    publishedAt
                    brief
                    coverImage {
                      url
                    }
                    updatedAt
                    content {
                      markdown
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
