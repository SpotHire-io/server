import React from 'react'
import { connect } from 'react-redux'

import styles from '../css/List'

const List = ({ category, packages }) => (
  <div className={styles.list}>
    <div className={styles.title}>Category: {category}</div>

    <div className={styles.content}>
      <ul>{packages.map(pkg => <li key={pkg}>{pkg}</li>)}</ul>
    </div>
  </div>
)

const mapStateToProps = state => ({
  category: state.category,
  packages: state.packages
})

export default connect(mapStateToProps)(List)
