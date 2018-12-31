import React from "react"
import { StaticQuery, graphql } from "gatsby"

const Certs = () => (
    <StaticQuery
    query={graphql`
      query {
        resumeJson {
            Certifications
        }
      }
    `}
    render={data => (
        <div className="certifications-wrapper">
           <h2>Certifications</h2>
           <ul className="certifications-list">
            {data.resumeJson.Certifications.map(( cert , index ) => (
                <li className="certification" key={index}>{cert}</li>
            ))}
            </ul>
            
        </div>       
      )}
  />
)
export default Certs