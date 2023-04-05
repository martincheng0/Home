import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import ReactMarkdown from "react-markdown";
import "github-markdown-css/github-markdown-light.css";

const AboutPage = ({ data }) => {
  const user = data.github.user;
  const repo = data.github.repository;
  return (
    <Layout>
      <div className="py-20 grid content-center gap-10 h-screen">
        <div className="justify-self-center text-center">
          <a href={user.url}>
            <img
              src={user.avatarUrl}
              alt="user avatar"
              className="h-20 w-20 rounded-full mx-auto"
            ></img>
          </a>
          <p className="text-lg p-3 font-bold font-mono">@{user.login}</p>
          <div className="text-sm p-3">
            <span>
              {user.status.emojiHTML.match(
                /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/g
              )}
            </span>
            <span>{user.status.message}</span>
          </div>
        </div>
        <div className="border rounded-xl border-black w-9/12 mx-auto px-4 pt-1 pb-4 max-w-md md:max-w-4xl">
          <a href={repo.url}>
            <p className="py-3 font-mono">{repo.object.entries[0].name}</p>
          </a>
          <ReactMarkdown>{repo.object.entries[0].object.text}</ReactMarkdown>
        </div>
      </div>
    </Layout>
  );
};

export const Head = ({ data }) => (
  <SEO
    title="About"
    description="something personal"
    image={data.github.user.avatarUrl}
  ></SEO>
);

export default AboutPage;

export const pageQuery = graphql`
  query AboutQuery {
    github {
      user(login: "martincheng0") {
        avatarUrl
        login
        url
        status {
          emojiHTML
          message
        }
      }
      repository(owner: "martincheng0", name: "martincheng0") {
        object(expression: "HEAD:") {
          ... on GitHub_Tree {
            id
            entries {
              name
              type
              object {
                ... on GitHub_Blob {
                  id
                  text
                }
              }
            }
          }
        }
        url
      }
    }
  }
`;
