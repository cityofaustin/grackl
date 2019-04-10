const path = require(`path`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  let slug;

  if (node.internal.type === `Airtable`) {
    slug = `/projects/${node.data["Project_Name"]
      .replace(/ /g, "-")
      .replace(/[,&]/g, "")
      .toLowerCase()}/`;

    createNodeField({
      node,
      name: `slug`,
      value: slug
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise(async resolve => {
    const result = await graphql(`
      {
        allAirtable {
          edges {
            node {
              table
              data {
                Project_Name
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `);

    result.data.allAirtable.edges.forEach(({ node }) => {
      console.log(node);
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/project.js`),
        context: {
          name: node.data.Project_Name,
          path: node.fields.slug
        }
      });

      resolve();
    });
  });
};
