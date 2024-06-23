const path = require(`path`);

exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    query {
      hashnode {
        user(username: "martincheng0") {
          name
          profilePicture
          publications(first: 1) {
            edges {
              node {
                title
                posts(first: 10) {
                  edges {
                    node {
                      id
                      slug
                      title
                      publishedAt
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
  `);

  data.hashnode.user.publications.edges[0].node.posts.edges.forEach((node) => {
    actions.createPage({
      path: `/blog/${node.node.slug}/`,
      component: path.resolve(`./src/components/Post.js`),
      context: {
        id: node.node.id,
        slug: node.node.slug,
      },
    });
  });
};
