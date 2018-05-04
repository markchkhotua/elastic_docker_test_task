import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Search from './Search';
import MainMenu from './MainMenu';
import Top from './Top';

class Header extends Component {

    static propTypes = {
        windowWidth: PropTypes.number
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="header">
                <Top/>
                <MainMenu />
                <Search windowWidth={this.props.windowWidth}/>
            </div>

        );
    }
}

export default Header;
