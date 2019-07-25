import React from 'react'
import PropTypes from 'prop-types'
import iconSize from '../icon-size'

const IconUp = ({ size, ...props }) => {
  const sizeValue = iconSize(size)
  return (
    <svg
      width={sizeValue}
      height={sizeValue}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M4.246 15.75a.829.829 0 001.187 0L12 9.063l6.567 6.687a.829.829 0 001.187 0 .865.865 0 000-1.209l-7.16-7.29a.83.83 0 00-1.187 0l-7.161 7.29a.865.865 0 000 1.209z"
      />
    </svg>
  )
}

IconUp.propTypes = {
  size: PropTypes.oneOf(['medium', 'small', 'tiny']),
}
export default IconUp