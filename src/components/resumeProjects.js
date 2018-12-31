import React from "react"
import { StaticQuery, graphql } from "gatsby"

const Projects = () => (
    <StaticQuery
    query={graphql`
      query {
        resumeJson {
            Projects {
                Organization
                Title
                Year
                Description
            }
        }
      }
    `}
    render={data => (
        <div className="projects-wrapper">
            <h2>Projects</h2>
            {data.resumeJson.Projects.map(( proj , index ) => (
                <div className="project" key={index}>
                    <h3>{proj.Organization}</h3>
                    <h4>{proj.Title} ({proj.Year})</h4>
                    <p>{proj.Description}</p>
                </div>
            ))}
        </div>       
      )}
  />
)
export default Projects