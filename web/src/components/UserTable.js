import React from 'react'
import { css } from 'emotion'
import PropTypes from 'prop-types'
import { Table, Thead, Th, Tr, Td } from 'reactable'
import Icon from 'react-geomicons'
// XXX: Not only does this need to be removed in exchange for ReactRouters
// link, but this work shouldn't even be done in this component.
import { linkTo } from '@kadira/storybook'

// XXX: This component is huge and is responsible for way to much.
// Currently the API for this component involves passing in an array of elements:
// <UserTable users={userData}/>
// TODO: Make the API more React-like:
// <UserTable>
//   <user name="Mike">
// </UserTable>

// TODO: This mess of CSS stuff is the first step in a process of breaking down
// an huge stylesheet:
// Mega global style sheet > Pull styles into components > consolidate CSS.
const bgWhite = css`
  background-color: #fff;
`
const tl = css`
  text-align: left;
`
const bgTeal = css`
  background-color: #5ab6b2;
`
const white = css`
  color: #fff;
`
const bWhite40 = css`
  border-color: rgba(255, 255, 255, 0.4);
`
const bb = css`
  border-bottom-style: solid;
  border-bottom-width: 1px;
`
const bw1 = css`
  border-width: 0.125rem;
`
const dn = css`
  display: none;
`
const bBlack20 = css`
  border-color: rgba(0, 0, 0, 0.2);
`
const pa3 = css`
  padding: 1rem;
`
const w100 = css`
  width: 100%;
`
const mt0 = css`
  margin-top: 0;
`
const pv1 = css`
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
`
const pv2 = css`
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
`
const ph3 = css`
  padding-left: 1rem;
  padding-right: 1rem;
`
const tr = css`
  text-align: right;
`
const pointer = css`
  &:hover {
    cursor: pointer;
  }
`
const vMid = css`
  vertical-align: middle;
`
const pv3 = css`
  padding-top: 1rem;
  padding-bottom: 1rem;
`
const i = css`
  font-style: italic;
`
const ml2 = css`
  margin-left: 0.5rem;
`
const pa1 = css`
  padding: 0.25rem;
`
const pa2 = css`
  padding: 0.5rem;
`
const hoverBgBlack10 = css`
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
  &:focus {
    background-color: rgba(0, 0, 0, 0.1);
  }
`
const w1 = css`
  width: 1rem;
`
const h1 = css`
  height: 1rem;
`
const br100 = css`
  border-radius: 100%;
`
const vBtm = css`
  vertical-align: bottom;
`
const tc = css`
  text-align: center;
`
const pr0 = css`
  padding-right: 0;
`
/**
 * Lists provided users, allowing various management functions (selecting, editing, deleteing).
 *
 * Can select the columns displayed with `props.enabledColumns`.
 */
export default class UserTable extends React.Component {
  constructor() {
    super()

    this.renderNewUserRow = this.renderNewUserRow.bind(this)
    this.renderNoUsersRow = this.renderNoUsersRow.bind(this)

    this.renderUserRow = this.renderUserRow.bind(this)
    this.renderUserCell = this.renderUserCell.bind(this)
    this.renderHeaderCell = this.renderHeaderCell.bind(this)

    this.state = {}
  }

  renderNewUserRow() {
    const inputClasses = css`
      ${w100};
      ${pa1};
    `

    return (
      <Tr className={mt0}>
        {this.renderUserCell('avatar', '', pv1)}
        {this.renderUserCell(
          'name', // @TODO: Store this value in state
          <input className={inputClasses} type="text" placeholder="Name" />,
          pv2,
        )}
        {this.renderUserCell(
          'email', // @TODO: Store this value in state
          <input className={inputClasses} type="email" placeholder="Email" />,
          pv2,
        )}
        {this.renderUserCell(
          'phone', // @TODO: Store this value in state
          <input className={inputClasses} type="tel" placeholder="Phone" />,
          pv2,
        )}
        {this.renderUserCell(
          'actions',
          <div className={tr} title="Invite employee">
            {/* @TODO: Clicking this should create the new user via the API, inviting them, then redirect to their individual page */}
            <Icon
              color="#555555"
              name="check"
              className={css`
                ${pointer};
                ${vMid};
              `}
              onClick={() =>
                linkTo('Views (manager)', 'People:EmployeeSingleView')}
            />
          </div>,
          pv1,
        )}
      </Tr>
    )
  }

  renderNoUsersRow() {
    return (
      <Tr className={mt0}>
        {this.renderUserCell('avatar', '', pv1)}
        {this.renderUserCell(
          'name',
          'No users to list.',
          css`
            ${pv3};
            ${i};
          `,
        )}
        {this.renderUserCell('email', '', pv2)}
        {this.renderUserCell('phone', '', pv2)}
        {this.renderUserCell('actions', '', pv1)}
      </Tr>
    )
  }

  renderUserRow(user) {
    const userClasses = css`
      ${pointer};
      ${ph3};
      ${pa2};
      ${mt0};
      ${hoverBgBlack10};
    `

    const renderControls = user => (
      <div className={tr}>
        <Icon
          color="#555555"
          name="compose"
          className={pointer}
          onClick={() => this.props.editUser(user.id)}
        />
        <Icon
          color="#555555"
          name="close"
          className={css`
            ${pointer};
            ${ml2};
          `}
          onClick={() => this.props.deleteUser(user.id)}
        />
      </div>
    )

    return (
      <Tr
        key={user.id}
        className={userClasses}
        onClick={() => this.props.onClickUser(user.id)}>
        {this.renderUserCell(
          'avatar',
          <img
            className={css`
              ${w1};
              ${h1};
              ${br100};
              ${vBtm};
            `}
            src={user.imageSrc}
            alt="avatar"
          />,
          css`
            ${tc};
            ${pr0};
          `,
        )}
        {this.renderUserCell('name', user.firstName + ' ' + user.lastName)}
        {this.renderUserCell('email', user.email)}
        {this.renderUserCell('phone', user.phone)}
        {this.renderUserCell('actions', renderControls(user))}
      </Tr>
    )
  }

  renderUserCell(column, value, className) {
    const cellClasses = css`
      ${pa3};
      ${bb};
      ${bBlack20};
      ${props => (props.enabledColumns.includes(column) ? css`` : dn)};
      ${props => (props.className ? props.className : css``)};
    `

    return (
      <Td column={column} className={cellClasses}>
        {value}
      </Td>
    )
  }

  renderHeaderCell(column, value) {
    const cellClasses = css`
      ${pa3};
      ${tl};
      ${bgTeal};
      ${white};
      ${bb};
      ${bw1};
      ${bWhite40};
      ${props => (props.enabledColumns.includes(column) ? css`` : dn)};
    `

    return (
      <Th column={column} className={cellClasses}>
        {value}
      </Th>
    )
  }

  render() {
    const ba = css`
      border-style: solid;
      border-width: 1px;
    `
    const shShadow2 = css`
      box-shadow: 0px 3px 10px -4px rgba(0, 0, 0, 0.2);
    `
    const wrapperClasses = css`
      ${bgWhite};
      ${ba};
      ${bBlack20};
      ${props => (props.hasShadow ? shShadow2 : css``)};
      ${props => (props.className ? props.className : css``)};
    `

    return (
      <div className={wrapperClasses}>
        <Table
          {...this.props.tableProps}
          style={{ width: 'calc(100% + 1px)' }}
          cellSpacing="0"
          sortable={['name']}>
          <Thead>
            {this.renderHeaderCell('avatar', '')}
            {this.renderHeaderCell('name', 'Name')}
            {this.renderHeaderCell('email', 'Email')}
            {this.renderHeaderCell('phone', 'Phone')}
            {this.renderHeaderCell('actions', '')}
          </Thead>
          {this.props.inlineAddingRowIsOpen ? this.renderNewUserRow() : null}
          {this.props.users.length > 0
            ? this.props.users.map(user => this.renderUserRow(user))
            : this.renderNoUsersRow()}
        </Table>
      </div>
    )
  }
}

UserTable.defaultProps = {
  className: '',
  hasShadow: true,
  users: [],
  inlineAddingRowIsOpen: false,
  tableProps: {},
  enabledColumns: ['avatar', 'name', 'email', 'phone', 'actions'],
}

UserTable.propTypes = {
  inlineAddingRowIsOpen: PropTypes.boolean,
  users: PropTypes.object,
  tableProps: PropTypes.object,
  onClickUser: PropTypes.func,
  deleteUser: PropTypes.func,
  editUser: PropTypes.func,
}
