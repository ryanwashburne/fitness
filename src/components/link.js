import React from 'react'

import { Link } from 'react-router-dom'

export default ({ href, to, children, ...props }) => {
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    )
  }
  return (
    <Link to={to} {...props}>
      {children}
    </Link>
  )
}
