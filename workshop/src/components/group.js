import React, { Component } from 'react';
import FolderIcon from '../assets/folder'
import LayoutIcon from '../assets/layout'
import BookmarkIcon from '../assets/bookmark'
import AnchorDown from '../assets/anchorDown'

class Search extends Component {
  render() {
    return (
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
    );
  }
}

export default Search;

