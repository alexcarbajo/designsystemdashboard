import React, { Component } from 'react'
import FormSelect from './formSelect'

class Selector extends Component {
  render() {
    return (
        <div className="o-Dashboard__selector">
            <FormSelect>
                <optgroup label="Select a purpose">
                    <option>Classic view</option>
                    <option>Other view</option>
                </optgroup>
            </FormSelect>

            <FormSelect>
                <optgroup label="Select a state">
                    <option>Step 1</option>
                    <option>Step 2</option>
                </optgroup>
            </FormSelect>
        </div>
    );
  }
}

export default Selector;