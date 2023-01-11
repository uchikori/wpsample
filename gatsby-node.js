const path = require(`path`)

exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions

    const blogResult = await graphql(`
    query {
      allWpPost(sort: { date:DESC }) {
        nodes {
            content
            title
            databaseId
            excerpt
        }
      }
    }
    `
    )
    if (blogResult.errors) {
        reporter.panicOnBuild(`GraphQLのクエリでエラーが発生しました`)
        return
    }

    //記事ページの生成
    blogResult.data.allWpPost.nodes.forEach((node) => {
        createPage({
            path: `/blog/post/${node.databaseId}`,
            component: path.resolve(`./src/templates/blogpost-template.jsx`),
            context: {
                id: node.databaseId,
            }
        })
    })
}