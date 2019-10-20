import React, { Component } from 'react'
import SelectIcon from '../assets/arrowDown'

class Select extends Component {
  render() {
    return (
        <div className={this.props.state ? `c-Select ${this.props.state}` : 'c-Select'}>
            <select
                className={this.props.class ? `c-Select__select c-Select__select--${this.props.type}` : `c-Select__select`}
                id={this.props.identification}
            >
              {this.props.children}
            </select>

            <div className="c-Select__icon">
                <SelectIcon></SelectIcon>
            </div>
        </div>
    );
  }
}

export default Select;

