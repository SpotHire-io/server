import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'emotion'
import RModal from 'react-modal'

const shShadow2 = css`
  box-shadow: 0px 3px 10px -4px rgba(0, 0, 0, 0.2);
`

const shModal = css`
  border: 1px solid rgb(204, 204, 204);
  border-radius: 4px;
  background: rgb(255, 255, 255);
  padding: 1rem;
  position: absolute;
  top: 4rem;
  left: 25%;
  right: 25%;
  overflow: auto;
  outline: none;
  max-height: 75vh;
`
const shModalFull = css`
  left: 4rem;
  right: 4rem;
  bottom: 4rem;
  max-height: 100%;
`
const shModalOverlay = css`
  background-color: rgba(255, 255, 255, 0.75);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
`

const styles = css`
  ${shModal};
  ${shShadow2};
  ${props => (props.fullWidth ? shModalFull : css``)};
`
/**
 * Wrapper for react-modal to set commonly used props.
 */
const Modal = props => {
  return (
    <RModal
      overlayClassName={shModalOverlay}
      className={styles}
      onRequestClose={props.onClose}
      closeTimeoutMS={100}
      {...props}>
      {props.children}
    </RModal>
  )
}

Modal.defaultProps = {
  fullWidth: false,
}

Modal.propTypes = {
  onClose: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}

export default Modal
