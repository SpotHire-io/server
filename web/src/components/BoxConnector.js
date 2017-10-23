import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'emotion'

const mh5 = css`
  margin-left: 4rem;
  margin-right: 4rem;
`
const animateAll = css`
  transition: all 0.15s ease-in;
`
export const bl = css`
  border-left-style: solid;
  border-left-width: 1px;
`
const br = css`
  border-right-style: solid;
  border-right-width: 1px;
`
const bt0 = css`
  border-top-width: 0;
`
const bb0 = css`
  border-bottom-width: 0;
`
const bBlack10 = css`
  border-color: rgba(0, 0, 0, 0.1);
`
const bBlack20 = css`
  border-color: rgba(0, 0, 0, 0.2);
`
const bw1 = css`
  border-width: 0.125rem;
`

const active = css`
  ${bw1};
  ${bBlack20};
`
const styles = css`
  ${mh5};
  ${animateAll};
  ${bl};
  ${br};
  ${bt0};
  ${bb0};
  ${props => (props.isActive ? active : bBlack10)};
  ${props => props.className || css``};
`

/**
 * Purely presentational component to visually connect two `Box`es.
 *
 * This connector should only be used when the two `Box`es are related (e.g. a search
 * form and the search results). `props.isActive` should be used to signal when this
 * relation is "active" (e.g. search term is entered and the results displayed).
 */
const BoxConnector = ({ className, isActive, children }) => (
  <div className={styles}>{children}</div>
)

BoxConnector.defaultProps = {
  className: 'h1',
}

BoxConnector.propTypes = {
  isActive: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.array,
}

export default BoxConnector
