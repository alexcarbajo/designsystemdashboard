import React, { Component } from 'react'
import BookmarkIcon from '../assets/bookmark'

class ComponentItem extends Component {
  render() {
    return (
        <li className="c-Component__item">
            <span className="c-Component__icon">
                <BookmarkIcon></BookmarkIcon>
            </span>
            <span className="c-Component__title">
                {this.props.title}
            </span>
        </li>
    );
  }
}

export default ComponentItem;