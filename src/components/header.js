import React, { Component } from 'react'
import Search from '../components/search'
import Select from '../components/select'

class Header extends Component {
  render() {
    return (
        <div className="o-Dashboard__header">
            <Search placeholder="Find component"></Search>

            <Select>
                <option>EN</option>
                <option>AR</option>
            </Select>

            <Select>
                <option>CLX</option>
                <option>NCB</option>
                <option>BAJ</option>
                <option>SAIB</option>
            </Select>

            <Select>
                <option>Standard</option>
                <option>Gold</option>
                <option>Silver</option>
                <option>Platinum</option>                    
            </Select>
        </div>
    );
  }
}

export default Header;