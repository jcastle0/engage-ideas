import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

/* Trying to figure out how to iterate over array value in JSON file
Maybe this will help: https://stackoverflow.com/questions/49299309/gatsbyjs-getting-data-from-restful-api
 */

export default ( props ) => {
  const resume = props.data.allResumeJson.edges;
  const experience = props.data.allResumeJson.edges.node.experience;
  return (
    <Layout>
      {resume.map((r, i) => {
        const resumeData = r.node;
        return (
          <div key={i}>
            <p>{resumeData.Name}</p>
          </div>
        )
      }
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