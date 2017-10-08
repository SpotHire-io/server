import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { css } from 'emotion'
import {
  buttonPositive,
  buttonStandard,
  buttonNegative,
  buttonNeutral,
  button,
  inputReset,
  f5,
  noSelect,
} from '../styles'

/**
 * Used for most interactions requiring a button.
 *
 * Comes in four types, corresponding to different appearances.
 * Can stand alone. When beside another button, the button to the right should have `mr3` added as a class.
 */
class BasicButton extends Component {
  static propTypes = {
    children: PropTypes.string,
    className: PropTypes.string,
    type: PropTypes.string,
  }

  static defaultProps = {
    type: 'neutral',
  }

  render() {
    let styles = css`
      ${button};
      ${noSelect};
      ${inputReset};
      ${f5};
      ${this.props.type === 'positive' ? buttonPositive : css``};
      ${this.props.type === 'negative' ? buttonNegative : css``};
      ${this.props.type === 'neutral' ? buttonNeutral : css``};
      ${this.props.type === 'standard' ? buttonStandard : css``};
    `

    return <button className={styles}>{this.props.children}</button>
  }
}

export default BasicButton
