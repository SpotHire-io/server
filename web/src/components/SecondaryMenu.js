import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'emotion'

// XXX: Clean this up.
const bgWhite = css`
  background-color: #fff;
`
const mb4 = css`
  margin-bottom: 2rem;
`
const ph4 = css`
  padding-left: 2rem;
  padding-right: 2rem;
`
const secondaryMenuStyles = css`
  ${bgWhite};
  ${mb4};
  ${ph4};
`

const b = css`
  font-weight: bold;
`
const nearBlack = css`
  color: #111;
`
const hoverGray = css`
  &:hover {
    color: #777;
  }
  &:focus {
    color: #777;
  }
`
const dib = css`
  display: inline-block;
`
const pv3 = css`
  padding-top: 1rem;
  padding-bottom: 1rem;
`
const mr4 = css`
  margin-right: 2rem;
`
const noUnderline = css`
  text-decoration: none;
`
const animateAll = css`
  transition: all 0.15s ease-in;
`
const bb = css`
  border-bottom-style: solid;
  border-bottom-width: 1px;
`
const bw1 = css`
  border-width: 0.125rem;
`
const hoverBWhite40 = css`
  &:hover {
    border-color: rgba(255, 255, 255, 0.4);
  }
`

const bTeal = css`
  border-color: #5ab6b2;
`
const bWhite40 = css`
  border-color: rgba(255, 255, 255, 0.4);
`

const activeStyles = css`
  ${bTeal};
  ${bWhite40};
`

const itemStyles = css`
  margin-bottom: -0.125rem;
  ${b};
  ${nearBlack};
  ${hoverGray};
  ${dib};
  ${pv3};
  ${mr4};
  ${noUnderline};
  ${animateAll};
  ${bb};
  ${bw1};
  ${hoverBWhite40};
  ${props => (props.active ? activeStyles : css``)};
`

const wrapperClasses = css`
  ${bb};
  ${bgWhite};
  ${bw1};
  ${bTeal};
`

const SecondaryMenu = ({ children }) => (
  <nav className={wrapperClasses}>
    {React.Children.map(children, (item, index) => {
      return React.cloneElement(item, { className: itemStyles })
    })}
  </nav>
)

SecondaryMenu.defaultProps = {
  className: secondaryMenuStyles,
}

SecondaryMenu.propTypes = {
  children: PropTypes.array,
}

export default SecondaryMenu
