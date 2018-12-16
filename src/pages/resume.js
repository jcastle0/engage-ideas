import React from 'react'
// import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Experience from '../components/resumeExperience'

/* Trying to figure out how to iterate over array value in JSON file
Maybe this will help: https://stackoverflow.com/questions/49299309/gatsbyjs-getting-data-from-restful-api
 */

export default () => {
  return (
    <Layout>
      <div class="page-wrapper">
        <Experience />
      </div>
    </Layout>
  )
}