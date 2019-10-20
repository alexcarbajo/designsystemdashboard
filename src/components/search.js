import React, { Component } from 'react';
import SearchIcon from '../assets/search'

class Search extends Component {
  render() {
    return (
        <div className={this.props.state ? `c-Search ${this.props.state}` : 'c-Search'}>
            <div className="c-Search__icon">
                <SearchIcon></SearchIcon>
            </div>
            <input
                className={this.props.class ? `c-Search__input c-Search__input--${this.props.type}` : `c-Search__input`}
                type={this.props.type ? `${this.props.type}` : 'text'}
                id={this.props.identification}
                defaultValue={this.props.content}
                placeholder={this.props.placeholder ? `${this.props.placeholder}` : 'Add placeholder'}
            />
        </div>
    );
  }
}

export default Search;

