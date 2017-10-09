import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'emotion'
import {
  bw1,
  mt0,
  ttu,
  f5,
  f6,
  ma0,
  pa3,
  lhTitle,
  bWhite40,
  bgTeal,
  white,
  bb,
  ba,
  bgWhite,
  bBlack20,
  shShadow2,
} from '../styles'

/**
 * Standard UI container. Most content and interfaces should be wrapped in a Box.
 *
 * Can display a title (set as `props.title`) with two different styles (`props.headingType`),
 * and the heading’s h-level can be controlled (`props.headingSemanticLevel`) to allow for
 * proper hierarchies.
 */
const Box = ({
  children,
  className,
  contentWrapperClassName,
  headingSemanticLevel,
  headingType,
  title,
}) => {
  let styles = css`
    ${bgWhite};
    ${ba};
    ${bBlack20};
    ${shShadow2};
    ${className || css``};
  `

  const renderTitle = () => {
    if (title !== undefined && title.length > 0) {
      return React.createElement('h' + headingSemanticLevel, {
        className: css`
          ${headingType === 'block'
            ? css`
                ${bgTeal};
                ${white};
                ${bb};
                ${bw1};
                ${bWhite40};
                ${ma0};
                ${pa3};
                ${f5};
              `
            : css`

              `} ${headingType === 'inline'
              ? css`
                  ${f6};
                  ${mt0};
                  ${lhTitle};
                  ${ttu};
                `
              : css`

                `};
        `,
        title,
      })
    }
  }

  return (
    <div className={styles}>
      {headingType === 'block' ? renderTitle() : null}
      <div className={contentWrapperClassName}>
        {headingType === 'inline' ? renderTitle() : null}
        {children}
      </div>
    </div>
  )
}

Box.defaultProps = {
  className: '',
  headingSemanticLevel: 2,
  headingType: 'block',
  contentWrapperClassName: css`${pa3}`,
}

export default Box
