import React from 'react'
import { Link } from '../addons'
// import PropTypes from 'prop-types'
import useSiteMetadata from '../../lib/useSiteMetadata'

const Header = () => {
  const { title } = useSiteMetadata()

  return (
    <header
      style={{
        background: `rebeccapurple`,
        marginBottom: `1.45rem`
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to='/'
            style={{
              color: `white`,
              textDecoration: `none`
            }}
          >
            {title}
          </Link>
        </h1>
      </div>
    </header>
  )
}

// Header.propTypes = { pathname: PropTypes.string.isRequired }

export default Header
