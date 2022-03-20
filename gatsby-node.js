const path = require(`path`)

exports.createPages = async ({ actions, graphql }) => {
    const { data } = await graphql(`
        query {
            hashnode {
                user(username: "martincheng0") {
                    publication {
                        title
                        posts {
                            _id
                            title
                            slug
                            dateAdded
                            contentMarkdown
                            coverImage
                        }
                    }
                }
            }
        }
      
  `)

    data.hashnode.user.publication.posts.forEach(({ _id, slug }) => {
        actions.createPage({
            path: `/blog/${slug}/`,
            component: path.resolve(`./src/components/post.js`),
            context: {
                id: _id,
                slug: slug
            },
        })
    })
}