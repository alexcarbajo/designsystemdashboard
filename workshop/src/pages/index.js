import React from "react"
import { Link } from "gatsby"
import Codeui from '../assets/codeui'
import Menu from '../components/menu'
import Search from '../components/search'
import Select from '../components/select'

import FolderIcon from '../assets/folder'
import LayoutIcon from '../assets/layout'
import BookmarkIcon from '../assets/bookmark'
import AnchorDown from '../assets/anchorDown'

export default () => 
    <div className="o-Dashboard">
        <div className="o-Dashboard__sidebar">
            <div className="o-Dashboard__logo">
                <Link To="index">
                    <Codeui></Codeui>
                </Link>
            </div>

            <div className="o-Dashboard__menu">
                <Menu></Menu>
            </div>
        </div>

        <div className="o-Dashboard__content">
            <div className="o-Dashboard__header">
                <Search placeholder="Find component"></Search>

                <Select>
                    <option>English</option>
                    <option>Arab</option>
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

            <div className="o-Dashboard__item">
                <div className="o-Group">
                    <div className="o-Group__item">
                        <div className="o-Group__headline">
                            <div className="o-Group__icon">
                                <FolderIcon></FolderIcon>
                            </div>
                            <span className="o-Group__title">
                                Shared
                            </span>
                        </div>

                        <div className="c-Component">
                            <div className="c-Component__headline">
                                <div className="c-Component__dropdown">
                                    <AnchorDown></AnchorDown>
                                </div>
                                <div className="c-Component__icon">
                                    <LayoutIcon></LayoutIcon>
                                </div>
                                <span className="c-Component__title">
                                    Layout
                                </span>
                            </div>

                            <ul className="c-Component__list">
                                <li className="c-Component__item">
                                    <span className="c-Component__icon">
                                        <BookmarkIcon></BookmarkIcon>
                                    </span>
                                    <span className="c-Component__title">
                                        Grid
                                    </span>
                                </li>
                                <li className="c-Component__item">
                                    <span className="c-Component__icon">
                                        <BookmarkIcon></BookmarkIcon>
                                    </span>
                                    <span className="c-Component__title">
                                        Shell
                                    </span>
                                </li>
                            </ul>
                        </div>

                        <div className="c-Component">
                            <div className="c-Component__headline">
                                <div className="c-Component__dropdown">
                                    <AnchorDown></AnchorDown>
                                </div>
                                <div className="c-Component__icon">
                                    <LayoutIcon></LayoutIcon>
                                </div>
                                <span className="c-Component__title">
                                    Layout
                                </span>
                            </div>

                            <ul className="c-Component__list">
                                <li className="c-Component__item">
                                    <span className="c-Component__icon">
                                        <BookmarkIcon></BookmarkIcon>
                                    </span>
                                    <span className="c-Component__title">
                                        Grid
                                    </span>
                                </li>
                                <li className="c-Component__item">
                                    <span className="c-Component__icon">
                                        <BookmarkIcon></BookmarkIcon>
                                    </span>
                                    <span className="c-Component__title">
                                        Shell
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="o-Group">
                    <div className="o-Group__item">
                        <div className="o-Group__headline">
                            <div className="o-Group__icon">
                                <FolderIcon></FolderIcon>
                            </div>
                            <span className="o-Group__title">
                                Shared
                            </span>
                        </div>

                        <div className="c-Component">
                            <div className="c-Component__headline">
                                <div className="c-Component__dropdown">
                                    <AnchorDown></AnchorDown>
                                </div>
                                <div className="c-Component__icon">
                                    <LayoutIcon></LayoutIcon>
                                </div>
                                <span className="c-Component__title">
                                    Layout
                                </span>
                            </div>

                            <ul className="c-Component__list">
                                <li className="c-Component__item">
                                    <span className="c-Component__icon">
                                        <BookmarkIcon></BookmarkIcon>
                                    </span>
                                    <span className="c-Component__title">
                                        Grid
                                    </span>
                                </li>
                                <li className="c-Component__item">
                                    <span className="c-Component__icon">
                                        <BookmarkIcon></BookmarkIcon>
                                    </span>
                                    <span className="c-Component__title">
                                        Shell
                                    </span>
                                </li>
                            </ul>
                        </div>

                        <div className="c-Component">
                            <div className="c-Component__headline">
                                <div className="c-Component__dropdown">
                                    <AnchorDown></AnchorDown>
                                </div>
                                <div className="c-Component__icon">
                                    <LayoutIcon></LayoutIcon>
                                </div>
                                <span className="c-Component__title">
                                    Layout
                                </span>
                            </div>

                            <ul className="c-Component__list">
                                <li className="c-Component__item">
                                    <span className="c-Component__icon">
                                        <BookmarkIcon></BookmarkIcon>
                                    </span>
                                    <span className="c-Component__title">
                                        Grid
                                    </span>
                                </li>
                                <li className="c-Component__item">
                                    <span className="c-Component__icon">
                                        <BookmarkIcon></BookmarkIcon>
                                    </span>
                                    <span className="c-Component__title">
                                        Shell
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            
                <div className="o-Group">
                    <div className="o-Group__item">
                        <div className="o-Group__headline">
                            <div className="o-Group__icon">
                                <FolderIcon></FolderIcon>
                            </div>
                            <span className="o-Group__title">
                                Shared
                            </span>
                        </div>

                        <div className="c-Component">
                            <div className="c-Component__headline">
                                <div className="c-Component__dropdown">
                                    <AnchorDown></AnchorDown>
                                </div>
                                <div className="c-Component__icon">
                                    <LayoutIcon></LayoutIcon>
                                </div>
                                <span className="c-Component__title">
                                    Layout
                                </span>
                            </div>

                            <ul className="c-Component__list">
                                <li className="c-Component__item">
                                    <span className="c-Component__icon">
                                        <BookmarkIcon></BookmarkIcon>
                                    </span>
                                    <span className="c-Component__title">
                                        Grid
                                    </span>
                                </li>
                                <li className="c-Component__item">
                                    <span className="c-Component__icon">
                                        <BookmarkIcon></BookmarkIcon>
                                    </span>
                                    <span className="c-Component__title">
                                        Shell
                                    </span>
                                </li>
                            </ul>
                        </div>

                        <div className="c-Component">
                            <div className="c-Component__headline">
                                <div className="c-Component__dropdown">
                                    <AnchorDown></AnchorDown>
                                </div>
                                <div className="c-Component__icon">
                                    <LayoutIcon></LayoutIcon>
                                </div>
                                <span className="c-Component__title">
                                    Layout
                                </span>
                            </div>

                            <ul className="c-Component__list">
                                <li className="c-Component__item">
                                    <span className="c-Component__icon">
                                        <BookmarkIcon></BookmarkIcon>
                                    </span>
                                    <span className="c-Component__title">
                                        Grid
                                    </span>
                                </li>
                                <li className="c-Component__item">
                                    <span className="c-Component__icon">
                                        <BookmarkIcon></BookmarkIcon>
                                    </span>
                                    <span className="c-Component__title">
                                        Shell
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="o-Group">
                    <div className="o-Group__item">
                        <div className="o-Group__headline">
                            <div className="o-Group__icon">
                                <FolderIcon></FolderIcon>
                            </div>
                            <span className="o-Group__title">
                                Shared
                            </span>
                        </div>

                        <div className="c-Component">
                            <div className="c-Component__headline">
                                <div className="c-Component__dropdown">
                                    <AnchorDown></AnchorDown>
                                </div>
                                <div className="c-Component__icon">
                                    <LayoutIcon></LayoutIcon>
                                </div>
                                <span className="c-Component__title">
                                    Layout
                                </span>
                            </div>

                            <ul className="c-Component__list">
                                <li className="c-Component__item">
                                    <span className="c-Component__icon">
                                        <BookmarkIcon></BookmarkIcon>
                                    </span>
                                    <span className="c-Component__title">
                                        Grid
                                    </span>
                                </li>
                                <li className="c-Component__item">
                                    <span className="c-Component__icon">
                                        <BookmarkIcon></BookmarkIcon>
                                    </span>
                                    <span className="c-Component__title">
                                        Shell
                                    </span>
                                </li>
                            </ul>
                        </div>

                        <div className="c-Component">
                            <div className="c-Component__headline">
                                <div className="c-Component__dropdown">
                                    <AnchorDown></AnchorDown>
                                </div>
                                <div className="c-Component__icon">
                                    <LayoutIcon></LayoutIcon>
                                </div>
                                <span className="c-Component__title">
                                    Layout
                                </span>
                            </div>

                            <ul className="c-Component__list">
                                <li className="c-Component__item">
                                    <span className="c-Component__icon">
                                        <BookmarkIcon></BookmarkIcon>
                                    </span>
                                    <span className="c-Component__title">
                                        Grid
                                    </span>
                                </li>
                                <li className="c-Component__item">
                                    <span className="c-Component__icon">
                                        <BookmarkIcon></BookmarkIcon>
                                    </span>
                                    <span className="c-Component__title">
                                        Shell
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>    
            </div>
        </div>
    </div>
