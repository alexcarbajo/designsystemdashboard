import React, { Component } from 'react'
import { Link } from 'gatsby'
import BookmarkIcon from '../assets/bookmark'

class ComponentItem extends Component {
  render() {
    return (
        <Link to="/component" className="c-Component__item">
            <span className="c-Component__icon">
                <BookmarkIcon></BookmarkIcon>
            </span>
            <span className="c-Component__title">
                {this.props.title}
            </span>
            {this.props.badge ?
                <span className="c-Component__badge">
                    {this.props.badge}
                </span>
            : '' }
        </Link>
    );
  }
}

export default ComponentItem;