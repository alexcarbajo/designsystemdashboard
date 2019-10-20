import React, { Component } from 'react'
import FormSelectIcon from '../assets/anchorDown'

class FormSelect extends Component {
  render() {
    return (
        <div className={this.props.state ? `c-Form-select ${this.props.state}` : 'c-Form-select'}>
            <select
                className={this.props.class ? `c-Form-select__select c-Form-select__select--${this.props.type}` : `c-Form-select__select`}
                id={this.props.identification}
            >
              {this.props.children}
            </select>

            <div className="c-Form-select__icon">
                <FormSelectIcon></FormSelectIcon>
            </div>
        </div>
    );
  }
}

export default FormSelect;

