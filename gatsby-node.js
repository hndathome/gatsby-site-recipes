const path = require("path")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const RecipeTemplate = path.resolve(`src/templates/RecipeTemplate.js`)

  return graphql(`
        {
            allContentfulRecipes {
                nodes {
                  name
                  image {
                    file {
                      url
                    }
                  }
                  richDescription {
                    json
                  }
                }
              }
        }
    `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.allContentfulRecipes.nodes.forEach((node) => {
      createPage({
        path: node.name,
        component: RecipeTemplate,
        context: {
          slug: node.name
        }, // additional data can be passed via context
      })
    })
  })
    .catch(error => {
      console.log("Error retrieving contentful data", error);
    });
}