import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

/* Trying to figure out how to iterate over array value in JSON file */

export default ( props ) => {
  const resume = props.data.allResumeJson.edges;
  return (
    <Layout>
      {resume.map((r, i) => {
        const resumeData = r.node;
        console.log(resumeData)
        return (
          <div key={i}>
            <p>{resumeData.Name}</p>
            <p>{resumeData.Experience.Title}</p>
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