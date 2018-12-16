import React from "react"
import { StaticQuery, graphql } from "gatsby"

const Contact = () => (
    <StaticQuery
    query={graphql`
      query {
        resumeJson {
            Name
        }
      }
    `}
    render={data => (
        <div className="contact-wrapper">
            <h1>{data.resumeJson.Name}</h1>
        </div>       
      )}
  />
)
export default Contact