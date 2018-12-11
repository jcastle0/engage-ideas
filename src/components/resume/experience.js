import PropTypes from 'prop-types'
import React from 'react'

const Experience = ({ Title }) => (
    <div>{Title}</div>
)

Experience.PropTypes ={
    Title: PropTypes.string,
    Organization: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    Description: PropTypes.string,
}

Experience.defaultProps ={
    Title: '',
    Organization: '',
    startDate: '',
    endDate: '',
    Description: '',
}

/* , Organization, startDate, endDate, Description */