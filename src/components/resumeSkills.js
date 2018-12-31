import React from "react"
import { StaticQuery, graphql } from "gatsby"

const Skills = () => (
    <StaticQuery
    query={graphql`
      query {
        resumeJson {
            Skills
        }
      }
    `}
    render={data => (
        <div className="skills-wrapper">
           <h2>Skills &amp; Tools</h2>
           <ul className="skill-list">
            {data.resumeJson.Skills.map(( skill , index ) => (
                <li className="skill" key={index}>{skill}</li>
            ))}
            </ul>
            
        </div>       
      )}
  />
)
export default Skills