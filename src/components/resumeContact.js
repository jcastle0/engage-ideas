import React from "react"
import { StaticQuery, graphql } from "gatsby"

const Contact = () => (
    <StaticQuery
    query={graphql`
      query {
        resumeJson {
            Name
            Address_Street
            Address_City
            Phone
            Email
            Email_Link
        }
      }
    `}
    render={data => (
        <div className="contact-wrapper">
            <h1>{data.resumeJson.Name}</h1>
            <address>
                <div className="physical">
                    <p>
                        {data.resumeJson.Address_Street} <br />
                        {data.resumeJson.Address_City}
                    </p>
                </div>
                <div className="virtual">
                    <p>
                        Phone: {data.resumeJson.Phone} <br />
                        Email: <a href={data.resumeJson.Email_Link}>{data.resumeJson.Email}</a>
                    </p>
                </div>
            </address>
            
        </div>       
      )}
  />
)
export default Contact