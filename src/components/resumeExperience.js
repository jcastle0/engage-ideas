import React from "react"
import { StaticQuery, graphql } from "gatsby"

const Experience = () => (
    <StaticQuery
    query={graphql`
      query {
        resumeJson {
            Experience {
                Title
                Organization
                Start_Date
                End_Date
                Description
            }
        }
      }
    `}
    render={data => (
        <div className="experience-wrapper">
            <h2>Professional Experience</h2>
            {data.resumeJson.Experience.map(( exp , index ) => (
                <div className="experience" key={index}>
                    <h3>{exp.Title} (<span className="start-date">{exp.Start_Date}</span> - <span className="end-date">{exp.End_Date}</span>)</h3>
                    <h4>{exp.Organization}</h4>
                    <p>{exp.Description}</p>
                </div>
            ))}
        </div>       
      )}
  />
)
export default Experience