import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
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
  <Seo title="Projects" description="something showy"></Seo>
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
