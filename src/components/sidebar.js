import React, { Component } from 'react'
import { Link } from "gatsby"
import Codeui from '../assets/codeui'
import Menu from '../components/menu'

class Sidebar extends Component {
  render() {
    return (
        <div className="o-Dashboard__sidebar">
            <div className="o-Dashboard__logo">
                <Link to="/">
                    <Codeui></Codeui>
                </Link>
            </div>

            <div className="o-Dashboard__menu">
                <Menu></Menu>
            </div>
        </div>
    );
  }
}

export default Sidebar;