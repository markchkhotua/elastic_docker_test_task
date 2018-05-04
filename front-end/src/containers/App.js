import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import Carousel from 'nuka-carousel'
import Header from './header'
import windowSize from 'react-window-size';

class App extends Component {

    static propTypes = {
        windowWidth: PropTypes.number
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <Header windowWidth={this.props.windowWidth}/>
                <main>
                    <Carousel>
                        <img src="images/slider/slide.jpg"/>
                        <img src="images/slider/slide2.jpg"/>
                        <img src="images/slider/slide3.jpg"/>
                    </Carousel>
                </main>
            </Fragment>
        );
    }
}

export default windowSize(App)
