import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import ProjectCard from "../components/ProjectCard";
import "github-markdown-css/github-markdown-light.css";

const ProjectsPage = ({ data }) => {
  const projects = data.github.user.repositories.nodes;

  return (
    <Layout>
      <div className="py-20">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </div>
    </Layout>
  );
};

export const Head = () => (
  <SEO title="Projects" description="something showy"></SEO>
);

export default ProjectsPage;

export const pageQuery = graphql`
  query ProjectsQuery {
    github {
      user(login: "martincheng0") {
        repositories(first: 10, orderBy: { field: NAME, direction: ASC }) {
          nodes {
            id
            name
            url
            description
            isPrivate
          }
        }
      }
    }
  }
`;
