import React from "react"
import { StaticQuery, graphql } from "gatsby"

const Presentations = () => (
    <StaticQuery
    query={graphql`
      query {
        resumeJson {
            Presentations {
                Venue
                Title
                Year
            }
        }
      }
    `}
    render={data => (
        <div className="presentations-wrapper">
            <h2>Presentations</h2>
            {data.resumeJson.Presentations.map(( pres , index ) => (
                <div className="presentation" key={index}>
                    <h3>{pres.Venue}</h3>
                    <h4>{pres.Title} ({pres.Year})</h4>
                </div>
            ))}
        </div>       
      )}
  />
)
export default Presentations