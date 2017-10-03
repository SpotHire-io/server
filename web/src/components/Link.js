import styled from 'react-emotion'
import { css } from 'emotion'

const Link = styled('a')`
  color: #fff;
  width: 20%;
  text-decoration: none;
  font-style: italic;
  ${props =>
    props.active
      ? css`
          box-shadow: inset 0 0 20px 2px rgba(0, 0, 0, 0.2);
        `
      : css`

        `};
  text-align: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
  box-sizing: border-box;
  &:active,
  &:focus,
  &:hover,
  &:link,
  &:visited {
    transition: color 0.15s ease-in;
  }
  cursor: pointer;
  &:hover{
    opacity: .5;
  }

`

export default Link
