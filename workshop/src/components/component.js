import React, { Component } from 'react'
import LayoutIcon from '../assets/layout'
import AnchorDown from '../assets/anchorDown'

class ComponentContainer extends Component {

    state = {
        hasChildren: false
    };

    handleClick = () => {
        this.setState(state => ({ hasChildren: !state.hasChildren }));
    };

    render() {
        return (
            <div className={this.state.hasChildren ? 'c-Component hasChildren': 'c-Component'}>
                <div className="c-Component__headline" onClick={this.handleClick}>
                    <div className="c-Component__dropdown">
                        <AnchorDown></AnchorDown>
                    </div>
                    <div className="c-Component__icon">
                        <LayoutIcon></LayoutIcon>
                    </div>
                    <span className="c-Component__title">
                        {this.props.title}
                    </span>
                </div>

                <ul className="c-Component__list">
                    {this.props.children}
                </ul>
            </div>
        );
    }
}

export default ComponentContainer;

