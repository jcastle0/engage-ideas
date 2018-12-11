import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Footer = ({ siteTitle }) => (
    <footer>
        <div className="footer-container">
            <div className="footer-nav">
                <ul>
                    <li><Link to="/about">About Me</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
            <div className="copyright">
                <p>&copy; James Castle</p>
            </div>
        </div>
    </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: '',
}

export default Footer
