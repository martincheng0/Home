import * as React from "react"
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import ProjectCard from '../components/ProjectCard'
import 'github-markdown-css/github-markdown-light.css'

const ProjectsPage = ({ data }) => {
  const projects = data.github.user.repositories.nodes

  return (
    <>
      <SEO title="Home" description="something showy" />
      <Layout>
        <div className="py-20">
          {projects.map((project) => (
            <ProjectCard project={project} />
          ))}
        </div>
      </Layout>
    </>
  )
}

export default ProjectsPage

export const pageQuery = graphql`
query ProjectsQuery {
  github {
    user(login: "martincheng0") {
      repositories(first: 10, orderBy: {field: NAME, direction: ASC}) {
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
`