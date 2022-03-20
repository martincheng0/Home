import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import PostCard from '../components/PostCard'

const BlogPage = ({ data }) => {
  const posts = data.hashnode.user.publication.posts

  return (
    <>
      <SEO title="About" description="something technical" image={posts[0].author.photo}/>
      <Layout>
        <div className="py-20">
          <section>
            {posts.map((node) => (
              <PostCard key={node._id} post={node} />
            ))}
          </section>
        </div>
      </Layout>
    </>
  )
}

export default BlogPage

export const pageQuery = graphql`
  query PostQuery {
    hashnode {
      user(username: "martincheng0") {
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
            author {
              name
              photo
            }
          }
        }
      }
    }
  }
`