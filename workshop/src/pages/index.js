import React from "react"
import { Link } from "gatsby"
import Codeui from '../assets/codeui'
import Hamburger from '../assets/hamburger'
import Copy from '../assets/copy'
import LinkIcon from '../assets/link'
import Envelope from '../assets/envelope'

export default () => 
    <div className="o-Dashboard">
        <div className="o-Dashboard__sidebar">
            <div className="o-Dashboard__logo">
                <Link To="index">
                    <Codeui></Codeui>
                </Link>
            </div>

            <div className="o-Dashboard__menu">
                <div className="c-Menu">
                    <div className="c-Menu__main">
                        <Link To="index" className="c-Menu__item isActive">
                            <Hamburger></Hamburger>
                        </Link>
                    </div>

                    <div className="c-Menu__footer">
                        <a href="#" className="c-Menu__item">
                            <Copy></Copy>
                        </a>
                        <a href="https://www.crealogix.design/design-system" target="_blank" className="c-Menu__item">
                            <LinkIcon></LinkIcon>
                        </a>
                        <a href="mailto:design-es@crealogix.com" className="c-Menu__item">
                            <Envelope></Envelope>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div className="o-Dashboard__content">
            <div className="o-Dashboard__header">
                <input type="text" className="c-Search" placeholder="Find component" />
                <select className="c-Select">
                    <option>English</option>
                    <option>Arab</option>
                </select>

                <select className="c-Select">
                    <option>Crealogix</option>
                    <option>NCB</option>
                    <option>Bank AlJazira</option>
                    <option>SAIB</option>
                </select>
                <select className="c-Select">
                    <option>Default</option>
                </select>
            </div>

            <div className="o-Dashboard__item">
                <h1>How do you distribute Design through your Digital Channels?</h1>
                
                <div className="o-Group">
                    <div className="o-Group__item">
                        <div className="c-Title">
                            Shared
                        </div>
                        <div className="c-Component">
                            <div className="c-Component__title">
                                Layout
                            </div>

                            <ul className="c-Component__list">
                                <li className="c-Component__list-item">
                                    Grid
                                </li>
                                <li className="c-Component__list-item">
                                    Shell
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                    
                <div className="o-Group__item">
                    <div className="c-Title">
                    Bocadillo
                    </div>
                    <div className="c-Component">
                        <div className="c-Component__title">
                            Churrasco
                        </div>

                        <ul className="c-Component__list">
                            <li className="c-Component__list-item">
                                Grid
                            </li>
                            <li className="c-Component__list-item">
                                Shell
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
