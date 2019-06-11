const path = require('path')

module.exports.onCreateNode = ({node, actions}) => {
    const { createNodeField } = actions

    if(node.internal.type === 'MarkdownRemark') {
        const slug = path.basename(node.fileAbsolutePath, '.md')
        createNodeField({
            node,
            name: 'slug',
            value: slug
        })
    }
}

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const projectTemplate = path.resolve('./src/templates/project.js')
    const response = await graphql(`query{
        allMarkdownRemark {
            edges {
                node {
                    fields {
                        slug
                    }
                }
            }
        }
    }
    `)

    response.data.allMarkdownRemark.edges.forEach((edge) => {
        createPage({
            component: projectTemplate,
            path: `/projects/${edge.node.fields.slug}`,
            context: {
                slug: edge.node.fields.slug
            }
        })
    })
    // 1. Get path to Template
    // 2. Get markdown data
    // 3. Create new page
}