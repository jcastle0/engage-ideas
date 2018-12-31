import React from "react"
import { StaticQuery, graphql } from "gatsby"

const Education = () => (
    <StaticQuery
    query={graphql`
      query {
        resumeJson {
            Education {
                School
                Degree
                Area
                Year
            }
        }
      }
    `}
    render={data => (
        <div className="education-wrapper">
            <h2>Education</h2>
            {data.resumeJson.Education.map(( edu , index ) => (
                <div className="education" key={index}>
                    <h3>{edu.School}</h3>
                    <h4>{edu.Degree}, {edu.Area} ({edu.Year})</h4>
                </div>
            ))}
        </div>       
      )}
  />
)
export default Education