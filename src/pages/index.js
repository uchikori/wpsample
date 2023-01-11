import * as React from "react"
import { graphql } from "gatsby"
import { Seo } from "../components/seo";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import { Layout } from "../components/Layout";

export default function Home(props) {
  const { data } = props;
  console.log(data);

  return (
    <>
      <Seo />
      
      <Layout>

        <div className="main container">
            <ul className="blogList">
              {data.allWpPost.edges.map(({ node }) => {
                return (
                  <li key={node.databaseId} className="blogItem">
                    {node.featuredImage ?
                      (<GatsbyImage image={node.featuredImage.node.localFile.childImageSharp.gatsbyImageData} alt={node.featuredImage.node.altText ? node.featuredImage.node.altText : ""} as={`figure`} style={{ aspectRatio: "25/14" }} className="blogItem__thumbnail" />)
                      :
                      (<StaticImage src={`../images/dummy.jpg`} alt="" as={`figure`} style={{ aspectRatio: "25/14" }} className="blogItem__thumbnail" />)
                    }
                    <h2 className="blogTitle">{node.title}</h2>
                    <p className="blogExcerpt" dangerouslySetInnerHTML={{ __html: node.excerpt }}></p>
                  </li>
                )
              })}
            </ul>
          </div>

      </Layout>
    </>
    
  )
}

export const query = graphql`
  query {
    allWpPost(sort: {date: DESC}) {
      edges {
        node {
          databaseId
          title
          excerpt
          featuredImage {
            node {
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    quality: 100
                    placeholder: BLURRED
                    layout: CONSTRAINED
                    transformOptions: { cropFocus: CENTER }
                    width: 500
                    height: 280
                  )
                }
              }
            }
          }
        }
      }
    }
  }
`