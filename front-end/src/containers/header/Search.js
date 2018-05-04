import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {find} from '../../thunk/search';
import {clearData} from '../../actions/search';
import classNames from 'classnames';

class Search extends Component {

    static propTypes = {
        searchResult: PropTypes.array,
        isPending: PropTypes.bool,
        find: PropTypes.func,
        windowWidth: PropTypes.number
    };

    constructor(props) {
        super(props);
        this.state = {
            dropdownData: [],
            searchInput: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    handleChange = (event) => {
        this.setState({searchInput: event.target.value}, () => {
            let {windowWidth} = this.props;
            let {searchInput} = this.state;
            if (windowWidth > 960 && searchInput.length >= 3)
                this.props.find(searchInput);
            else this.props.clearData();
        });
    };

    handleClick = () => {
        this.setState({dropdownData: this.props.searchResult.map(item => item._source)});
    };

    componentWillReceiveProps(nextProps) {
        let {windowWidth} = nextProps;

        if (windowWidth <= 960) {
            this.props.clearData();
            this.setState({dropdownData: []});
            return;
        }

        if (nextProps.searchResult !== this.props.searchResult)
            this.setState({
                dropdownData: nextProps.searchResult.map(item => item._source)
            })
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    handleClickOutside(event) {
        if (event.target.className !== 'custom-dropdown')
            this.setState({dropdownData: []})
    }

    render() {
        let {dropdownData, searchInput} = this.state;
        let {isPending} = this.props;
        let dropdownClasses = (hasData, isPending) => classNames({
            'custom-dropdown': true,
            hidden: !hasData && !isPending
        });
        let itemClasses = (isOutOfStock) => classNames({
            row: true,
            out: isOutOfStock
        });
        return (
            <div className="header__search">
                <section id="search">
                    <div className="icon-search"></div>
                    <input id="search-input" className="form-control search"
                           placeholder="Hello, I’m looking for…" autoComplete="off" spellCheck="false"
                           autoCorrect="off" tabIndex="1" value={searchInput}
                           onChange={this.handleChange} onClick={this.handleClick}/>
                    <div className={dropdownClasses(dropdownData.length > 0, isPending)}>
                        {isPending ? <img width={20} height={20} src="images/spinner.gif" alt=""/> : null}
                        {dropdownData.map((item, i) => <div className={itemClasses(!item.isInStock)} key={i}>{item.name}</div>)}
                    </div>
                </section>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    searchResult: state.search.searchResult,
    isPending: state.search.isPending
});

const mapDispatchToProps = (dispatch) => ({
    find: bindActionCreators(find, dispatch),
    clearData: bindActionCreators(clearData, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Search)
