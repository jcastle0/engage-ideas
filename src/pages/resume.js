import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

/* Trying to figure out how to iterate over array value in JSON file
Maybe this will help: https://stackoverflow.com/questions/49299309/gatsbyjs-getting-data-from-restful-api
 */

export default ({data}) => {
  const d = data.allResumeJson.edges;
  return (
    <Layout>
      <h1>test</h1>
      {d.map(({ node }) =>
        <h1 key={node.Name}>{node.Name}</h1>,
      )}



    </Layout>
  )
}

export const query = graphql`
  query {
    allResumeJson {
      edges {
        node {
          Name
          Experience {
            Title
            Organization
            Start_Date
            End_Date
            Description
          }
        }
      }
    }
  }
`