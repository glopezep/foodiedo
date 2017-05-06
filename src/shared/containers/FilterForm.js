import React, { Component } from 'react';
import styles from './FilterForm.css';

class FilterForm extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <form>
        <input
          className={styles.input}
          type="text"
          placeholder="Search here..."
        />
        <select className={styles.select}>
          <option value="0">Filter</option>
        </select>
      </form>
    )
  }
}

export default FilterForm;
