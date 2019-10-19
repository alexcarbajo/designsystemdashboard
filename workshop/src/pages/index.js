import React from "react"
import { Link } from "gatsby"

export default () => 
    <div className="o-dashboard">
        <div className="o-dashboard__sidebar">
            Sidebar
        </div>

        <div className="o-dashboard__content">
            <div className="o-dashboard__header">
                <input type="text" className="c-search" placeholder="Find component" />
                <select className="c-select">
                    <option>EN</option>
                    <option>AR</option>
                </select>

                <select className="c-select">
                    <option>CLX</option>
                    <option>SAIB</option>
                    <option>BAJ</option>
                    <option>NCB</option>
                </select>
                <select className="c-select">
                <option>Default</option>
                </select>
            </div>

            <div className="o-dashboard__item">
                El iframe
                
                <div className="o-group">
                    <div className="o-group__item">
                        <div className="c-title">
                            Shared
                        </div>
                        <div className="c-component">
                            <div className="c-component__title">
                                Layout
                            </div>

                            <ul className="c-component__list">
                                <li className="c-component__list-item">
                                    Grid
                                </li>
                                <li className="c-component__list-item">
                                    Shell
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                    
                <div className="o-group__item">
                    <div className="c-title">
                    Bocadillo
                    </div>
                    <div className="c-component">
                        <div className="c-component__title">
                            Churrasco
                        </div>

                        <ul className="c-component__list">
                            <li className="c-component__list-item">
                                Grid
                            </li>
                            <li className="c-component__list-item">
                                Shell
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
