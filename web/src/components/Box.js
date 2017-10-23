import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'emotion'

const f6 = css`font-size: 6rem;`
const bw1 = css`border-width: 0.125rem;`
const mt0 = css`margin-top: 0;`
const ttu = css`text-transform: uppercase;`
const f5 = css`font-size: 1rem;`
const ma0 = css`margin: 0;`
const pa3 = css`padding: 1rem;`
const lhTitle = css`line-height: 1.25;`
const bWhite40 = css`border-color: rgba(255, 255, 255, 0.4);`
const bgTeal = css`background-color: #5ab6b2;`
const white = css`color: #fff;`
const bb = css`
  border-bottom-style: solid;
  border-bottom-width: 1px;
`
const ba = css`
  border-style: solid;
  border-width: 1px;
`
const bgWhite = css`background-color: #fff;`
const bBlack20 = css`border-color: rgba(0, 0, 0, 0.2);`
const shShadow2 = css`box-shadow: 0px 3px 10px -4px rgba(0, 0, 0, 0.2);`


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
