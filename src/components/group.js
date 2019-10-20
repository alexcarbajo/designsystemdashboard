import React, { Component } from 'react';
import FolderIcon from '../assets/folder'

class Group extends Component {
  render() {
    return (
      <div className="o-Group">
        <div className="o-Group__item">
          <div className="o-Group__headline">
              <div className="o-Group__icon">
                  <FolderIcon></FolderIcon>
              </div>
              <span className="o-Group__title">
                  {this.props.title}
              </span>
          </div>

          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Group;

