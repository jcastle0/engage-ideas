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
        <div class="experience-wrapper">
            {data.resumeJson.Experience.map(exp => 
                <div class="experience">
                    <h2>{exp.Title} (<span class="start-date">{exp.Start_Date}</span> - <span class="End_Date">{exp.End_Date}</span>)</h2>
                    <h3>{exp.Organization}</h3>
                    <p>{exp.Description}</p>
                </div>
            )}
        </div>       
      )}
  />
)
export default Experience