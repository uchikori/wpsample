import * as React from "react"
import { graphql } from "gatsby"
import { Seo } from "../components/seo";
import { Layout } from "../components/Layout";

export default function BlogPost(props){
  const { data } = props;
  console.log(data)

    return (
        <>
            <Seo />

            <Layout>

                <div className="main container">
                    <h1 className="blogTitle">{data.allWpPost.nodes.title}</h1>
                    <article className="blogContent">
                        {data.allWpPost.nodes.content}
                    </article>
                </div>

            </Layout>
        </>
    )
}

export const query = graphql`
  query($id: Int!) {
    allWpPost(filter: { databaseId: { eq: $id } }) {
      nodes {
        title
        content
        excerpt
      }
    }
  }
`